import { useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMealByName } from "../Api/mealAPI";
import styles from "./Home.module.css";
import Herosection from "../Component/Herosection";
import Popularfood from "../Component/Popularfood";
import SpicesSection from "../Component/SpicesSection";

export default function Home() {
  const { foodData, setFoodData } = useOutletContext();
  const [ visibleCount,setVisibleCount ] = useState(8); //baslangicda 8 element

  useEffect(() => {
    const fetchDefaultMeals = async () => {
      const meals = await searchMealByName("chicken");
      setFoodData(meals || []);
    };
    fetchDefaultMeals();
  }, [setFoodData]);

  const visibleMeals = foodData.slice(0, visibleCount);

  const handleMoreClick = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <section>

    <div className={styles.container}>
      {foodData.length > 0 ? (
        <>
        <ul className={styles.foodlist}>
          {visibleMeals.map((meal) => (
            <li key={meal.idMeal} className={styles.foodcard}>
              <Link to={`/meal/${meal.idMeal}`} className={styles.link}>
                <div className={styles.fooddetails}>
                  <img
                    className={styles.foodimg}
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                  <h3 className={styles.foodname}>{meal.strMeal}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
         {/* More button */}
          {foodData.length > visibleCount && (
            <button className={styles.moreButton} onClick={handleMoreClick}>
              More
            </button>
          )}

          
        </>
      ) : (
        <p className={styles.notfound}>No meals found 😅</p>
      )}
    </div>
    <SpicesSection />
    <Herosection />
    <Popularfood />
    </section>
  );
}

