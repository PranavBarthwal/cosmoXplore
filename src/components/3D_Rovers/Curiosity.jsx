import React, { memo, useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'



function Scene(props) {

    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.y -= 0.001
    })

    const { nodes, materials } = useGLTF('/24584_Curiosity_static.glb')

    return (
        <>

            <group {...props} dispose={null} scale={1} position={[0, -1, 0]} ref={ref}>
                <group position={[1.063, 0.249, 1.095]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000.geometry}
                        material={materials.wheels}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_1.geometry}
                        material={materials.tex_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_2.geometry}
                        material={materials.tex_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_3.geometry}
                        material={materials.parts_AO}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_4.geometry}
                        material={materials.tex_03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_5.geometry}
                        material={materials.tex_05}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_6.geometry}
                        material={materials.tex_04}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_7.geometry}
                        material={materials.tex_03a}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_8.geometry}
                        material={materials.internals}
                    />

                </group>
            </group>
            <mesh scale={5} position={[0, -1, 0]} rotation={[Math.PI * -0.5, 0, 0]} receiveShadow>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial color={"white"} side={DoubleSide} />
            </mesh>
        </>
    )


}

const Curiosity = memo(function Model(props) {
    return (
        <Canvas camera={{ fov: 80, position: [0, 0, 5] }} shadows style={{ height: "400px", width: "400px" }}>
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

useGLTF.preload('/24584_Curiosity_static.glb')

export default Curiosity