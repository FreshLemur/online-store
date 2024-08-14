import { ChangeEvent } from "react";
import {
  addItem,
  minusOneFromQuantity,
  removeItem,
  totalPrice,
} from "../../store/cartDataSlice";
import { RootState } from "../../store/store";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartState = useSelector((state: RootState) => state.cartState.items);
  const totalAmount = useSelector((state: RootState) => state.cartState.total);
  const dispatch = useDispatch();

  const quantityChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newValue = Number(e.target.value);

    cartState.forEach((item) => {
      if (id === item.id) {
        if (newValue > item.quantity) {
          dispatch(
            addItem({
              id,
            })
          );
        } else if (newValue < item.quantity) {
          dispatch(minusOneFromQuantity(id));
        }
      }
    });

    dispatch(totalPrice());
  };

  const handleDelete = (id: number) => {
    dispatch(removeItem(id));
    dispatch(totalPrice());
  };

  return (
    <div className={styles.cartWrapper}>
      {cartState.length > 0 ? (
        cartState.map((item) => (
          <>
            <div className={styles.cartProductWrapper} key={item.id}>
              <img
                className={styles.cartProductImage}
                src={item.imageUrl}
                alt={item.name}
              />
              <h2>{item.name}</h2>

              <section className={styles.cartQuantitySection}>
                <label
                  className={styles.cartQuantityLabel}
                  htmlFor="cartQuantity"
                >
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
          </>
        ))
      ) : (
        <>
          <h1 className={styles.emptyCartTitle}>
            Ваш кошик порожній, додайте товари до кошику.
          </h1>
        </>
      )}
      {cartState.length > 0 && (
        <h2 className={styles.totalAmount}>Загальна сума: {totalAmount}</h2>
      )}
    </div>
  );
}
