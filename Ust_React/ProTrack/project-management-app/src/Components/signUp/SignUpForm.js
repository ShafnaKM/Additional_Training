import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
//import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -75px; /* Add margin to push the form down */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const CenteredText = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/register", formData);
      console.log("User registered:", response.data);
      // You can redirect to a success page or update your UI as needed
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure, e.g., display an error message
    }
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <div>
      {/* <HeaderPage /> */}
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create Password"
          />
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Reenter Password"
          />
          <Button type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>{" "}
          {/* Trigger the handleSubmit function when the button is clicked */}
        </Form>
        <CenteredText>
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </CenteredText>
      </FormContainer>
      {/* <FooterPage /> */}
    </div>
  );
};

export default SignUpForm;
