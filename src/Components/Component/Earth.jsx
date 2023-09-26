import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Modell(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/earth.gltf')
  const { actions } = useAnimations(animations, group)

  // Add a rotation animation

  useFrame(({ clock }) => {
    group.current.rotation.y += 0.003; // Horizontal rotation
    group.current.rotation.x += 0.001; // Vertical rotation
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root" rotation={[0, Math.PI / 4, 0]}> {/* Adjust the rotation as needed */}
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} scale={[1.8, 1.8, 1.8]} /> {/* Adjust the scale as needed */}
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} scale={[1.8, 1.8, 1.8]} /> {/* Adjust the scale as needed */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth.gltf')
