import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import Gun3DModel from './Gun3DModel';

// Detect mobile device
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768;
};

const Gun3DScene = ({ enableControls = true }) => {
  const mobile = useMemo(() => isMobile(), []);
  
  return (
    <div className="w-full h-full">
      <Canvas 
        dpr={mobile ? [1, 1.5] : [1, 2]} 
        frameloop="demand"
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          powerPreference: 'default',
          alpha: false,
          stencil: false,
          depth: true
        }}
      >
        <PerspectiveCamera makeDefault position={[3, 0, 3]} fov={mobile ? 60 : 50} />
        
        {/* Optimized Lighting - Keep quality but disable shadows */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow={false} />
        <directionalLight position={[-10, 5, -5]} intensity={0.4} castShadow={false} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8B1E1E" castShadow={false} />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} castShadow={false} />
        
        {/* Environment with lower resolution on mobile */}
        <Environment preset="studio" resolution={mobile ? 256 : 512} />
        
        {/* 3D Model */}
        <Suspense fallback={null}>
          <Gun3DModel />
        </Suspense>
        
        {/* Controls with performance optimization */}
        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minDistance={2}
            maxDistance={6}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={mobile ? 0.5 : 1}
            makeDefault
          />
        )}
      </Canvas>
    </div>
  );
};

export default Gun3DScene;
