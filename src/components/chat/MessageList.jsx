import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: var(--primary-color);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--primary-color);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
  }
`;

const Message = styled(motion.div)`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
`;

const MessageContent = styled.div`
  background-color: ${(props) =>
    props.sender === "user" ? "var(--accent-color)" : "var(--secondary-color)"};
  color: ${(props) =>
    props.sender === "user" ? "var(--primary-color)" : "var(--text-color)"};
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-lg);
  max-width: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  line-height: 1.5;
`;

const FileAttachment = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(138, 180, 248, 0.1);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MessageList = forwardRef(({ messages }, ref) => {
  return (
    <MessageContainer ref={ref}>
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
              {message.file && (
                <FileAttachment>
                  <FaFileAlt />
                  {message.file.name}
                </FileAttachment>
              )}
            </MessageContent>
          </Message>
        ))}
      </AnimatePresence>
    </MessageContainer>
  );
});

export default MessageList;
