import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "What is Netflex?",
    a: "Netflex is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    q: "How much does Netflex cost?",
    a: "Watch Netflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans start from USD 2.99 per month.",
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime. Sign in with your Netflex account to watch instantly on the web or on any internet-connected device.",
  },
  {
    q: "How do I cancel?",
    a: "Netflex is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.",
  },
  {
    q: "What can I watch on Netflex?",
    a: "Netflex has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflex originals, and more.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <ul className={styles.list}>
        {FAQS.map((item, i) => (
          <li key={i} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{item.q}</span>
              <span
                className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""}`}
              >
                +
              </span>
            </button>

            {openIndex === i && (
              <div className={styles.answer}>{item.a}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;