import styles from "./SpicesDetails.module.css";
import bayleaves from "../assets/spicesdetails/bayleaves.webp";
import blackpepper from "../assets/spicesdetails/blackpepper.webp";
import cinnamon from "../assets/spicesdetails/cinnamon.webp";
import coriander from "../assets/spicesdetails/coriander.webp";
import ginger from "../assets/spicesdetails/ginger.webp";
import oregano from "../assets/spicesdetails/oregano.webp";
import paprika from "../assets/spicesdetails/paprika.webp";
import saffron from "../assets/spicesdetails/saffron.webp";
import thyme from "../assets/spicesdetails/thyme.webp";
import turmeric from "../assets/spicesdetails/turmeric.webp";
import vanilla from "../assets/spicesdetails/vanilla.webp";
import cloves from "../assets/spicesdetails/cloves.avif";
import chilipowder from "../assets/spicesdetails/chilipowder.webp";
import cardamom from "../assets/spicesdetails/cardamom.webp";
import cumin from "../assets/spicesdetails/cumin.webp";
import garlicpowder from "../assets/spicesdetails/garlicpowder.webp";
import mustard from "../assets/spicesdetails/mustard.webp";
import nutmeg from "../assets/spicesdetails/nutmeg.webp";
import rosemary from "../assets/spicesdetails/rosemary.webp";
import salt from "../assets/spicesdetails/salt.webp";

