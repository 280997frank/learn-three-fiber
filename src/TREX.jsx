import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function TREX() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/TREX.glb");

  return (
    <primitive object={gltf.scene} position={[1, 5.75, 1.75]} rotation={[3.15, -1.5, 0]}/>
  )
}
