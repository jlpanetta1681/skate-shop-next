import React, { useState } from 'react';
import styles from '/styles/Home.module.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event: any) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    // validate form
    if (username === '' || password === '') {
      alert('Please enter a username and password');
      return;
    }
    // submit form
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome {username}!</h1>
      ) : ( 
        <div className={styles.form_container}>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )}
    </div>
  );
};

export default LoginForm;