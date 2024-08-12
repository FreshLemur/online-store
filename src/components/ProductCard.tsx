import styles from "../pages/Products/products.module.css";
import { ProductData } from "../data/products";

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
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
      <button className={styles.cardButton}>Детальніше</button>
    </div>
  );
}
