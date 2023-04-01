import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ComputerComponent = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        castShadow
        penumbra={1}
        angle={0.12}
        intensity={1}
        shadow-mapSize={1024}
        position={[-20, 50, 10]}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        rotation={[-0.01, -0.2, -0.1]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChanges = (ev) => setIsMobile(ev.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChanges);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChanges);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        position: [20, 3, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerComponent isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
