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
import CartItem from "./CartItem";

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
          <CartItem
            item={item}
            quantityChangeHandler={quantityChangeHandler}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h1 className={styles.emptyCartTitle}>
          Ваш кошик порожній, додайте товари до кошику.
        </h1>
      )}
      {cartState.length > 0 && (
        <h2 className={styles.totalAmount}>Загальна сума: {totalAmount}</h2>
      )}
    </div>
  );
}
