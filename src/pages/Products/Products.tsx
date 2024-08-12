import productsData from "../../data/products";
import ProductCard from "../../components/ProductCard";
import styles from "./products.module.css";

export default function Products() {
  return (
    <div className={styles.productsWrapper}>
      {productsData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
