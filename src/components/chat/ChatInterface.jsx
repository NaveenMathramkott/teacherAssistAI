import React from "react";
import styled from "styled-components";
import { useChat } from "../../context/ChatContext";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const ChatInterfaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: var(--accent-color);
  color: white;
  font-weight: bold;
`;

const ChatInterface = () => {
  const { messages, addMessage, isTyping } = useChat();

  const handleSendMessage = (content) => {
    addMessage({
      id: Date.now(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    });

    // Simulate AI response
    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        content: "This is a simulated AI response.",
        sender: "ai",
        timestamp: new Date().toISOString(),
      });
    }, 1000);
  };

  return (
    <ChatInterfaceContainer>
      <Header>Chat Session</Header>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} isTyping={isTyping} />
    </ChatInterfaceContainer>
  );
};

export default ChatInterface;
