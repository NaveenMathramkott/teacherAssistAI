import React from "react";
import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--text-secondary);
`;

const PulsingCircle = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, var(--accent-color) 0%, #6d9ee8 100%);
  border-radius: 50%;
  animation: ${pulseAnimation} 1.3s ease-in-out infinite;
`;

const Text = styled.span`
  font-size: 1rem;
  color: var(--text-color);
`;

const LoadingAnimation = () => {
  return (
    <Container>
      <Text>Teaching Assistant is thinking...</Text>
      <PulsingCircle />
    </Container>
  );
};

export default LoadingAnimation;
