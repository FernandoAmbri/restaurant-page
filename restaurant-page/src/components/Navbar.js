import { React } from "react";
import { NavLink } from "react-router-dom";

const options = [
  {
    path: "/",
    option: "Home",
  },
  {
    path: "/menu",
    option: "Menú",
  },
  {
    path: "/about",
    option: "Quienes somos",
  },
  {
    path: "/contact",
    option: "Contacto",
  },
];

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <h1>Pizza Logo</h1>
          <ul className="navbar-menu">
            {options.map(({ path, option }) => (
              <li key={option}>
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) => {
                    if (isActive) return "active";
                    if (isPending) return "pending";
                    return "";
                  }}
                >
                  {option}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
