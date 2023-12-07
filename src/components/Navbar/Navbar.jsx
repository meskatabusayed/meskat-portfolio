import { NavLink } from "react-router-dom";
import { links } from "../../data";
import './navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            {links.map(({ name, icon, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <NavLink to={path} className="nav__link">
                    {icon}
                    <h3 className="nav__name">{name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
