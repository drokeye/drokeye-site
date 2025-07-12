import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingBlobs() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
  });

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 4,
          Math.cos(i) * 2,
          Math.sin(i * 1.5) * 4
        ]}>
          <meshStandardMaterial
            emissive={`hsl(${i * 30}, 100%, 70%)`}
            emissiveIntensity={1.5}
            color="#000"
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BackgroundCanvas() {
  return (
    <Canvas
      /* ----- THESE INLINE STYLES SIZE THE WRAPPER ----- */
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',  // canvas won’t capture clicks
      }}
      /* (className now only affects the <canvas>, optional) */
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <FloatingBlobs />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
