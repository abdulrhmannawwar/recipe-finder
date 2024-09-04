import styles from './MealCard.module.css'
import PropTypes from 'prop-types'

export default function MealCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.src} alt={props.name} />
            <div className={styles.text}>
                <h1>{props.name}</h1>
                <h3>Ingredients :</h3>
                <ul>
                    {props.ingredients.map((item, i) => (
                        <li className={styles.list} key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

MealCard.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
}