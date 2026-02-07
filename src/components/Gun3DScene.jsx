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
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: !mobile,
          powerPreference: mobile ? 'low-power' : 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[3, 0, 3]} />
        
        {/* Optimized Lighting for Mobile */}
        <ambientLight intensity={mobile ? 0.8 : 0.6} />
        {!mobile && <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow={false} />}
        <directionalLight position={mobile ? [5, 5, 5] : [-10, 5, -5]} intensity={mobile ? 0.8 : 0.4} castShadow={false} />
        {!mobile && <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8B1E1E" />}
        {!mobile && <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} castShadow={false} />}
        
        {/* Environment - Disabled on mobile for performance */}
        {!mobile && <Environment preset="studio" />}
        
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
