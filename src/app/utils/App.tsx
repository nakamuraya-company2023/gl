'use client'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () =>{
    const mesh = useRef()

    return(
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    )
}

export default function App(){
    return(
        <Canvas camera={{position:[1,1,1]}}>
            <Scene />
            <OrbitControls />
        </Canvas>
    )
}