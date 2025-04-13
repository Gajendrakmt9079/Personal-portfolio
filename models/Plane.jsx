import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, planeposition, planescale, rotation }) => {
    const { scene, animations } = useGLTF('/3d/plane.glb')
    const planeRef = useRef()
    const { actions } = useAnimations(animations, planeRef)

    useEffect(() => {
        // Find the first available animation action
        const animationName = actions ? Object.keys(actions)[0] : null

        if (animationName && actions[animationName]) {
            if (true) {
                actions[animationName].play()
            } else {
                actions[animationName].stop()
            }
        }

        return () => {
            // Cleanup on unmount
            if (animationName && actions[animationName]) {
                actions[animationName].stop()
            }
        }
    }, [isRotating, actions])

    return (
        <mesh position={planeposition} rotation={rotation} ref={planeRef} scale={planescale}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane