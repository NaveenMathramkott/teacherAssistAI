import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

const Nav = styled.nav`
  background-color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent-color);
`;

const NavItems = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(motion(Link))`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  color: var(--text-color);

  &:hover {
    background-color: var(--background-color);
  }
`;

const NavButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background-color: var(--accent-color);
  color: white;
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Nav>
      <Logo to="/">Teacher Assist</Logo>
      <NavItems>
        {user ? (
          <>
            <NavLink
              to="/chat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Chat
            </NavLink>
            <NavLink
              to="/profile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Profile
            </NavLink>
            {user.role === "admin" && (
              <NavLink
                to="/admin"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admin
              </NavLink>
            )}
            <NavButton
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </NavButton>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </NavLink>
          </>
        )}
      </NavItems>
    </Nav>
  );
};

export default Navbar;
