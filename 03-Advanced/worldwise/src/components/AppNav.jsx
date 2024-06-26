import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import Logo from "./Logo";

const AppNav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppNav;
