import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Header';
import { Form, Button, Spinner } from 'react-bootstrap';

export default function Login({ setUserId, getUserPrimary, setIsNewUser }) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);


  const getData = async (id) => {
    getUserPrimary(id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);

    try {
      const url = `${process.env.REACT_APP_SERVER}/login/${email}/${encodeURIComponent(password)}`;
      console.log(url);
      const response = await axios.get(url);
      // response.data will either return userId, InvalidUser
      if (response.data === "InvalidUser") { invalidUser() }
      else {
        setUserId(response.data);
        setIsNewUser(false);
        getData(response.data);
      }
      setIsLoggingIn(false);
    } catch (error) {
      console.log(error);
      alert("Login error, please try again later");
      window.open("/", "_self");
    }
  }

  const invalidUser = () => {
    alert("That email and password is not associated with an account. Please register!")
    window.open("/", "_self");
  }

  return (
    <>
      <div>
        <div style={{ margin: '5vh 5vw' }}>
          <Header />

          <Form className='divContainerForBackgroundColor loginForm' onSubmit={(e) => handleSubmit(e)} method='get' id="loginForm">
            <h2>Welcome Back!</h2>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setemail(e.target.value)} type="email" placeholder="email@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LastName">
              <Form.Label onClick={() => setPasswordShown(!passwordShown)}>Password &nbsp;
                {passwordShown ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </Form.Label>
              <Form.Control onChange={(e) => setpassword(e.target.value)} type={passwordShown ? "text" : "password"} placeholder="cool password" />
            </Form.Group>

            {!isLoggingIn ?
              <Button variant="light" type="submit">
                Login
              </Button> :
              <Button variant="light" type="submit" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
            }
          </Form>
        </div>
      </div>
    </>
  )
}
