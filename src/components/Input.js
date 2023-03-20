import styles from "./Input.module.css";
import Button from "./Button";
import { useState } from "react";
import Card from "./Card";
import NewUser from "./NewUser";
import InputValid from "./InputValid";
import EmptyInput from "./EmptyInput";
/*

*/
const Input = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [newUser, setNewUser] = useState([]);
  const [error, setError] = useState(true);
  const [error2, setError2] = useState(true);

 
  /*
    return newUser.filter((e) => e.key !== event.target.id);
  };
*/
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    setNewUser((prevUser) => {
      if (age > 0) {
        return [
          ...prevUser,
          {
            username: username,
            age: age,
            key: Math.random(),
          },
        ];
      } else {
        return [...prevUser];
      }
    });
    setUsername("");
    setAge("");
    if (age < 0) {
      setError(false);
    } else if (age.trim() === "" || username.trim() === "") {
      setError2(false);
    }
  };

  const errorHandler = () => {
    setError(true);
  };

  const error2Handler = () => {
    setError2(true);
  };

  const keyHandler = (event) => {};

  return (
    <div>
      <Card>
        {!error2 && <EmptyInput onClick={error2Handler} />}
        {!error && <InputValid onClick={errorHandler} />}

        <form
          className={!error || !error2 ? styles[("form", "filtering")] : "from"}
        >
          <label>User Name</label>
          <input
            onChange={usernameChangeHandler}
            value={username}
            className={styles.input}
            type="text"
          />
          <label>Age (years)</label>
          <input
            onChange={ageChangeHandler}
            value={age}
            className={styles.input}
            type="text"
          />
          <Button onClick={addUserHandler} />
        </form>
      </Card>
      <div className={!error || !error2 ? styles["filtering"] : ""}>
        <Card>
          <NewUser
              
            onNewUser={newUser}
            onKey={keyHandler}
          />
        </Card>
      </div>
    </div>
  );
};
export default Input;
