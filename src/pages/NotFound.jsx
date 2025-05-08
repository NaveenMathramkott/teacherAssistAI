import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: clamp(8rem, 20vw, 12rem);
  font-weight: bold;
  margin: 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, #6d9ee8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin: 1rem 0;
  color: var(--text-color);
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 1rem 0 2rem;
`;

const BackButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: rgba(138, 180, 248, 0.1);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use window.history.length to check if there's a previous page
    if (window.history.length > 1) {
      navigate(-1); // Go back one step in history
    } else {
      // Fallback to home if no history exists
      navigate("/");
    }
  };

  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <Title>Page Not Found</Title>
      <Description>
        Oops! The page you're looking for doesn't exist or has been moved. Let's
        get you back on track.
      </Description>
      <BackButton onClick={handleGoBack}>Go Back</BackButton>
    </NotFoundContainer>
  );
};

export default NotFound;
