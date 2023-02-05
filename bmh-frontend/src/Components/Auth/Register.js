import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form, Spinner } from 'react-bootstrap';
import Header from '../Header';

export default function Register({ setUserId, setIsNewUser, getUserPrimary }) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [firstname, setfname] = useState('');
  const [lastname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [birthday, setbirthday] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  // const [isValid, setisValid] = useState(false);

  const clearForm = () => {
    setfname('');
    setlname('');
    setbirthday('');
    setemail('');
    setpassword('')
  }

  const getData = async (id) => {
    getUserPrimary(id);
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const url = `${process.env.REACT_APP_SERVER}/api/register`;
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };

    try {
      const body = {
        "id": crypto.randomUUID().toString(),
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": password,
        "birthday": birthday,
        "userEntryId": "string",
        "userProviderId": "string"
      }

      setIsNewUser(true);
      const response = await axios.post(url, body, axiosConfig);
      console.log(response.data);
      setUserId(response.data);
      getData(response.data);
      clearForm();
      setIsLoggingIn(false);
      // although i have the user data now, if the post request returns 201 created, i need to send the data back, or create a get request to get the user's info so i can scaffold out the data for them and start being able to save it all
    } catch (error) {
      console.log(error);
      alert("Registration error, please try again later");
      window.open("/");
    }
  }

  return (
    <>
      <div style={{ margin: '5vh 5vw' }}>
        <Header />
        <Form onSubmit={(e) => handleRegistration(e)} method='post' id="registerForm" >
          <h2>Create a new Account</h2>
          <Form.Group className="mb-3" controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control required value={firstname} onChange={(e) => setfname(e.target.value)} type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required value={lastname} onChange={(e) => setlname(e.target.value)} type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control required value={email} onChange={(e) => setemail(e.target.value)} type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control required value={password} onChange={(e) => setpassword(e.target.value)} type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ConfirmPassword">
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control required value={password2} onChange={(e) => setpassword2(e.target.value)} type="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Birthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control required value={birthday} onChange={(e) => setbirthday(e.target.value)} type="date" />
          </Form.Group>

          {!isLoggingIn ?
            <Button variant="primary" type="submit">
              Register
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
