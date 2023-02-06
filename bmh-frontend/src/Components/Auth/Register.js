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
  const [passwordShown, setPasswordShown] = useState(false);
  // const [password2, setpassword2] = useState('');
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
    const url = `${process.env.REACT_APP_SERVER}/register`;
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
      // the response will either be an id, InvalidModelState, or UserExists
      console.log(response.data);
      if (response.data === "InvalidModelState") { invalidModelState() }
      else if (response.data === "UserExists") { userAlreadyExists() }
      else {
        setUserId(response.data);
        getData(response.data);
        clearForm();
      }
      setIsLoggingIn(false);
    } catch (error) {
      console.log(error);
      alert("Registration error, please try again later");
      window.open("/", "_self");
    }
  }

  const invalidModelState = () => {
    alert("Invalid Registration! Try again later!");
  }

  const userAlreadyExists = () => {
    alert("This email and password is already associated with an account. Please Login")
  }

  return (
    <>
      <div>
        <div style={{ margin: '5vh 5vw' }}>
          <Header />
          <Form className='divContainerForBackgroundColor registerForm' onSubmit={(e) => handleRegistration(e)} method='post' id="registerForm" >
            <h2>Create a new Account</h2>
            <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required value={firstname} onChange={(e) => setfname(e.target.value)} type="text" placeholder='Iyanla' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required value={lastname} onChange={(e) => setlname(e.target.value)} type="text" placeholder='Vazant' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control required value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder='email@email.com' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label onClick={() => setPasswordShown(!passwordShown)}>Password &nbsp;
                {passwordShown ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
              </Form.Label>
              <Form.Control required value={password} onChange={(e) => setpassword(e.target.value)} type={passwordShown ? "text" : "password"} placeholder='secure password' />

            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="ConfirmPassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control required value={password2} onChange={(e) => setpassword2(e.target.value)} type="password" placeholder='secure password' />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="Birthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control required value={birthday} onChange={(e) => setbirthday(e.target.value)} type="date" />
            </Form.Group>

            {!isLoggingIn ?
              <Button variant="light" type="submit">
                Register
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
