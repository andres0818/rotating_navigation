import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  const [rotation, setRotation] = useState({ nav: 0, content: 0 });

  return (
    <>
      <Nav rotation={rotation} setRotation={setRotation} />
    </>
  );
}

export default App;
