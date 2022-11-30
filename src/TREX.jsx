import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useState} from "react";

export function TREX() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/TREX.glb");

  const [x, setX] = useState(1)
  const [z, setZ] = useState(1.75)
  const [y, setY] = useState(5.75)

  window.addEventListener("keydown", (event) => {
    const keyCode = event.which;
    console.log(keyCode)
    if (keyCode === 65) {
      setX(x - 0.1)
    } else if (keyCode === 87) {
      setZ(z - 0.1)
    } else if (keyCode === 68) {
      setX(x + 0.1)
    } else if (keyCode === 83) {
      setZ(z + 0.1)
    } else if (keyCode === 90) {
      setY(y + 0.1)
    } else if (keyCode === 88) {
      setY(y - 0.1)
    }
    //   cube.position.y -= ySpeed;
    // } else if (keyCode == 65) {
    //   cube.position.x -= xSpeed;
    // } else if (keyCode == 68) {
    //   cube.position.x += xSpeed;
    // } else if (keyCode == 32) {
    //   cube.position.set(0, 0, 0);
    // }
  })

  return (
    <primitive object={gltf.scene} position={[x, y, z]} rotation={[3.15, -1.5, 0]}/>
  )
}
