import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import cartIcon from "../assets/svg/cartIcon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function NavBar() {
  const cartState = useSelector((state: RootState) => state.cartState.items);

  return (
    <header>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/">
              Головна
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/products">
              Товари
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/cart">
              Кошик
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/checkout">
              Оформлення замовлення
            </Link>
          </li>
          <section>
            <img src={cartIcon} alt="cartIcon" />
            <span className={styles.cartQuantity}>{cartState.length}</span>
          </section>
        </ul>
      </nav>
    </header>
  );
}
