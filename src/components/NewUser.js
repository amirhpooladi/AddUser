import styles from "./NewUser.module.css";



const NewUser = (props) => {

  const a = () => [];
  return (
    <div>
      {props.onNewUser.map((user) => (
        <input
          key={user.key}
          className={styles.input}
          type="text"
          value={`${user.username} (${user.age} years old)`}
          onClick={props.onClick}
          onChange={a}
          id={user.key}
        />
      ))}
    </div>
  );
};
export default NewUser;
