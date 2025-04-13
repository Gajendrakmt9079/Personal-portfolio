/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useRef, useCallback} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

const Island = ({ isRotating, setIsRotating, setCurrentStage , ...props }) => {
    const islandref = useRef()
    const { gl, viewport } = useThree()
    const { nodes, materials } = useGLTF('../public/3d/island.glb')
    

    const lastX = useRef(0)
    const rotationspeed = useRef(0)
    const dammpingFactor = 0.95

    const handlePointerDown = useCallback((e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(true)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        lastX.current = clientX
    }, [setIsRotating])

    const handlePointerUp = useCallback((e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(false)
    }, [setIsRotating])

    const handlePointerMove = useCallback((e) => {
        e.stopPropagation()
        e.preventDefault()
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const deltaX = (clientX - lastX.current) / viewport.width
            islandref.current.rotation.y += deltaX * 0.01 * Math.PI
            lastX.current = clientX
            rotationspeed.current = deltaX * 0.01 * Math.PI
        }
    }, [isRotating, viewport.width])

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowLeft') {
            islandref.current.rotation.y += 0.01 * Math.PI
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) {
                setIsRotating(true)
            }
            islandref.current.rotation.y -= 0.01 * Math.PI
        }
    }, [isRotating, setIsRotating])

    const handleKeyUp = useCallback((e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false)
        }
    }, [setIsRotating])

    useFrame(() => {
        if (!islandref.current) return
        
        if (isRotating) {
            rotationspeed.current *= dammpingFactor

            if (Math.abs(rotationspeed.current) < 0.001) {
                rotationspeed.current = 0
            }
            islandref.current.rotation.y += rotationspeed.current
        } else {
            const rotation = islandref.current.rotation.y
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
            
         
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                  setCurrentStage(4);
                  break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                  setCurrentStage(3);
                  break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                  setCurrentStage(2);
                  break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                  setCurrentStage(1);
                  break;
                default:
                  setCurrentStage(null);
              }
      
        }
    })

    useEffect(() => {
        const canvas = gl.domElement
        canvas.addEventListener('pointerdown', handlePointerDown)
        canvas.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('pointerup', handlePointerUp)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
            canvas.removeEventListener('pointermove', handlePointerMove)
            document.removeEventListener('pointerup', handlePointerUp)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown, handleKeyUp])

    return (
        <group ref={islandref} {...props}>
            <mesh
                geometry={nodes.polySurface944_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface945_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface946_tree2_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface947_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface948_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface949_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.pCube11_rocks1_0.geometry}
                material={materials.PaletteMaterial001}
            />
        </group>
    )
}

export default Island