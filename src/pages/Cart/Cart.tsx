import { RootState } from "../../store/store";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartState = useSelector((state: RootState) => state.cartState.items);

  const handleDelete = () => {
    console.log(cartState);
  };

  return (
    <div className={styles.cartWrapper}>
      {cartState.map((cartState) => (
        <div className={styles.cartProductWrapper} key={cartState.id}>
          <img
            className={styles.cartProductImage}
            src={cartState.imageUrl}
            alt={cartState.name}
          />
          <h2>{cartState.name}</h2>

          <section className={styles.cartQuantitySection}>
            <label className={styles.cartQuantityLabel} htmlFor="cartQuantity">
              Кількість: {cartState.quantity}
            </label>
            <input
              className={styles.cartQuantityInput}
              type="number"
              name="cartQuantity"
              id="cartQuantity"
            />
          </section>

          <h2>Ціна: {cartState.price}</h2>

          <button className={styles.cartDeleteButton} onClick={handleDelete}>
            Видалити
          </button>
          <div className={styles.totalQuantity}>
            <h2>Загальна сума: {""}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
