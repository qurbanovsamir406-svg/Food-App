import styles from "./FoodDetails.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../Api/mealAPI";

export default function FoodDetails() {

    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getMealById(id);
            setMeal(data);
        }
        fetchData();
    }, [id]);

    if (!meal) return <div>Loading...</div>;

    return (
        <div className={styles.datacontainer}>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} loading="lazy" alt={meal.strMeal} className={styles.dataimg} />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <div className={styles.instructions}>
                <p><strong>Instructions: <br /><br /></strong>{meal.strInstructions}</p>
            </div>
            <a className={styles.watchBtn} href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </div>
    )
}