import React from "react";
import styled from "styled-components";
import ChatInterface from "../components/chat/ChatInterface";
import Sidebar from "../components/layout/Sidebar";

const ChatContainer = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  background-color: var(--background-color);
`;

const ChatContent = styled.div`
  flex: 1;
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Chat = () => {
  return (
    <ChatContainer>
      <Sidebar />
      <ChatContent>
        <ChatInterface />
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;
