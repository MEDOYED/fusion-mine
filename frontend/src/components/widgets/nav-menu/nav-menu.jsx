import "./nav-menu.css";

import navLogo from "../../../assets/fusion-mine-logo.png";

const NavMenu = () => {
  return (
    <>
      <nav className="nav">
        <img className="nav__logo" src={navLogo} alt="Logo" />
        <ul className="nav__links">
          <li className="nav__link">Главная</li>
          <li className="nav__link">FusionPass</li>
          <li className="nav__link">FusionSpace</li>
          <li className="nav__link">О проекте</li>
        </ul>
        <ul className="nav__sm-links">
          <li className="nav__sm-link">D</li>
          <li className="nav__sm-link">VK</li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
