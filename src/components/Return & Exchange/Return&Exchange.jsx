import { useState } from "react";
import styles from "./return&exchanger.module.css";

const policies = [
  {
    title: "Return Policy",
    description:
      "Products can be returned within 7 days of delivery. Items must be unused, undamaged and returned with their original packaging and tags.",
  },
  {
    title: "Exchange Policy",
    description:
      "You can request an exchange for a different size or color, subject to product availability.",
  },
  {
    title: "Refund Policy",
    description:
      "Refunds are processed after the returned product passes quality inspection. The amount will be credited to your original payment method.",
  },
  {
    title: "Non-returnable Products",
    description:
      "Products marked as non-returnable, used products and items without original tags or packaging cannot be returned.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit a Request",
    description: "Select your order and choose return or exchange.",
  },
  {
    number: "02",
    title: "Product Pickup",
    description: "Our delivery partner will collect the product.",
  },
  {
    number: "03",
    title: "Quality Check",
    description: "Our team will inspect the returned product.",
  },
  {
    number: "04",
    title: "Refund or Exchange",
    description: "Your refund or replacement will be processed.",
  },
];

const faqs = [
  {
    question: "How many days do I have to return a product?",
    answer: "You can request a return within 7 days of receiving your order.",
  },
  {
    question: "Can I exchange a product for another size?",
    answer: "Yes, you can request a size exchange, subject to availability.",
  },
  {
    question: "How long does a refund take?",
    answer:
      "Refunds are initiated after quality inspection. The time taken for the amount to reflect depends on your payment provider.",
  },
  {
    question: "Can I return a used product?",
    answer:
      "No. Products must be unused and returned in their original condition.",
  },
];

export const ReturnExchange = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [requestType, setRequestType] = useState("Return");
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderId || !reason) {
      return;
    }

    // Connect this form to your backend API later.
    console.log({
      orderId,
      requestType,
      reason,
    });

    alert("Your request details are ready to submit!");
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>CUSTOMER SUPPORT</span>
        <h1>Returns & Exchanges</h1>
        <p>
          Not completely satisfied with your purchase? We are here to make
          returns and exchanges simple.
        </p>
      </section>

      <section className={styles.requestSection}>
        <div className={styles.sectionHeading}>
          <span>NEED HELP?</span>
          <h2>Start a Return or Exchange</h2>
          <p>Submit your request using the form below.</p>
        </div>

        <form className={styles.requestForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Request Type</label>
            <div className={styles.typeOptions}>
              <button
                type="button"
                className={requestType === "Return" ? styles.activeType : ""}
                onClick={() => setRequestType("Return")}
              >
                Return
              </button>

              <button
                type="button"
                className={requestType === "Exchange" ? styles.activeType : ""}
                onClick={() => setRequestType("Exchange")}
              >
                Exchange
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="orderId">Order ID</label>
            <input
              id="orderId"
              type="text"
              placeholder="Enter your order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason">Reason for {requestType}</label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="">Select a reason</option>
              <option value="Wrong product received">
                Wrong product received
              </option>
              <option value="Damaged product">Damaged product</option>
              <option value="Size issue">Size issue</option>
              <option value="Color issue">Color issue</option>
              <option value="Product not as expected">
                Product not as expected
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Request
          </button>
        </form>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <span>SIMPLE PROCESS</span>
          <h2>How It Works</h2>
          <p>Four simple steps to complete your return or exchange.</p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div className={styles.stepCard} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.policySection}>
        <div className={styles.sectionHeading}>
          <span>KNOW BEFORE YOU RETURN</span>
          <h2>Our Policies</h2>
        </div>

        <div className={styles.policyGrid}>
          {policies.map((policy) => (
            <div className={styles.policyCard} key={policy.title}>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionHeading}>
          <span>GOT QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div className={styles.faqItem} key={faq.question}>
              <button
                type="button"
                className={styles.faqQuestion}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                {faq.question}
                <span>{activeFaq === index ? "−" : "+"}</span>
              </button>

              {activeFaq === index && (
                <p className={styles.faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Still Need Help?</h2>
        <p>Our support team is happy to assist you.</p>
        <a href="/contact">Contact Us</a>
      </section>
    </div>
  );
};
