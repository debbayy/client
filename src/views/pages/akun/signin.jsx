import { Modal, Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { UserContextToken } from "../../components/context/showContext";

import { API } from "../../../config/api";


function SignIn() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [token, setToken] = useContext(UserContextToken);

  console.log(token);

  ///////////////////////
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user for login process here ...
      const response = await API.post("/auth/login", body, config);
      console.log(response);

      setToken({
        type: "LOGIN_SUCCESS",
        payload: response,
      });


      if (response.status === 200) {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );

         navigate("/users");
        setMessage(alert);
      }

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed !!
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  ////////////////////
  // const [state, dispacth] = useContext(UserContextToken);


  function switchsignup() {
    // navigate("")
  }



  // console.log(state, "ini adalah state");
  return (
    <>
      <div
        className="p-5 my-3 bg-white rounded shadow"
        
      >
        <Form className="p-2" onSubmit={handleSubmit}>
          <h1 className="mb-4">Sign In</h1>
          {message && message}
          <Form.Group className="mb-3 " controlId="formBasicusername">
            <Form.Control
              className="py-3"
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              value={username}
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="py-3"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              name="password"
            />
          </Form.Group>

          <Form.Group className="d-grid gap-2 py-4">
            <Button type="submit" variant="danger" size="lg">
              Sign In
            </Button>
          </Form.Group>

         
        </Form>
      </div>
      <Form.Text className="text-muted d-center ">
            <p className="text-center">
              Don't have an account ? Klik
              <span
                style={{ cursor: "pointer  " }}
                className=" ms-1 fw-bold"
                onClick={switchsignup}
              >
                Here
              </span>
            </p>
          </Form.Text>
    </>
  );
}

export default SignIn;
