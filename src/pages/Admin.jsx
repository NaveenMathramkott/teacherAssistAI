import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/admin/Dashboard";
import UserManagement from "../components/admin/UserManagement";

const AdminContainer = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  background-color: var(--background-color);
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: var(--primary-color);
  padding: 2rem;
  border-right: 1px solid rgba(138, 180, 248, 0.1);
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
`;

const MenuItem = styled(motion.div)`
  padding: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.active ? "rgba(138, 180, 248, 0.1)" : "transparent"};
  color: ${(props) =>
    props.active ? "var(--accent-color)" : "var(--text-color)"};
  border: 1px solid
    ${(props) => (props.active ? "var(--accent-color)" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(138, 180, 248, 0.1);
    border-color: var(--accent-color);
  }
`;

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <AdminContainer>
      <Sidebar>
        <MenuItem
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
          whileHover={{ scale: 1.02 }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          active={activeTab === "users"}
          onClick={() => setActiveTab("users")}
          whileHover={{ scale: 1.02 }}
        >
          User Management
        </MenuItem>
      </Sidebar>
      <Content>
        {activeTab === "dashboard" ? <Dashboard /> : <UserManagement />}
      </Content>
    </AdminContainer>
  );
};

export default Admin;
