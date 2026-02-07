import { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';

// Detect mobile device
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768;
};

const Pistol3D = memo(() => {
  const groupRef = useRef();
  const mobile = useMemo(() => isMobile(), []);
  const frameCount = useRef(0);
  const segments = 16; // Keep quality

  useFrame((state) => {
    if (groupRef.current) {
      frameCount.current++;
      // Throttle on mobile (30fps)
      if (!mobile || frameCount.current % 2 === 0) {
        groupRef.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <Cylinder args={[0.06, 0.06, 1.2, segments]} position={[0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow={false}>
        <meshStandardMaterial color="#2a2e34" metalness={0.9} roughness={0.2} />
      </Cylinder>
      <Box args={[0.7, 0.4, 0.18]} position={[-0.15, 0, 0]} castShadow={false}>
        <meshStandardMaterial color="#1a1d21" metalness={0.8} roughness={0.3} />
      </Box>
      <Box args={[0.22, 0.5, 0.16]} position={[-0.25, -0.4, 0]} rotation={[0, 0, -0.2]} castShadow={false}>
        <meshStandardMaterial color="#3a3f47" metalness={0.5} roughness={0.5} />
      </Box>
      <Box args={[0.04, 0.12, 0.04]} position={[1.05, 0.25, 0]} castShadow={false}>
        <meshStandardMaterial color="#c62828" metalness={0.6} roughness={0.4} />
      </Box>
    </group>
  );
});

const Rifle3D = memo(() => {
  const groupRef = useRef();
  const mobile = useMemo(() => isMobile(), []);
  const frameCount = useRef(0);
  const segments = 16; // Keep quality

  useFrame((state) => {
    if (groupRef.current) {
      frameCount.current++;
      // Throttle on mobile (30fps)
      if (!mobile || frameCount.current % 2 === 0) {
        groupRef.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <group ref={groupRef} scale={0.8}>
      <Cylinder args={[0.05, 0.05, 2.5, segments]} position={[1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow={false}>
        <meshStandardMaterial color="#2a2e34" metalness={0.9} roughness={0.2} />
      </Cylinder>
      <Box args={[1.2, 0.3, 0.15]} position={[-0.3, 0, 0]} castShadow={false}>
        <meshStandardMaterial color="#4a3020" metalness={0.2} roughness={0.8} />
      </Box>
      <Box args={[0.6, 0.25, 0.12]} position={[-1.0, -0.15, 0]} castShadow={false}>
        <meshStandardMaterial color="#3a2818" metalness={0.3} roughness={0.7} />
      </Box>
      <Cylinder args={[0.08, 0.08, 0.3, segments]} position={[0.5, 0.2, 0]} castShadow={false}>
        <meshStandardMaterial color="#1a1d21" metalness={0.8} roughness={0.3} />
      </Cylinder>
    </group>
  );
});

export { Pistol3D, Rifle3D };
