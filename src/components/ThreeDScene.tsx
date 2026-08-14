import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Mouse state for parallax
interface MouseState {
  x: number;
  y: number;
}

// Parallax hook
export function useMouseParallax(intensity = 0.5) {
  const mouse = useRef<MouseState>({ x: 0, y: 0 });
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_state) => {
    if (!ref.current) return;
    const targetX = mouse.current.x * intensity;
    const targetY = mouse.current.y * intensity;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetX, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -targetY, 0.05);
  });

  return ref;
}

// 1. Glossy Play Button (Glass Glassmorphism look)
export function GlossyPlayButton() {
  const shape = new THREE.Shape();
  // Draw an equilateral triangle pointing right, centered
  const size = 1.2;
  const x = -0.5 * size;
  const y = -0.6 * size;
  shape.moveTo(x, y);
  shape.lineTo(x + 1.2 * size, y + 0.6 * size);
  shape.lineTo(x, y + 1.2 * size);
  shape.lineTo(x, y);

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  return (
    <mesh castShadow receiveShadow>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshPhysicalMaterial
        color="#7C3AED" // Electric Violet base tint
        transmission={0.8}
        roughness={0.15}
        ior={1.5}
        thickness={0.8}
        specularIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

// 2. 3D Clapperboard
export function ClapperBoard() {
  const topBarRef = useRef<THREE.Group>(null);
  
  // Subtle animation of the clapper bar opening and closing
  useFrame((state) => {
    if (!topBarRef.current) return;
    const time = state.clock.getElapsedTime();
    topBarRef.current.rotation.z = Math.sin(time * 2) * 0.15 + 0.15;
  });

  return (
    <group>
      {/* Main Board Base */}
      <mesh position={[0, -0.4, 0]} castShadow>
        <boxGeometry args={[1.6, 1.0, 0.15]} />
        <meshStandardMaterial color="#2E1065" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Strips on the base */}
      <mesh position={[0, -0.4, 0.08]}>
        <boxGeometry args={[1.5, 0.8, 0.01]} />
        <meshStandardMaterial color="#FF4D8D" roughness={0.3} />
      </mesh>

      {/* Clapper Top Pivot Group */}
      <group ref={topBarRef} position={[-0.8, 0.15, 0]}>
        {/* Top Board Bar */}
        <mesh position={[0.8, 0.1, 0]} castShadow>
          <boxGeometry args={[1.6, 0.2, 0.15]} />
          <meshStandardMaterial color="#FF4D8D" roughness={0.3} metalness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// 3. Gold Coin Stack
export function GoldCoin({ position = [0, 0, 0] as [number, number, number], scale = 1 }) {
  const coinRef = useRef<THREE.Mesh>(null);

  useFrame((_state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={coinRef} position={position} scale={scale} castShadow receiveShadow>
      <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
      <meshStandardMaterial
        color="#F5B841" // Gold / Reward
        metalness={0.9}
        roughness={0.15}
        envMapIntensity={2.0}
      />
    </mesh>
  );
}

// Stack of multiple coins
export function CoinStack({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      <GoldCoin position={[-0.3, -0.3, 0]} scale={1.1} />
      <GoldCoin position={[0.3, -0.25, 0.1]} scale={1} />
      <GoldCoin position={[0, -0.15, -0.1]} scale={0.9} />
      <GoldCoin position={[-0.1, 0, 0.05]} scale={1.05} />
      <GoldCoin position={[0.2, 0.1, -0.05]} scale={0.95} />
    </group>
  );
}

// 4. Camera Lens / Ring Light Combo
export function CameraLensScene() {
  const lensRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (lensRef.current) {
      lensRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={lensRef}>
      {/* Outer ring light */}
      <mesh castShadow>
        <torusGeometry args={[1.1, 0.12, 16, 100]} />
        <meshPhysicalMaterial
          color="#22D3EE" // Cyan / Energy
          emissive="#22D3EE"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Camera Body Barrel */}
      <mesh position={[0, 0, -0.4]} castShadow>
        <cylinderGeometry args={[0.8, 0.85, 0.7, 32]} />
        <meshStandardMaterial color="#1E1E2F" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Front Reflective Lens Element */}
      <mesh position={[0, 0, -0.05]}>
        <sphereGeometry args={[0.65, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#1A0B2E"
          transmission={0.4}
          roughness={0.05}
          ior={1.8}
          thickness={0.5}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

// 5. 3D Trophy Mesh
export function TrophyMesh() {
  return (
    <group>
      {/* Base */}
      <mesh position={[0, -0.7, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.6, 0.3, 16]} />
        <meshStandardMaterial color="#2E1065" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
        <meshStandardMaterial color="#F5B841" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Main Goblet Cup */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.65, 0.3, 0.8, 24]} />
        <meshStandardMaterial color="#F5B841" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Goblet Sphere top decorative trim */}
      <mesh position={[0, 0.7, 0]}>
        <torusGeometry args={[0.65, 0.05, 8, 32]} />
        <meshStandardMaterial color="#FF4D8D" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Left Handle */}
      <mesh position={[-0.6, 0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.3, 0.06, 8, 24, Math.PI * 1.2]} />
        <meshStandardMaterial color="#F5B841" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Right Handle */}
      <mesh position={[0.6, 0.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.3, 0.06, 8, 24, Math.PI * 1.2]} />
        <meshStandardMaterial color="#F5B841" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  );
}

// 6. 3D Discord Logo / Face Mesh (Stylized R3F version)
export function DiscordLogoMesh() {
  const shape = new THREE.Shape();
  // Draw stylized gaming controller shape representing Discord logo
  // Simple rounded trapezoid face with controller ears
  const x = 0;
  const y = 0;
  
  // Draw left ear
  shape.moveTo(x - 0.7, y + 0.3);
  shape.quadraticCurveTo(x - 0.9, y + 0.7, x - 0.6, y + 0.9);
  shape.quadraticCurveTo(x - 0.3, y + 0.75, x, y + 0.75);
  shape.quadraticCurveTo(x + 0.3, y + 0.75, x + 0.6, y + 0.9);
  shape.quadraticCurveTo(x + 0.9, y + 0.7, x + 0.7, y + 0.3);
  
  // Right side curve
  shape.quadraticCurveTo(x + 1.1, y - 0.3, x + 0.8, y - 0.7);
  // Bottom bumps/feet
  shape.quadraticCurveTo(x + 0.5, y - 0.8, x + 0.4, y - 0.55);
  shape.quadraticCurveTo(x + 0.2, y - 0.45, x, y - 0.5);
  shape.quadraticCurveTo(x - 0.2, y - 0.45, x - 0.4, y - 0.55);
  shape.quadraticCurveTo(x - 0.5, y - 0.8, x - 0.8, y - 0.7);
  // Left side curve
  shape.quadraticCurveTo(x - 1.1, y - 0.3, x - 0.7, y + 0.3);

  const extrudeSettings = {
    depth: 0.35,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  };

  return (
    <group>
      {/* Outer Emblem Shield */}
      <mesh castShadow position={[0, 0, -0.2]}>
        <cylinderGeometry args={[1.3, 1.4, 0.15, 32]} />
        <meshPhysicalMaterial
          color="#2E1065"
          transmission={0.4}
          roughness={0.2}
          thickness={0.5}
        />
      </mesh>

      {/* Extruded Controller Base */}
      <mesh castShadow position={[0, 0, -0.1]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#22D3EE" // Discord themed neon cyan / blue glow
          transmission={0.2}
          roughness={0.1}
          clearcoat={1.0}
          emissive="#22D3EE"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Eye Left */}
      <mesh position={[-0.3, 0, 0.25]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#1A0B2E" roughness={0.1} />
      </mesh>

      {/* Eye Right */}
      <mesh position={[0.3, 0, 0.25]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#1A0B2E" roughness={0.1} />
      </mesh>
    </group>
  );
}

// 7. Wireframe Globe with nodes
export function WireframeGlobe() {
  const globeGroupRef = useRef<THREE.Group>(null);

  useFrame((_state) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.005;
      globeGroupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* Central core sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.15} />
      </mesh>

      {/* Main wireframe globe */}
      <mesh>
        <sphereGeometry args={[1.2, 24, 24]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Secondary outer wireframe globe for depth */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
        <sphereGeometry args={[1.22, 12, 12]} />
        <meshBasicMaterial color="#FF4D8D" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Floating Nodes */}
      <group>
        <mesh position={[0.8, 0.8, 0.5]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#FF4D8D" />
        </mesh>
        <mesh position={[-0.8, -0.6, 0.8]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>
        <mesh position={[0.5, -0.9, -0.6]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#F5B841" />
        </mesh>
        <mesh position={[-0.5, 0.9, -0.7]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#34D399" />
        </mesh>
      </group>
    </group>
  );
}

// General Wrapper to render a canvas and inject lighting and helper objects
interface R3FCanvasWrapperProps {
  children: React.ReactNode;
  parallaxIntensity?: number;
  showSparkles?: boolean;
  sparkleColor?: string;
  sparkleCount?: number;
}

export function R3FCanvasWrapper({
  children,
  parallaxIntensity = 0.3,
  showSparkles = true,
  sparkleColor = "#22D3EE",
  sparkleCount = 40,
}: R3FCanvasWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Canvas
      dpr={isMobile ? 1 : [1, 1.5]}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, 2]} intensity={1.0} color="#7C3AED" />
      <directionalLight position={[5, -5, 2]} intensity={1.2} color="#22D3EE" />
      <spotLight position={[0, 5, 5]} intensity={1.0} penumbra={1} color="#FF4D8D" />
      
      <ParallaxContainer intensity={isMobile ? 0 : parallaxIntensity}>
        <Float 
          speed={isMobile ? 1.0 : 2.5} 
          rotationIntensity={isMobile ? 0.25 : 0.6} 
          floatIntensity={isMobile ? 0.3 : 0.8}
        >
          {children}
        </Float>
      </ParallaxContainer>

      {showSparkles && !isMobile && (
        <Sparkles
          count={sparkleCount}
          scale={5}
          size={1.5}
          speed={0.4}
          color={sparkleColor}
        />
      )}
    </Canvas>
  );
}

// Parallax controller wrapper for inside Canvas
function ParallaxContainer({ children, intensity }: { children: React.ReactNode; intensity: number }) {
  const ref = useMouseParallax(intensity);
  return <group ref={ref}>{children}</group>;
}
