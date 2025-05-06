import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  height: calc(100vh - 64px);
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(motion.div)`
  padding: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  background-color: ${props => props.active ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MenuTitle = styled.span`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/chat', label: 'Chat' },
    { path: '/history', label: 'Chat History' },
    { path: '/settings', label: 'Settings' },
    { path: '/help', label: 'Help & Support' },
  ];

  return (
    <SidebarContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MenuTitle active={location.pathname === item.path}>
            {item.label}
          </MenuTitle>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;