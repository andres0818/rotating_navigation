import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Information from "./components/Information/Information";

function App() {
  const [rotation, setRotation] = useState({ nav: 0, content: 0 });

  return (
    <div className="app">
      <Information rotation={rotation} setRotation={setRotation} />
      <Nav rotation={rotation} setRotation={setRotation} />
    </div>
  );
}

export default App;
