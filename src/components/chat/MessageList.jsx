import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const Message = styled(motion.div)`
  display: flex;
  margin-bottom: 1rem;
  justify-content: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

const MessageContent = styled.div`
  background-color: ${props => props.sender === 'user' ? 'var(--accent-color)' : 'white'};
  color: ${props => props.sender === 'user' ? 'white' : 'var(--text-color)'};
  padding: 1rem;
  border-radius: var(--border-radius);
  max-width: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MessageList = ({ messages }) => {
  return (
    <MessageContainer>
      <AnimatePresence>
        {messages.map((message) => (
          <Message
            key={message.id}
            sender={message.sender}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <MessageContent sender={message.sender}>
              {message.content}
            </MessageContent>
          </Message>
        ))}
      </AnimatePresence>
    </MessageContainer>
  );
};

export default MessageList;