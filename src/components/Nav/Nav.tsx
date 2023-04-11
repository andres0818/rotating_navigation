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
    <div className="nav__container">
      <div
        style={{
          transform: `rotate(-${rotation.nav}deg)`,
        }}
        className="nav"
      >
        <div onClick={open} className="nav__openContainer">
          <h1 className="nav__open"> </h1>
        </div>
        <h1 onClick={close} className="nav__close">
          +
        </h1>
      </div>
      <div className="container">
        <h1 className={rotation.nav === 0 ? `container__text` : "visible"}>
          HOME
        </h1>
        <h1 className={rotation.nav === 0 ? `container__text` : "visible"}>
          ABOUT
        </h1>
        <h1 className={rotation.nav === 0 ? `container__text` : "visible"}>
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default Nav;
