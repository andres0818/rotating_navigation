import { useState } from "react";
import "./Nav.scss";
const Nav = () => {
  const [rotation, setRotation] = useState({ nav: 0, content: 0 });

  const open = () => {
    const newRotation = { ...rotation, nav: 90 };
    setRotation(newRotation);
  };
  const close = () => {
    const newRotation = { ...rotation, nav: 0 };
    setRotation(newRotation);
  };

  return (
    <div
      style={{
        transform: `rotate(-${rotation.nav}deg)`,
      }}
      className="nav"
    >
      <h1 onClick={open} className="nav__open">
        {" "}
      </h1>
      <h1 onClick={close} className="nav__close">
        +
      </h1>
    </div>
  );
};

export default Nav;
