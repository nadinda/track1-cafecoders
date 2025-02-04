/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/TableSetup.glb
Author: Elen (https://sketchfab.com/Kitty999)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TableSetup(props) {
  const { nodes, materials } = useGLTF("./models/TableSetup.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.DefaultMaterial}
        position={[1.272, 0.57, -0.039]}
      />
      <mesh
        geometry={nodes.serpents_and_climbs_boardgames_0.geometry}
        material={materials.boardgames}
        position={[1.204, 1.174, 0.062]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.148, 0.09, 0.067]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[1.398, 1.198, -0.23]}
        scale={[0.033, 0.038, 0.033]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial002}
        position={[1.398, 1.271, -0.23]}
        scale={[0.044, 0.05, 0.044]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial003}
        position={[1.398, 1.263, -0.23]}
        rotation={[-3.111, 0.015, -3.031]}
        scale={[0.004, 0.086, 0.004]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials["Material.006"]}
        position={[1.399, 1.232, -0.19]}
        rotation={[1.668, 0, -Math.PI]}
        scale={[-0.011, 0.006, 0.019]}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.Material}
        position={[1.502, 1.157, -0.27]}
        scale={[0.027, 0.026, 0.027]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.Coffee}
        position={[1.533, 1.224, 0.178]}
        scale={[0.993, 0.979, 0.798]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.material}
        position={[1.533, 1.159, 0.178]}
        scale={[0.993, 0.979, 0.798]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.Plate}
        position={[1.535, 1.157, 0.178]}
        scale={[0.993, 0.979, 0.798]}
      />
      <instancedMesh
        args={[nodes.mesh_5.geometry, materials.PaletteMaterial003, 22]}
        instanceMatrix={nodes.mesh_5.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.mesh_7.geometry, materials.lambert12, 8]}
        instanceMatrix={nodes.mesh_7.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("./models/TableSetup.glb");
