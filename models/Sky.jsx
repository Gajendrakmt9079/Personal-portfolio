import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Sky = ({ isRotating }) => {
  const skyRef = useRef()
  const { scene } = useGLTF('../public/3d/sky.glb')

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Sky