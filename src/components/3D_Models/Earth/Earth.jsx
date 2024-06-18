
import React, { useRef, memo, useState, useEffect } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Styles from './Earth.module.css'


function Scene(props) {
    const { nodes, materials } = useGLTF('/Earth_1_12756.glb')

    const ref = useRef()


    useFrame(() => {
        ref.current.rotation.y -= 0.001
        ref.current.rotation.z -= 0.001
    })



    return (
        <group {...props} dispose={null} ref={ref}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Default OBJ']}
            />
        </group>
    )
}

const Earth = memo(function Earth(props) {

    return (
        <Canvas id={Styles.canvas} >
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={7} />
            <pointLight position={[0, 10, 0]} intensity={100} />
            <pointLight position={[0, -10, 0]} intensity={100} />
            <pointLight position={[10, -7, 0]} intensity={100} />
            <pointLight position={[-10, -7, 0]} intensity={100} />
            <Scene props={props} scale={0.006} />
        </Canvas>
    )

})

useGLTF.preload('/Earth_1_12756.glb')

export default Earth