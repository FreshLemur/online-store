import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import cartIcon from "../assets/svg/cartIcon.svg";
export default function NavBar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/checkout">
              Checkout
            </Link>
          </li>
          <section>
            <img src={cartIcon} alt="cartIcon" />
            <span className={styles.cartQuantity}>0</span>
          </section>
        </ul>
      </nav>
    </header>
  );
}
