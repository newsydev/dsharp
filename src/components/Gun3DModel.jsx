import { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Detect mobile device
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768;
};

// GLB Model Loader - Educational firearm representation
const Gun3DModel = memo(({ modelPath = '/models/gun.glb' }) => {
  const groupRef = useRef();
  const mobile = useMemo(() => isMobile(), []);
  const frameCount = useRef(0);
  
  // Load model with useGLTF hook
  let model = null;
  try {
    const gltf = useGLTF(modelPath);
    model = gltf.scene;
    
    // Light optimization without compromising quality (only once)
    if (model && !model.userData.optimized) {
      model.traverse((child) => {
        if (child.isMesh) {
          // Disable shadows but keep material quality
          child.castShadow = false;
          child.receiveShadow = false;
          // Enable frustum culling for better performance
          child.frustumCulled = true;
        }
      });
      model.userData.optimized = true;
    }
  } catch (error) {
    console.warn('GLB model not found, using fallback:', error);
  }

  useFrame((state) => {
    if (groupRef.current) {
      frameCount.current++;
      
      // Throttle updates on mobile (every 2nd frame = 30fps instead of 60fps)
      const shouldUpdate = mobile ? frameCount.current % 2 === 0 : true;
      
      if (shouldUpdate) {
        // Smooth rotation for presentation
        groupRef.current.rotation.y += 0.005;
        // Keep floating animation but throttle on mobile
        groupRef.current.position.y = -1.0 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]} scale={[3, 3, 3]} position={[0, -0.5, 0]}>
      {model ? (
        <primitive object={model} />
      ) : (
        // Fallback: Simple geometric representation
        <group>
          <mesh position={[0, 0, 0]} castShadow={false} receiveShadow={false}>
            <boxGeometry args={[1, 0.3, 0.2]} />
            <meshStandardMaterial color="#2a2e34" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.5, 0, 0]} castShadow={false} receiveShadow={false}>
            <cylinderGeometry args={[0.05, 0.05, 1, 16]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#1a1d21" metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      )}
    </group>
  );
});

export default Gun3DModel;
