import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Table = styled.table`
  width: 100%;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid var(--background-color);
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--background-color);
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  background-color: ${props => props.danger ? '#E53E3E' : 'var(--accent-color)'};
  color: white;
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
`;

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  ]);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.role}</Td>
            <Td>
              <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Edit
              </Button>
              <Button
                danger
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserManagement;