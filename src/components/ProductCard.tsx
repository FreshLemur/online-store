import styles from "../pages/Products/products.module.css";
import { ProductData } from "../data/products";
import additionalInfo from "../data/additionalInfo";
import { useState } from "react";

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);

  const handleToggle = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const productAdditionalInfo = additionalInfo.find(
    (info) => info.id === product.id
  );

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
      <button onClick={handleToggle} className={styles.cardButton}>
        {showAdditionalInfo ? "Згорнути" : "Детальніше"}
      </button>
      {showAdditionalInfo && productAdditionalInfo && (
        <div className={styles.additionalInfo}>
          {productAdditionalInfo.details.map((detail, index) => (
            <p key={index} className={styles.cardDescription}>
              {detail}
            </p>
          ))}
          <button className={styles.cardButton}>Додати в кошик</button>
        </div>
      )}
    </div>
  );
}