export default function SpicesDetails() {
  return (
    <div className={styles.container}>
      <h1>🌿 Detailed Information About the Top 20 Most Used Spices in the World</h1>
      <div className={styles.spices}>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>1. Bay Leaves</h2>
            <ul>
              <li><strong>Origin:</strong> Mediterranean</li>
              <li><strong>Flavor Profile:</strong> Herbal, slightly floral</li>
              <li><strong>Culinary Uses:</strong> Soups, stews, sauces, slow-cooking dishes</li>
              <li><strong>Health Benefits:</strong> Supports digestion and respiratory health</li>
              <li><strong>Famous Dishes:</strong> Biryani, beef stew, pilaf</li>
            </ul>
          </div>
          <img src={bayleaves} loading="lazy" alt="bayleaves" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>2. Black Pepper</h2>
            <ul>
              <li><strong>Origin:</strong> India</li>
              <li><strong>Flavor Profile:</strong> Sharp, pungent, slightly spicy</li>
              <li><strong>Culinary Uses:</strong> Seasoning meats, vegetables, soups, some desserts</li>
              <li><strong>Health Benefits:</strong> Improves digestion, antioxidant properties</li>
              <li><strong>Famous Dishes:</strong> Steak au Poivre, Chicken Pepper Fry, Carbonara</li>
            </ul>
          </div>
          <img src={blackpepper} loading="lazy" alt="blackpepper" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>3. Cinnamon</h2>
            <ul>
              <li><strong>Origin:</strong> Sri Lanka (Ceylon), Indonesia (Cassia)</li>
              <li><strong>Flavor Profile:</strong> Sweet, warm, woody</li>
              <li><strong>Culinary Uses:</strong> Baked goods, teas, curries, desserts</li>
              <li><strong>Health Benefits:</strong> Anti-inflammatory, helps control blood sugar</li>
              <li><strong>Famous Dishes:</strong> Cinnamon rolls, Moroccan tagine, Indian biryani</li>
            </ul>
          </div>
          <img src={cinnamon} loading="lazy" alt="cinnamon" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>4. Coriander</h2>
            <ul>
              <li><strong>Origin:</strong> Mediterranean region</li>
              <li><strong>Flavor Profile:</strong> Citrusy, sweet, floral</li>
              <li><strong>Culinary Uses:</strong> Curries, stews, pickles, spice blends</li>
              <li><strong>Health Benefits:</strong> Supports digestion, blood sugar control</li>
              <li><strong>Famous Dishes:</strong> Garam masala, Middle Eastern falafel spices</li>
            </ul>
          </div>
          <img src={coriander} loading="lazy" alt="coriander" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>5. Ginger</h2>
            <ul>
              <li><strong>Origin:</strong> Southeast Asia</li>
              <li><strong>Flavor Profile:</strong> Spicy, citrusy, warm</li>
              <li><strong>Culinary Uses:</strong> Drinks, curries, soups, desserts, marinades</li>
              <li><strong>Health Benefits:</strong> Reduces nausea, anti-inflammatory, aids digestion</li>
              <li><strong>Famous Dishes:</strong> Ginger tea, Sushi ginger, Gingerbread</li>
            </ul>
          </div>
          <img src={ginger} loading="lazy" alt="ginger" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>6. Oregano</h2>
            <ul>
              <li><strong>Origin:</strong> Mediterranean</li>
              <li><strong>Flavor Profile:</strong> Earthy, slightly bitter</li>
              <li><strong>Culinary Uses:</strong> Pizza, pasta sauces, grilled meats</li>
              <li><strong>Health Benefits:</strong> Antibacterial, antioxidant</li>
              <li><strong>Famous Dishes:</strong> Italian pizza, Greek salad</li>
            </ul>
          </div>
          <img src={oregano} loading="lazy" alt="oregano" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>7. Paprika</h2>
            <ul>
              <li><strong>Origin:</strong> Hungary, Spain</li>
              <li><strong>Flavor Profile:</strong> Sweet to spicy, smoky</li>
              <li><strong>Culinary Uses:</strong> Sauces, stews, rice, meats</li>
              <li><strong>Health Benefits:</strong> Rich in vitamin A, antioxidants</li>
              <li><strong>Famous Dishes:</strong> Goulash, Paprika chicken, Spanish chorizo</li>
            </ul>
          </div>
          <img src={paprika} loading="lazy" alt="paprika" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>8. Saffron</h2>
            <ul>
              <li><strong>Origin:</strong> Iran</li>
              <li><strong>Flavor Profile:</strong> Subtle floral, honey-like</li>
              <li><strong>Culinary Uses:</strong> Rice dishes, luxury desserts, teas</li>
              <li><strong>Health Benefits:</strong> Enhances mood, antioxidant rich</li>
              <li><strong>Famous Dishes:</strong> Paella, Persian saffron rice, Risotto Milanese</li>
            </ul>
          </div>
          <img src={saffron} loading="lazy" alt="saffron" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>9. Thyme</h2>
            <ul>
              <li><strong>Origin:</strong> Europe</li>
              <li><strong>Flavor Profile:</strong> Minty, earthy, slightly floral</li>
              <li><strong>Culinary Uses:</strong> Stews, potatoes, chicken, stocks</li>
              <li><strong>Health Benefits:</strong> Anti-inflammatory, boosts immunity</li>
              <li><strong>Famous Dishes:</strong> French chicken roast, soups</li>
            </ul>
          </div>
          <img src={thyme} loading="lazy" alt="thyme" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>10. Turmeric</h2>
            <ul>
              <li><strong>Origin:</strong> India</li>
              <li><strong>Flavor Profile:</strong> Earthy, slightly bitter, warm</li>
              <li><strong>Culinary Uses:</strong> Curry mixes, rice dishes, soups, smoothies</li>
              <li><strong>Health Benefits:</strong> Anti-inflammatory, antioxidant, supports joint health</li>
              <li><strong>Famous Dishes:</strong> Indian curry, Golden Milk, Pilaf</li>
            </ul>
          </div>
          <img src={turmeric} loading="lazy" alt="turmeric" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>11. Vanilla</h2>
            <ul>
              <li><strong>Origin:</strong> Madagascar</li>
              <li><strong>Flavor Profile:</strong> Sweet, earthy, floral</li>
              <li><strong>Culinary Uses:</strong> Ice cream, desserts, sauces, marinades</li>
              <li><strong>Health Benefits:</strong> Supports digestion, anti-inflammatory, antioxidants</li>
              <li><strong>Famous Dishes:</strong> Vanilla ice cream, French vanilla cake</li>
            </ul>
          </div>
          <img src={vanilla} loading="lazy" alt="vanilla" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>12. Cloves</h2>
            <ul>
              <li><strong>Origin:</strong> Indonesia</li>
              <li><strong>Flavor Profile:</strong> Strong, sweet, warm</li>
              <li><strong>Culinary Uses:</strong> Baking, mulled wine, marinades</li>
              <li><strong>Health Benefits:</strong> Antimicrobial, dental pain relief</li>
              <li><strong>Famous Dishes:</strong> Masala chai, Christmas ham</li>
            </ul>
          </div>
          <img src={cloves} loading="lazy" alt="cloves" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>13. Chili Powder</h2>
            <ul>
              <li><strong>Origin:</strong> Mexico</li>
              <li><strong>Flavor Profile:</strong> Hot, spicy</li>
              <li><strong>Culinary Uses:</strong> Tacos, soups, grilled meats, seasoning mixes</li>
              <li><strong>Health Benefits:</strong> Boosts metabolism, pain relief, improves circulation</li>
              <li><strong>Famous Dishes:</strong> Chili con carne, Indian vindaloo</li>
            </ul>
          </div>
          <img src={chilipowder} loading="lazy" alt="chilipowder" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>14. Cardamom</h2>
            <ul>
              <li><strong>Origin:</strong> India</li>
              <li><strong>Flavor Profile:</strong> Floral, sweet, mildly minty</li>
              <li><strong>Culinary Uses:</strong> Coffee, sweets, curries, rice dishes</li>
              <li><strong>Health Benefits:</strong> Improves digestion, freshens breath</li>
              <li><strong>Famous Dishes:</strong> Turkish coffee, Indian kheer, Arabic desserts</li>
            </ul>
          </div>
          <img src={cardamom} loading="lazy" alt="cardamom" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>15. Cumin</h2>
            <ul>
              <li><strong>Origin:</strong> Middle East, India, China</li>
              <li><strong>Flavor Profile:</strong> Warm, earthy, nutty</li>
              <li><strong>Culinary Uses:</strong> Spice blends, soups, meats, beans</li>
              <li><strong>Health Benefits:</strong> Aids digestion, rich in iron, boosts immunity</li>
              <li><strong>Famous Dishes:</strong> Mexican chili, Hummus, Indian dal</li>
            </ul>
          </div>
          <img src={cumin} loading="lazy" alt="cumin" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>16. Garlic Powder</h2>
            <ul>
              <li><strong>Origin:</strong> Dehydrated garlic</li>
              <li><strong>Flavor Profile:</strong> Strong garlic flavor, slightly sweet</li>
              <li><strong>Culinary Uses:</strong> Seasoning blends, sauces, marinades</li>
              <li><strong>Health Benefits:</strong> Boosts immunity, improves heart health</li>
              <li><strong>Famous Dishes:</strong> Garlic bread seasoning, BBQ rubs</li>
            </ul>
          </div>
          <img src={garlicpowder} loading="lazy" alt="garlicpowder" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>17. Mustard</h2>
            <ul>
              <li><strong>Origin:</strong> India, Mediterranean</li>
              <li><strong>Flavor Profile:</strong> Spicy, sharp, pungent</li>
              <li><strong>Culinary Uses:</strong> Pickling, sauces, curry base</li>
              <li><strong>Health Benefits:</strong> Improves digestion, metabolism</li>
              <li><strong>Famous Dishes:</strong> Mustard sauce, Indian tadka, BBQ sauces</li>
            </ul>
          </div>
          <img src={mustard} loading="lazy" alt="mustard" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>18. Nutmeg</h2>
            <ul>
              <li><strong>Origin:</strong> Spice Islands (Indonesia)</li>
              <li><strong>Flavor Profile:</strong> Warm, sweet, slightly spicy</li>
              <li><strong>Culinary Uses:</strong> Desserts, creamy sauces, soups, lattes</li>
              <li><strong>Health Benefits:</strong> Helps sleep, digestion, anti-inflammatory</li>
              <li><strong>Famous Dishes:</strong> Bechamel sauce, Eggnog</li>
            </ul>
          </div>
          <img src={nutmeg} loading="lazy" alt="nutmeg" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>19. Rosemary</h2>
            <ul>
              <li><strong>Origin:</strong> Mediterranean</li>
              <li><strong>Flavor Profile:</strong> Pine-like, strong aroma</li>
              <li><strong>Culinary Uses:</strong> Meat rubs, breads, sauces, roasted vegetables</li>
              <li><strong>Health Benefits:</strong> Improves memory, circulation</li>
              <li><strong>Famous Dishes:</strong> Focaccia bread, roasted lamb</li>
            </ul>
          </div>
          <img src={rosemary} loading="lazy" alt="rosemary" className={styles.spiceImg} />
        </div>

        <div className={styles.spiceItem}>
          <div className={styles.textBox}>
            <h2>20. Salt</h2>
            <ul>
              <li><strong>Origin:</strong> Sea or rock deposits</li>
              <li><strong>Flavor Profile:</strong> Enhances and balances flavors</li>
              <li><strong>Culinary Uses:</strong> Essential in all cuisines, used in cooking, baking, curing, pickling</li>
              <li><strong>Health Benefits:</strong> Maintains fluid balance, excess can cause hypertension</li>
              <li><strong>Famous Uses:</strong> Pickles, cured meats, bread, soups, fries</li>
            </ul>
          </div>
          <img src={salt} loading="lazy" alt="salt" className={styles.spiceImg} />
        </div>

      </div>

    </div>
  )
}