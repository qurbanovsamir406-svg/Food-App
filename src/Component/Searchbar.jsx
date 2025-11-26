import styles from "./Searchbar.module.css";
import { useRef, useEffect, useState } from "react";
import { searchMealByName } from "../Api/mealAPI";

export default function Search({ setFoodData }) {
    const [query, setQuery] = useState("");
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setHistory(storedHistory);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowHistory(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }, [];
    }, []);

    const handleSearch = async (searchQuery = query) => {
        if (!searchQuery) return;

        const meals = await searchMealByName(searchQuery);
        setFoodData(meals || []);

        const updatedHistory = [searchQuery, ...history.filter(q => q !== searchQuery)].slice(0,4);
        setHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
        setShowHistory(false); // Axtarışdan sonra tarixçə yox olsun
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleInputClick = () => {
        if (history.length > 0) setShowHistory(true);
    };



    const handleHistoryClick = (item) => {
        setQuery(item);
        handleSearch(item); // Bu həm query ilə search edir, həm tarixçə gizləyir
    };

    const handleDeleteHistoryItem = (item) => {
    const updatedHistory = history.filter(h => h !== item);
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
};


    return (
        <div className={styles.searchContainer} ref={inputRef}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Search for meals"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onClick={handleInputClick}
                    className={styles.searchInput}
                />
                <button onClick={() => handleSearch()} className={styles.searchButton}>
                    Search
                </button>
            </div>

            {showHistory && history.length > 0 && (  /* burada şərt əlavə edildi */
                <div className={styles.historyContainer}>
                    <ul>
                        {history.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    className={styles.historyItem}
                                    onClick={() => handleHistoryClick(item)}
                                >
                                    {item}
                                </button>
                                <button
                                    className={styles.deleteItem}
                                    onClick={() => handleDeleteHistoryItem(item)}
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
