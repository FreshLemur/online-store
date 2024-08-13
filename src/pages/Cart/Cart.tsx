import styles from "./cart.module.css";

export default function Cart() {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartProductWrapper}>
        <img
          className={styles.cartProductImage}
          src="https://picsum.photos/200/200?random=5"
          alt=""
        />
        <h2>Смарт-годинник Samsung Galaxy Watch 4</h2>
        <section className={styles.cartQuantitySection}>
          <label className={styles.cartQuantityLabel} htmlFor="cartQuantity">
            Кількість:
          </label>
          <input
            className={styles.cartQuantityInput}
            type="number"
            name="cartQuantity"
            id="cartQuantity"
          />
        </section>
        <button className={styles.cartDeleteButton}>Видалити</button>
      </div>
      <div className={styles.totalQuantity}>
        <h2>Total quantity: 0</h2>
      </div>
    </div>
  );
}
