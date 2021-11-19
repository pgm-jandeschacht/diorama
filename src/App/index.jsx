import { Canvas } from "@react-three/fiber";
import Content from "./Content";

function App() {
  return (
      <Canvas shadows shadowMap>
          <Content linear={false} shadows={true} />
      </Canvas>
  );
}

export default App;
