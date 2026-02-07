import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Gun3DModel from './Gun3DModel';

const Gun3DScene = ({ enableControls = true }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 0, 3]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.4} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8B1E1E" />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} />
        
        {/* Environment */}
        <Environment preset="studio" />
        
        {/* 3D Model */}
        <Suspense fallback={null}>
          <Gun3DModel />
        </Suspense>
        
        {/* Controls */}
        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minDistance={2}
            maxDistance={6}
            maxPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Gun3DScene;
