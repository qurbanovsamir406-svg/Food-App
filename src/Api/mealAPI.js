// src/Api/mealAPI.js
export async function searchMealByName(name) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await res.json();
    return data.meals; // bu hissə array qaytaracaq
  } catch (error) {
    console.error("Error fetching meals:", error);
    return null;
  }
}

export const getMealById = async (id) => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null; // bu hissə object qaytaracaq
  } catch (error) {
    console.error("Error fetching meals:", error);
    return null;
  }
};