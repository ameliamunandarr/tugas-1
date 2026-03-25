import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/* 🌐 SCROLL SPEED TRACKER */
function useScrollSpeed() {
  const speed = useRef(0);
  const lastY = useRef(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;
      speed.current = Math.abs(currentY - lastY.current);
      lastY.current = currentY;
    });
  }

  return speed;
}

/* 🔵 MAIN SPHERE */
function AnimatedSphere({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          roughness={0.25}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

/* ✨ PARTICLE */
function ParticleField({ color }: { color: string }) {
  const count = 150;
  const speedRef = useScrollSpeed();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      // 🌀 base rotation
      pointsRef.current.rotation.y += 0.0005;

      // 🚀 tambahan dari scroll speed
      pointsRef.current.rotation.y += speedRef.current * 0.00002;

      // damping biar smooth
      speedRef.current *= 0.9;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color={color}
        transparent
        opacity={0.5}
      />
    </points>
  );
}

/* 🎨 MAIN SCENE */
export default function ThreeScene({ section }: { section: string }) {

  const colors: Record<string, string> = {
    hero: "#6366f1",
    projects: "#a855f7",
    about: "#ec4899",
    skills: "#818cf8",
  };

  const activeColor = colors[section] || "#6366f1";

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>

        {/* LIGHT */}
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color={activeColor}
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={0.5}
          color={activeColor}
        />

        {/* OBJECT */}
        <AnimatedSphere color={activeColor} />
        <ParticleField color={activeColor} />

      </Canvas>
    </div>
  );
}