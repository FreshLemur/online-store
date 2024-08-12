import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.homeText}>
        Ласкаво просимо до нашого інтернет-магазину!
      </h1>
      <h2 className={styles.homeText}>
        Вітаємо вас у нашому магазині, де ви знайдете найкращі товари за
        вигідними цінами. Ми прагнемо забезпечити вас високоякісною продукцією
        та найкращим сервісом. Ознайомтеся з нашим асортиментом та знайдіть те,
        що вам до вподоби. Дякуємо, що обрали нас!
      </h2>
    </div>
  );
}
