import styles from "./checkout.module.css";

export default function Checkout() {
  return (
    <div className={styles.checkoutMainWrapper}>
      {" "}
      {/* Main wrapper for checkout */}
      <section className={styles.checkoutTitle}>
        {" "}
        {/* Title section for checkout */}
        <h1>Оформлення замовлення</h1> {/* Title for checkout */}
      </section>
      <section className={styles.checkoutWrapper}>
        {" "}
        {/* Wrapper for shipping and payment information */}
        <section className={styles.checkoutShippingWrapper}>
          {" "}
          {/* Wrapper for shipping information */}
          <h2 className={styles.checkoutTitle}>Інформація про доставку</h2>{" "}
          {/* Title for shipping information */}
          <label className={styles.checkoutLabel} htmlFor="checkoutName">
            Ім'я
          </label>{" "}
          {/* Label for first name input */}
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutName"
            id="checkoutName"
          />{" "}
          {/* Input field for first name */}
          <label className={styles.checkoutLabel} htmlFor="checkoutSurname">
            Прізвище
          </label>{" "}
          {/* Label for last name input */}
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutSurname"
            id="checkoutSurname"
          />{" "}
          {/* Input field for last name */}
          <label
            className={styles.checkoutLabel}
            htmlFor="checkoutShippingAdress"
          >
            Адреса доставки
          </label>{" "}
          {/* Label for shipping address input */}
          <input
            className={styles.checkoutInput}
            type="text"
            name="checkoutShippingAdress"
            id="checkoutShippingAdress"
          />{" "}
          {/* Input field for shipping address */}
        </section>
        <section className={styles.checkoutPaymentSection}>
          {" "}
          {/* Section for payment method select */}
          <h2 className={styles.checkoutTitle}>Спосіб оплати</h2>
          <label className={styles.checkoutLabel} htmlFor="choosePayment">
            Вибір оплати
          </label>{" "}
          {/* Empty label for styling */}
          <select
            className={styles.checkoutInput}
            name="choosePayment"
            id="choosePayment"
          >
            {" "}
            {/* Select for payment method */}
            <option value="mercedes">Готівкою при отриманні товару</option>{" "}
            {/* Payment option for cash on delivery */}
            <option value="volvo">Visa</option> {/* Payment option for Visa */}
            <option value="saab">MasterCard</option>{" "}
            {/* Payment option for MasterCard */}
            <option value="mercedes">American Express</option>{" "}
            {/* Payment option for American Express */}
            <option value="audi">PayPal</option>{" "}
            {/* Payment option for PayPal */}
            <option value="volvo">Apple Pay</option>{" "}
            {/* Payment option for Apple Pay */}
            <option value="saab">Google Pay</option>{" "}
            {/* Payment option for Google Pay */}
            <option value="mercedes">SEPA</option>{" "}
            {/* Payment option for SEPA */}
            <option value="audi">SWIFT</option> {/* Payment option for SWIFT */}
            <option value="volvo">Bitcoin</option>{" "}
            {/* Payment option for Bitcoin */}
            <option value="saab">Ethereum</option>{" "}
            {/* Payment option for Ethereum */}
          </select>
        </section>
      </section>
      <section className={styles.checkoutButtonSection}>
        <button className={styles.checkoutButton}>Оформити замовлення</button>
      </section>
    </div>
  );
}
