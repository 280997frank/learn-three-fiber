import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { BufferAttribute, Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function FloatingIsland() {
  // thanks to https://polyhaven.com/textures !
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_island.glb");

  return (
    <primitive object={gltf.scene} />
  )
}
