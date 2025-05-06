import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputContainer = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 1rem;
`;

const SendButton = styled(motion.button)`
  padding: 0 1.5rem;
  background-color: var(--accent-color);
  color: white;
  border-radius: var(--border-radius);
`;

const MessageInput = ({ onSendMessage, isTyping }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputContainer>
      <Form onSubmit={handleSubmit}>
        <Input
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
          Send
        </SendButton>
      </Form>
    </InputContainer>
  );
};

export default MessageInput;