import styles from "./checkout.module.css";

export default function Checkout() {
  return (
    <div className={styles.checkoutMainWrapper}>
      <section className={styles.checkoutTitle}>
        <h1>Оформлення замовлення</h1>
      </section>
      <section className={styles.checkoutWrapper}>
        <section className={styles.checkoutShippingWrapper}>
          <h2>Інформація про доставку</h2>
          <label htmlFor="checkoutName">Ім'я</label>
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutName"
            id="checkoutName"
          />
          <label htmlFor="checkoutSurname">Прізвище</label>
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutSurname"
            id="checkoutSurname"
          />
          <label htmlFor="checkoutShippingAdress">Адреса доставки</label>
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutShippingAdress"
            id="checkoutShippingAdress"
          />
        </section>
        <section>
          <label htmlFor=""></label>
          <select className={styles.checkoutInput} name="" id="">
            <option value="mercedes">Готівкою при отриманні товару</option>
            <option value="volvo">Visa</option>
            <option value="saab">MasterCard</option>
            <option value="mercedes">American Express</option>
            <option value="audi">PayPal</option>
            <option value="volvo">Apple Pay</option>
            <option value="saab">Google Pay</option>
            <option value="mercedes">SEPA</option>
            <option value="audi">SWIFT</option>
            <option value="volvo">Bitcoin</option>
            <option value="saab">Ethereum</option>
          </select>
        </section>
      </section>
    </div>
  );
}
