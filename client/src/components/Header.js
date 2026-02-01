import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🍽️ Eatoes Admin Dashboard</h1>

        <nav className="nav-buttons">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            Orders
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
