import styles from "./Form.module.css";
import { useState } from "react";
import { validate } from "./validation";

export default function Form(props) {
  
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(validate({
      ...userData,
      [name]:value
    }))
  };
  const handleSumit = (event) => {
    event.preventDefault()
    props.login(userData)
  }
  
  return (
    <form className={styles.container} onSubmit={handleSumit}>
      <img
        src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg"
        alt="Not found"
      />

      <label htmlFor="">Nombre</label>
      <input
        type="text"
        value={userData.userName}
        name="userName"
        onChange={handleChange}
        className={errors.userName && styles.warning}
      />
  {errors.userName ?<p style={{color:"red"}}>{errors.userName}</p>: null}
      <label htmlFor="">Password:</label>
      <input
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        className={errors.password && styles.warning}
      />
      {errors.password ?<p style={{color:"red"}}>{errors.password}</p> : null}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
