import { useState } from "react";
import styles from "./Herosection.module.css";
import burger from "../assets/burger.webp";
import lemongrasschicken from "../assets/lemongrasschicken.webp";
import pizza from "../assets/pizza.webp";

export default function Herosection() {
  const slides = [
    { img: burger, title: "Burger" },
    { img: lemongrasschicken, title: "Lemon Grass Chicken" },
    { img: pizza, title: "Pizza" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // "left" or "right"

  const prevSlide = () => {
    setDirection("right"); // Sağdan gəlir
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }, 50);
  };

  const nextSlide = () => {
    setDirection("left"); // Soldan gəlir
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 50);
  };

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection("left");
    } else if (index < currentIndex) {
      setDirection("right");
    }
    setTimeout(() => {
      setCurrentIndex(index);
    }, 50);
  };

  // Helper: Get slide index with wrapping
  const getSlideIndex = (offset) => {
    return (currentIndex + offset + slides.length) % slides.length;
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.carouselContainer}>
        {/* Left Arrow */}
        <button className={styles.arrowLeft} onClick={prevSlide}>
          ❮
        </button>

        {/* Slides */}
        <div className={styles.slidesWrapper}>
          {/* Left side image (half visible) */}
          <div
            className={`${styles.slideItem} ${styles.sideSlide}`}
            onClick={prevSlide}
          >
            <img
              src={slides[getSlideIndex(-1)].img}
              alt={slides[getSlideIndex(-1)].title}
              loading="lazy"
            />
          </div>

          {/* Center image (main) */}
          <div
            className={`${styles.slideItem} ${styles.centerSlide} ${direction === "left" ? styles.slideFromRight :
                direction === "right" ? styles.slideFromLeft : ""
              }`}
            key={currentIndex} // Force re-render for animation
          >
            <img
              src={slides[currentIndex].img}
              alt={slides[currentIndex].title}
              loading="lazy"
            />
            <h2 className={styles.title}>{slides[currentIndex].title}</h2>
          </div>

          {/* Right side image (half visible) */}
          <div
            className={`${styles.slideItem} ${styles.sideSlide}`}
            onClick={nextSlide}
          >
            <img
              src={slides[getSlideIndex(1)].img}
              alt={slides[getSlideIndex(1)].title}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowRight} onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}