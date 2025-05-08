import { motion } from "framer-motion";
import React, { forwardRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";

const InputContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  background-color: var(--primary-color);
  border: 1px solid rgba(138, 180, 248, 0.1);
  border-radius: var(--border-radius-lg);
  font-size: 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const SendButton = styled(motion.button)`
  padding: 1rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7aa3e7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MessageInput = forwardRef(({ onSendMessage, isTyping }, ref) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <InputContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={ref}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isTyping}
        />
        <SendButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isTyping}
        >
          <FaPaperPlane />
        </SendButton>
      </Form>
    </InputContainer>
  );
});

export default MessageInput;
