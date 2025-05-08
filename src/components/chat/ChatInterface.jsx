import React, { useEffect, useRef, useState } from "react";
import { FaFilePdf, FaFileWord, FaPlus } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useChat } from "../../context/ChatContext";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const ChatInterfaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid rgba(138, 180, 248, 0.1);
`;

const Header = styled.div`
  padding: 1.5rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
  font-weight: 500;
  border-bottom: 1px solid rgba(138, 180, 248, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  background-color: var(--secondary-color);
  border-top: 1px solid rgba(138, 180, 248, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const FileUploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--text-secondary);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color);
    border-color: var(--accent-color);
    transform: scale(1.05);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FilePreview = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: rgba(138, 180, 248, 0.1);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-size: 0.9rem;
`;

const FileUploadModal = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  background-color: var(--secondary-color);
  border: 1px solid rgba(138, 180, 248, 0.1);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const FileOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: transparent;
  color: var(--text-color);
  border: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(138, 180, 248, 0.1);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const UploadButtonContainer = styled.div`
  position: relative;
`;

const heartbeatAnimation = keyframes`
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

const reverseHeartbeatAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--text-secondary);
`;

const HeartbeatCircle = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgb(141, 182, 244) 100%
  );
  opacity: 0.7;
  animation: ${heartbeatAnimation} 1.3s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      rgb(248, 248, 248) 100%
    );
    opacity: 0.9;
    animation: ${reverseHeartbeatAnimation} 1.3s ease-in-out infinite;
  }
`;

const LoadingText = styled.span`
  font-size: 1rem;
  color: var(--text-color);
`;

const ChatInterface = () => {
  const { messages, addMessage, isTyping, setIsTyping } = useChat();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content) => {
    setIsTyping(true);
    addMessage({
      id: Date.now(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
      file: selectedFile,
    });

    setSelectedFile(null);

    // Simulate AI response with longer delay to show animation
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        id: Date.now() + 1,
        content: "This is a simulated AI response.",
        sender: "ai",
        timestamp: new Date().toISOString(),
      });
    }, 3000); // Increased delay to 3 seconds
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setSelectedFile(file);
      } else {
        alert("Please upload only PDF or DOCX files");
      }
    }
  };

  const handleFileTypeSelect = (fileType) => {
    fileInputRef.current.accept = fileType === "pdf" ? ".pdf" : ".docx";
    fileInputRef.current.click();
    setIsModalOpen(false);
  };

  return (
    <ChatInterfaceContainer>
      <Header>Beta Assist</Header>
      <MessageList ref={messageListRef} messages={messages} />
      {isTyping && (
        <LoadingContainer>
          <LoadingText>Teaching Assistant is thinking...</LoadingText>
          <HeartbeatCircle />
        </LoadingContainer>
      )}
      <InputWrapper>
        {selectedFile && (
          <FilePreview>Selected file: {selectedFile.name}</FilePreview>
        )}
        <InputRow>
          <UploadButtonContainer>
            <FileUploadButton onClick={() => setIsModalOpen(!isModalOpen)}>
              <FaPlus />
            </FileUploadButton>
            <FileUploadModal isOpen={isModalOpen}>
              <FileOption onClick={() => handleFileTypeSelect("pdf")}>
                <FaFilePdf />
                PDF
              </FileOption>
              <FileOption onClick={() => handleFileTypeSelect("docx")}>
                <FaFileWord />
                Word
              </FileOption>
            </FileUploadModal>
          </UploadButtonContainer>
          <MessageInput
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
            ref={inputRef}
          />
        </InputRow>
        <HiddenFileInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
        />
      </InputWrapper>
    </ChatInterfaceContainer>
  );
};

export default ChatInterface;
