import { Modal, Button, Form, Alert } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
// import { ShowModalContext } from "../context/showModalSub";
import { useNavigate } from "react-router-dom";
import { UserContextToken } from "../../components/context/showContext";
import { API } from "../../../config/api";
function SignUp() {
  const navigate = useNavigate();
  /*   const [token, setToken] = useContext(UserContextToken);
   */
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { username, email, password } = form;

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

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/users", body, config);
      console.log("ini res" + response);

      // Notification
      if (response.status == 200) {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
      navigate("/");
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

  ///////////////////////////////////
  const [state, dispacth] = useContext(UserContextToken);

  console.log(state);


  return (
    <>
      <div className="p-3 bg-white rounded shadow">
        <Form className="p-5 " onSubmit={handleSubmit}>
          <h1 className="mb-4">Sign Up</h1>
          {message && message}
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              className="py-3"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
              name="email"
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
          <Form.Group className="mb-3" controlId="formBasicusername">
            <Form.Control
              className="py-3"
              type="text"
              placeholder="username"
              onChange={handleChange}
              value={username}
              name="username"
            />
          </Form.Group>

          <Form.Group className="d-grid gap-2 py-4">
            <Button type="submit" variant="danger" size="lg">
              Sign Up
            </Button>
          </Form.Group>


        </Form>
      </div>
      <Form.Text className=" text-center">
        <p className="text-center">
          Already have an account ? Klik
          <span
            style={{ cursor: "pointer" }}
            className=" ms-1 fw-bold"
          >
            Here
          </span>
        </p>
      </Form.Text>
    </>
  );
}

export default SignUp;
