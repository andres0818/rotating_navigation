import "./Nav.scss";

interface Props {
  rotation: { nav: number; content?: number };
  setRotation: (value: any) => void;
}

const Nav = ({ rotation, setRotation }: Props): JSX.Element => {
  const open = () => {
    const newRotation = { content: 20, nav: 90 };
    setRotation(newRotation);
  };
  const close = () => {
    const newRotation = { content: 0, nav: 0 };
    setRotation(newRotation);
  };

  const positionNav = rotation.nav === 0 ? "fixed" : "absolute";

  return (
    <div className="nav__container">
      <div
        style={{
          transform: `rotate(-${rotation.nav}deg)`,
          position: positionNav,
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
