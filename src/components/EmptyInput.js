import styles from "./EmptyInput.module.css";

const EmptyInput=(props)=>{
return(
    <div className={styles.hi}>
    <div className={styles.invalid}>
        <h2 className={styles.text1}>
            Invalid input
        </h2>
        <h4 className={styles.text2}>please enter a valid name and age (non-empty values).</h4>
        <button onClick={props.onClick} className={styles.btn} type="button">Okey</button>
    </div>
    </div>
)
}
export default EmptyInput;