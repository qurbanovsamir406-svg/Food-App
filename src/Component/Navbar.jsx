import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Search from "./Searchbar";
import Logo from "../assets/Logo.png";
import { searchMealByName } from "../Api/mealAPI";
import { useState,useEffect } from "react";

export default function Navbar({ setFoodData }) {

  const [ menuOpen, setMenuOpen ] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className={styles.navbar}>
      {/* logo link icinde */}
      <Link
        to="/"
        className={styles.logoContainer}
        onClick={async () => {
          const meals = await searchMealByName("chicken");
          setFoodData(meals || []);
        }}
      >
        <img src={Logo} title="Logo" alt="Logo" className={styles.logo} />
        <h1>Food App</h1>
      </Link>

      <Search setFoodData={setFoodData} />

      <div className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><Link to="/" onClick={ ()=> setMenuOpen(false) }>Home</Link></li>
        <li><Link to="/favorites" onClick={ ()=> setMenuOpen(false) }>Favorites</Link></li>
        <li><Link to="/about" onClick={ ()=> setMenuOpen(false) }>About</Link></li>
        <li><Link to="/login" onClick={ ()=> setMenuOpen(false) }>Login</Link></li>
      </ul>
    </header>
  );
}
