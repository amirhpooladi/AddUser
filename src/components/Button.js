import styles from "./Button.module.css";
const Button = (props) => {
 
  return (
    <div>
      <button onClick={props.onClick} className={styles.button} type="submit">
        Add User
      </button>
      
    </div>
  );
};
export default Button;
