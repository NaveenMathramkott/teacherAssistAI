import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(138, 180, 248, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 15s infinite;
  }
`;

const RegisterForm = styled(motion.form)`
  background: var(--primary-color);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(138, 180, 248, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  background: linear-gradient(135deg, var(--accent-color) 0%, #6d9ee8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: rgba(138, 180, 248, 0.1);
  border: 1px solid rgba(138, 180, 248, 0.1);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    background-color: rgba(138, 180, 248, 0.15);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #6d9ee8 100%);
  color: var(--primary-color);
  border-radius: var(--border-radius);
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    login({ name, email, role: "user" });
    navigate("/chat");
  };

  return (
    <RegisterContainer>
      <RegisterForm
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <Title>Create Account</Title>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
        >
          Sign Up
        </Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
