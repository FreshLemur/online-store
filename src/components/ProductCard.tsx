import styles from "../pages/Products/products.module.css";
import { ProductData } from "../data/products";
import additionalInfo from "../data/additionalInfo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/cartDataSlice";

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.cartState);

  const handleToggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const productAdditionalInfo = additionalInfo.find(
    (info) => info.id === product.id
  );

  const handleToggleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      })
    );
    console.log(cartState);
  };

  return (
    <div className={styles.productCard} key={product.id}>
      <h3 className={styles.cardName}>{product.name}</h3>
      <img
        className={styles.cardImage}
        src={product.imageUrl}
        alt={product.name}
      />
      <p>{product.price.toFixed(2)}</p>
      <p className={styles.cardDescription}>{product.description}</p>
      <button
        onClick={handleToggleAdditionalInfo}
        className={styles.cardButton}
      >
        {showAdditionalInfo ? "Згорнути" : "Детальніше"}
      </button>
      {showAdditionalInfo && productAdditionalInfo && (
        <div className={styles.additionalInfo}>
          {productAdditionalInfo.details.map((detail, index) => (
            <p key={index} className={styles.cardDescription}>
              {detail}
            </p>
          ))}
          <button className={styles.cardButton} onClick={handleToggleAddToCart}>
            Додати в кошик
          </button>
        </div>
      )}
    </div>
  );
}
