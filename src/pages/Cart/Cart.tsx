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
  const cartStateQuantity = useSelector(
    (state: RootState) => state.cartState.items
  ).map((item) => item);
  const totalAmount = useSelector((state: RootState) => state.cartState.total);
  const dispatch = useDispatch();

  const quantityChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log(cartState);
    const newValue = Number(e.target.value);
    cartStateQuantity.forEach((item) => {
      if (id === item.id) {
        if (newValue > item.quantity) {
          dispatch(
            addItem({
              id,
            })
          );
          console.log("More");
        } else {
          dispatch(minusOneFromQuantity(id));
          console.log("Less");
        }
      }
      dispatch(totalPrice());
    });
  };

  const handleDelete = (id: number) => {
    console.log(cartState);
    dispatch(removeItem(id));
    dispatch(totalPrice());
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
              Кількість:
            </label>
            <input
              className={styles.cartQuantityInput}
              type="number"
              name="cartQuantity"
              id="cartQuantity"
              value={cartState.quantity}
              onChange={(e) => quantityChangeHandler(e, cartState.id)}
            />
          </section>

          <h2>Ціна: {cartState.price}</h2>

          <button
            className={styles.cartDeleteButton}
            onClick={() => handleDelete(cartState.id)}
          >
            Видалити
          </button>
          <div className={styles.totalQuantity}></div>
        </div>
      ))}
      <h2>Загальна сума: {totalAmount}</h2>
    </div>
  );
}
