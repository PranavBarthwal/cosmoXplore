
import React, { useRef, memo, useState, useEffect } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Styles from './Neptune.module.css'

function Scene(props) {
    const { nodes, materials } = useGLTF('/Neptune_1_49528.glb')

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
                geometry={nodes.Neptune.geometry}
                material={materials['Default OBJ.001']}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

const Earth = memo(function Earth(props) {

    return (
        <Canvas id={Styles.canvas} >
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={5} color={'rgb(0, 153, 255)'} />
            <Scene props={props} scale={0.006} />
        </Canvas>
    )

})

useGLTF.preload('/Neptune_1_49528.glb')

export default Earth