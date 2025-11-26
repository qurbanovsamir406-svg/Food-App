import styles from "./SpicesSection.module.css";
import spices from "../assets/spices.webp";
import { useNavigate } from "react-router-dom";

export default function Spices() {

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate("/spices-details");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Spices</h1>

            <div className={styles.content}>
                <div className={styles.spicesimg}>
                    <img src={spices} alt="Spices" />
                </div>

                <div className={styles.text}>
                    <h2>Spices are natural ingredients that add flavor, aroma, and color to food.</h2>
                    <p>
                        They are used not only for cooking but also sometimes for their health benefits.
                        For example, cinnamon, saffron, turmeric, and pepper are valued for both their taste and their nutritional properties, including vitamins and antioxidants.
                    </p>
                </div>
            </div>

            <button className={styles.readmorebtn} onClick={handleReadMore}>Read More</button>
        </div>
    )
}