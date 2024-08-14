import { ChangeEvent } from "react";
import styles from "./cart.module.css";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
  quantityChangeHandler: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  handleDelete: (id: number) => void;
}

export default function CartItem({
  item,
  quantityChangeHandler,
  handleDelete,
}: CartItemProps) {
  return (
    <div className={styles.cartProductWrapper} key={item.id}>
      <img
        className={styles.cartProductImage}
        src={item.imageUrl}
        alt={item.name}
      />
      <h2>{item.name}</h2>

      <section className={styles.cartQuantitySection}>
        <label className={styles.cartQuantityLabel} htmlFor="cartQuantity">
          Кількість:
        </label>
        <input
          className={styles.cartQuantityInput}
          type="number"
          name="cartQuantity"
          id="cartQuantity"
          value={item.quantity}
          onChange={(e) => quantityChangeHandler(e, item.id)}
        />
      </section>

      <h2>Ціна: {item.price}</h2>

      <button
        className={styles.cartDeleteButton}
        onClick={() => handleDelete(item.id)}
      >
        Видалити
      </button>
      <div className={styles.totalQuantity}></div>
    </div>
  );
}
