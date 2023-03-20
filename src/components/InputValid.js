import styles from "./InputValid.module.css";

const InputValid=(props)=>{
return(
    <div className={styles.hi}>
    <div className={styles.invalid}>
        <h2 className={styles.text1}>
            Invalid input
        </h2>
        <h4 className={styles.text2}>please enter a valid age (greater than 0).</h4>
        <button onClick={props.onClick} className={styles.btn} type="button">Okey</button>
    </div>
    </div>
)
}
export default InputValid;