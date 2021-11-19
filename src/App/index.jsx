import { Canvas } from "@react-three/fiber";
import Content from "./Content";

function App() {
  return (
      <Canvas shadows shadowMap orthographic camera={{ zoom: 55, position: [12, 9, 7] }}>
          <Content linear={false} shadows={true} />
      </Canvas>
  );
}

export default App;
