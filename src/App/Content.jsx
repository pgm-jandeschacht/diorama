import React from 'react'
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import Diorama from "./components/Diorama";
import Lighting from "./components/Lighting";

const Content = () => {
    return (
        <>
            <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} /> 

            <Lighting/>

            <Suspense fallback={null}>
                <Diorama/>
            </Suspense>
        </>
    )
}

export default Content
