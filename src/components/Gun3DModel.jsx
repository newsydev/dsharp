import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// GLB Model Loader - Educational firearm representation
const Gun3DModel = ({ modelPath = '/models/gun.glb' }) => {
  const groupRef = useRef();
  
  // Try to load GLB model, fallback to null if not available
  let model = null;
  try {
    const gltf = useGLTF(modelPath);
    model = gltf.scene;
  } catch (error) {
    console.warn('GLB model not found, using fallback:', error);
  }

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation for presentation
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = -1.0 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]} scale={[3, 3, 3]} position={[0, -0.5, 0]}>
      {model ? (
        <primitive object={model.clone()} />
      ) : (
        // Fallback: Simple geometric representation
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 0.3, 0.2]} />
            <meshStandardMaterial color="#2a2e34" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.5, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1, 16]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#1a1d21" metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      )}
    </group>
  );
};

export default Gun3DModel;
