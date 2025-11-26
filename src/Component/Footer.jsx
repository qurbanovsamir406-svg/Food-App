import styles from "./Footer.module.css";
import facebook01 from "../assets/facebook01.svg";
import intagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";
import Logo from "../assets/Logo.png";

export default function Footer() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                    <h2>Food App</h2>
                </div>

                <div className={styles.links}>
                    <p>Company:</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <p>Follow us on social media:</p>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook01} alt="Facebook" /></a></li>

                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={intagram} alt="Instagram" /></a></li>

                        <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                            <img src={tiktok} alt="TikTok" /></a></li>

                        <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" /></a></li>
                    </ul>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2025 Food App. All rights reserved.</p>
            </footer>
        </>
    );
}
