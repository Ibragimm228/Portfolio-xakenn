import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  if (isMobile) {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.1 : 0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.8 : 1}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />
      <pointLight intensity={isMobile ? 0.8 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isMobile && isLoading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="canvas-loader"></div>
        <p className="text-white text-[14px] font-bold mt-5">Загрузка 3D модели...</p>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance", antialias: false }}
      style={{ touchAction: 'none' }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
