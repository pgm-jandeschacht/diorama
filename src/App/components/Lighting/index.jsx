import { useRef } from "react";
import { useHelper } from "@react-three/drei";

const Lighting = () => {

    const directionalLightRef = useRef();

    useHelper(
        directionalLightRef,
      );

  return (
    <>
        <ambientLight color={0xdad1fe} intensity={0.1} />

        <directionalLight
            color={0xFFD9A3}
            castShadow={true}
            position={[0, 8, -12.5]}
            intensity={1.2}
        />

        <directionalLight
            intensity={2}
            position={[-6, 7.6, -3.8]}
            color={0xFF6C24}
            castShadow={true}
        />
        
        <directionalLight
            intensity={1}
            position={[0, 5, 40]}
            color={0xb4a4f7}
            castShadow={true}
        />
    </>
  );
};

export default Lighting;
