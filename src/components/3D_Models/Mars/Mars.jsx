import React, { memo, useMemo, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Styles from './Mars.module.css'

function Scene(props) {
    const { nodes, materials } = useGLTF('/Mars_1_6792.glb')

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
                geometry={nodes.Cube008.geometry}
                material={materials['Default OBJ.005']}
            />
        </group>
    )
}

const Mars = memo(function Mars(props) {
    return (
        <Canvas style={{ height: '400px', width: '400px' }} id={Styles.canvas} >
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1} minPolarAngle={1} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Scene props={props} scale={0.006} />
        </Canvas>
    )

})

useGLTF.preload('/Mars_1_6792.glb')

export default Mars