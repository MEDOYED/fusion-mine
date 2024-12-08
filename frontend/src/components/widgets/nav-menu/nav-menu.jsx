import "./nav-menu.css";

import navLogo from "../../../assets/NavMenu/fusion-mine-logo.png";
import discordIcon from "../../../assets/NavMenu/discord-icon.svg";
import vkIcon from "../../../assets/NavMenu/vk.svg";

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
