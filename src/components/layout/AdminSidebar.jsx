import React from "react";
import { FaCog, FaComments, FaHistory, FaQuestionCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 70px;
  background-color: var(--primary-color);
  height: calc(100vh - 64px);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;

  &:hover {
    width: 250px;
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`;

const BottomSection = styled(MenuSection)`
  flex-grow: 0;
`;

const MenuItem = styled.div`
  padding: 1rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.active ? "var(--accent-color)" : "transparent"};
  color: ${(props) =>
    props.active ? "var(--primary-color)" : "var(--text-color)"};
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--transition);
  overflow: hidden;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--accent-color)" : "var(--secondary-color)"};
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
    min-width: 1.2rem;
  }
`;

const MenuTitle = styled.span`
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;

  ${SidebarContainer}:hover & {
    opacity: 1;
  }
`;

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/chat", label: "Chat", icon: <FaComments /> },
    { path: "/history", label: "Chat History", icon: <FaHistory /> },
    { path: "/help", label: "Help & Support", icon: <FaQuestionCircle /> },
  ];

  return (
    <SidebarContainer>
      <MenuSection>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <MenuTitle active={location.pathname === item.path}>
              {item.label}
            </MenuTitle>
          </MenuItem>
        ))}
      </MenuSection>

      <BottomSection>
        <MenuItem
          onClick={() => navigate("/settings")}
          active={location.pathname === "/settings"}
        >
          <FaCog />
          <MenuTitle active={location.pathname === "/settings"}>
            Settings
          </MenuTitle>
        </MenuItem>
      </BottomSection>
    </SidebarContainer>
  );
};

export default AdminSidebar;
