import styles from './MealCard.module.css'
export default function MealCard(props){

    return(
        <div className={styles.card}>
            <img src={props.src} />
            <div className={styles.text}>
                <h1>{props.name}</h1>
                <h3>Ingredients :</h3>
                {props.ingredients.map((item,i) => {
                    return <li className={styles.list} key={i}>{item}</li>
                })}
            </div>
        </div>
    )
}