import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src="/logo.png" alt="WorldWise logo" />
      </Link>
    </div>
  );
}

export default Logo;
