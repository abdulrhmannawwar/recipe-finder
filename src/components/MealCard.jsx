/* eslint-disable react/prop-types */
import styles from "./MealCard.module.css";
export default function MealCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.src} />
            <div className={styles.text}>
                <h1>{props.name}</h1>
                <h3>Ingredients :</h3>
                <ul>
                    {props.ingredients.map((item, i) => (
                        <li className={styles.list} key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
