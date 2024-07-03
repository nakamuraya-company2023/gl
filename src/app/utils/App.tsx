'use client';

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import vertexShader from "./glsl/vertex.glsl";
import fragmentShader from "./glsl/fragment.glsl";
import { Color } from "three";

const Scene = () =>{
    const mesh = useRef();

    const uniforms = useMemo(
        () => ({
            u_time:{
                value:0.0,
            },
            u_colorA:{value:new Color("#FFE486")},
            u_colorB:{value:new Color("#FG65988")},
        }),
        []
    );

    useFrame((state) =>{
        const {clock} = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    })

    return(
        <mesh ref={mesh}
        position={[0.0,0.0,1.0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.0}>
            <planeGeometry args={[1.0, 1.0, 16.0, 16.0]} />
            <shaderMaterial
            fragmentShader = {fragmentShader}
            vertexShader = {vertexShader}
            uniforms={uniforms}
            wireframe
            />
        </mesh>
    )
}

export default function App(){
    return(
        <Canvas camera={{position:[0,0,1]}}>
            <Scene />
            <OrbitControls/>
        </Canvas>
    )
}