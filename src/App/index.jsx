import { Canvas } from "@react-three/fiber";
import Content from "./Content";

function App() {
  return (
      <Canvas shadows shadowMap orthographic camera={{ zoom: 70, position: [25, 30, 25] }}>
          <Content linear={false} shadows={true} />
      </Canvas>
  );
}

export default App;
