import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Header';
import { Form, Button, Spinner } from 'react-bootstrap';

export default function Login({ setUserId, getUserPrimary, setIsNewUser }) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const getData = async (id) => {
    getUserPrimary(id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // const url = `${process.env.REACT_APP_SERVER}/api/login/${email}/${password}`;
    // okay, so this should probs make a get request to the server with the email and password, i can check like var confirmedUser =_context.Users.where(u => u.Email == email && u.Password == password)
    // if confirmedUser != null, send back a yep! log them in else, nope, you cannot log in, 
    // if null, i can render a "is that the correct password?" or something like that

    // but if it is a valid user, i probably wanna send that user's data down so i can render out the rest of the app, right? name, email, etc. plus fav healthcare, etc.
    // i could honestly just send back the user's userId, then i could make separate requests depending on when i needed them
    try {
      const url = `${process.env.REACT_APP_SERVER}/api/login/${email}/${password}`;
      // let axiosConfig = {
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // };
      // i need to send back the userId
      // const response = await axios.get(url, axiosConfig);
      const response = await axios.get(url);
      setUserId(response.data);
      setIsNewUser(false);
      getData(response.data);
      setIsLoggingIn(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ margin: '5vh 5vw' }}>
        <Header />

        <Form onSubmit={(e) => handleSubmit(e)} method='get' id="loginForm" style={{ height: '100vh' }} >
          <h2>Welcome Back!</h2>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setemail(e.target.value)} type="email" placeholder="email@email.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setpassword(e.target.value)} type="password" placeholder="cool password" />
          </Form.Group>

          {!isLoggingIn ?
            <Button variant="primary" type="submit">
              Login
            </Button> :
            <Button variant="primary" type="submit" disabled>
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
    </>
  )
}
