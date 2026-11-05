import { useState } from "react";
import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";
import styles from "./faq.module.css";

const faqData = [
  {
    category: "Orders",
    questions: [
      {
        question: "How can I place an order?",
        answer:
          "Browse our products, select your preferred product and click Add to Cart. Visit your cart and proceed to checkout to complete your order.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can request an order cancellation before it is shipped. Once shipped, cancellation may not be possible.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, you will receive tracking details to follow your delivery.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We aim to support secure payment options such as UPI, credit cards, debit cards and other available payment methods.",
      },
      {
        question: "Is online payment secure?",
        answer:
          "Yes. Payments are processed through secure payment systems designed to protect your transaction details.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time depends on your location and product availability. You will receive an estimated delivery date during checkout.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "Shipping charges depend on your order value and delivery location. Any applicable charges will be shown during checkout.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "Can I return a product?",
        answer:
          "Eligible products can be returned according to our return policy. Please contact customer support for assistance.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refund processing time depends on the payment method and banking partner.",
      },
    ],
  },
  {
    category: "Account",
    questions: [
      {
        question: "How can I create an account?",
        answer:
          "Click the Sign Up option and enter the required details to create your account.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Use the Forgot Password option on the login page to reset your password.",
      },
    ],
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredData = faqData
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <main className={styles.faqPage}>
      <section className={styles.faqHero}>
        <span className={styles.eyebrow}>HELP CENTER</span>
        <h1>Frequently Asked Questions</h1>
        <p>
          Have questions? Find quick answers to the most common questions about
          shopping with us.
        </p>

        <div className={styles.searchBox}>
          <FiSearch />
          <input
            type="text"
            placeholder="Search your questions..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(null);
            }}
          />
        </div>
      </section>

      <section className={styles.faqContent}>
        {filteredData.length === 0 ? (
          <p className={styles.noResults}>No matching questions found.</p>
        ) : (
          filteredData.map((section) => (
            <div className={styles.faqSection} key={section.category}>
              <h2>{section.category}</h2>

              {section.questions.map((item, index) => {
                const uniqueId = `${section.category}-${index}`;
                const isOpen = activeIndex === uniqueId;

                return (
                  <div className={styles.faqItem} key={uniqueId}>
                    <button
                      className={styles.question}
                      onClick={() => setActiveIndex(isOpen ? null : uniqueId)}
                    >
                      <span>{item.question}</span>
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </button>

                    {isOpen && <p className={styles.answer}>{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </section>

      <section className={styles.faqContact}>
        <h2>Still have questions?</h2>
        <p>Our support team is happy to help you.</p>
        <a href="/contact" className={styles.contactButton}>
          Contact Us
        </a>
      </section>
    </main>
  );
};
