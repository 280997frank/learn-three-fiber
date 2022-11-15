import { Canvas } from '@react-three/fiber';
import { SceneContainer } from './SceneContainer';

function App() {
  return (
    <Canvas>
      <ambientLight />
    <SceneContainer />
  </Canvas>
  );
}

export default App;
