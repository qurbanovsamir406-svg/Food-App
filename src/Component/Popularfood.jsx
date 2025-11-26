import { useState } from "react";
import styles from "./Popularfood.module.css";
import rice from "../assets/rice.avif";

export default function Popularfood() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={rice} alt="Rice" />

        <div className={styles.textBox}>
          <h1>The world’s most consumed food product: Rice</h1>
          <p>
            Rice is the primary food source for more than half of the world’s population.
            Cultivated for thousands of years, it is especially common in Asia, Africa,
            and South America. Rice is used in a wide variety of dishes, including pilaf,
            soups, porridges, and side meals.
          </p>

          <button
            className={styles.readmore}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Close" : "Read More"}
          </button>
        </div>

        {showMore && (
          <div className={styles.moreInfo}>
            {/* X düyməsi artıq düzgün state idarə edir */}
            <button
              className={styles.closeBtn}
              onClick={() => setShowMore(false)}
            >
              X
            </button>

            <h3>Health Benefits</h3>
            <ul>
              <li>Rich in energy: High in carbohydrates, providing fuel for the body</li>
              <li>Easy to digest: Suitable for sensitive stomachs</li>
              <li>Gluten-free: Safe for individuals with gluten intolerance</li>
              <li>Packed with vitamins and minerals: B-vitamins, magnesium, and iron</li>
              <li>Low in fat: A good choice for balanced diets</li>
            </ul>

            <h3>Popular Types</h3>
            <ul>
              <li>White rice</li>
              <li>Brown rice</li>
              <li>Basmati rice</li>
              <li>Jasmine rice</li>
              <li>Arborio rice</li>
            </ul>

            <h3>Interesting Fact</h3>
            <p>
              Over 500 million tons of rice are consumed every year, making it the world’s most
              widely eaten food product.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

