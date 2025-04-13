import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

const Birds = () => {
    const { scene, animations } = useGLTF('../public/3d/bird.glb')
    const BirdRef = useRef()
    const { actions } = useAnimations(animations, BirdRef);
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
    }, [actions])


    useFrame(({ clock, camera }) => {
        BirdRef.current.positiony = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (BirdRef.current.position.x > camera.position.x + 10) {
            BirdRef.current.rotation.y = Math.PI;
        }else if(BirdRef.current.position.x < camera.position.x - 10) {
            BirdRef.current.rotation.y = 0;
        }



        if (BirdRef.current.rotation.y === 0) {
            BirdRef.current.position.x += 0.01;
            BirdRef.current.position.z -= 0.01;

        }
        else {
            BirdRef.current.position.x -= 0.01;
            BirdRef.current.position.z += 0.01;
        }
    }
    )
    return (
        <mesh ref={BirdRef} position={[-5, 1, 1]} rotation={[0, 0, 0]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Birds