import "./nav-menu.css";

import navLogo from "../../../assets/NavMenu/fusion-mine-logo.png";
import discordIcon from "../../../assets/NavMenu/discord-icon.svg";
import vkIcon from "../../../assets/NavMenu/vk.svg";
import { Link } from "react-router";

const NavMenu = () => {
  return (
    <>
      <nav className="nav">
        <img className="nav__logo" src={navLogo} alt="Logo" />
        <ul className="nav__links">
          <li className="nav__link">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="nav__link">
            <Link to={"pass"}>FusionPass</Link>
          </li>
          <li className="nav__link">
            <Link to={"space"}>FusionSpace</Link>
          </li>
          <li className="nav__link">
            <Link to={"about"}>О проекте</Link>
          </li>
        </ul>
        <ul className="nav__sm-links">
          <li className="nav__sm-link">
            <a href="https://discord.gg/3xHFJ95Y">
              <img src={discordIcon} alt="Ссилка на дискорд" />
            </a>
          </li>
          <li className="nav__sm-link">
            <a href="#">
              <img src={vkIcon} alt="Ссилка на Вконтакте" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
