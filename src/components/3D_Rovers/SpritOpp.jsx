import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'
import { memo } from 'react';


function Scene(props) {


    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.y -= 0.001
    })

    const { nodes, materials } = useGLTF('/24883_MER_static.glb')


    return (
        <>
            <group {...props} dispose={null} rotation={[0, 0, 0]} position={[0, -1, 0]} scale={2} ref={ref}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000.geometry}
                    material={materials.tex_panels_n}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_1.geometry}
                    material={materials.tex_panels2_n}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_2.geometry}
                    material={materials.tex_instruments}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_3.geometry}
                    material={materials.tex_body_n}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_4.geometry}
                    material={materials.tex_suspension_n}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_5.geometry}
                    material={materials.Silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_6.geometry}
                    material={materials.tex_mast}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_7.geometry}
                    material={materials.foil_silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube000_8.geometry}
                    material={materials.tex_arm}
                />
            </group>
            <mesh scale={5} position={[0, -1, 0]} rotation={[Math.PI * -0.5, 0, 0]} receiveShadow>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial color={"white"} side={DoubleSide} />
            </mesh>
        </>
    )

}


const SpritOpp = memo(function SpritOpp(props) {
    return (
        <Canvas camera={{ fov: 80, position: [0, 0, 5] }} shadows style={{ height: "400px" }}>
            <OrbitControls minDistance={4.0} maxDistance={5.0} />
            <ambientLight intensity={1} />
            <directionalLight intensity={5} position={[0, 2, 0]} color={"white"} castShadow />
            <directionalLight intensity={5} position={[0, 0, 2]} color={"#B0845B"} castShadow />
            <directionalLight intensity={5} position={[-2, 0, 0]} color={"#B0845B"} castShadow />
            <directionalLight intensity={5} position={[2, 0, 0]} color={"#B0845B"} castShadow />
            <Scene props={props} />

        </Canvas>

    )
})

useGLTF.preload('/24883_MER_static.glb')

export default SpritOpp  