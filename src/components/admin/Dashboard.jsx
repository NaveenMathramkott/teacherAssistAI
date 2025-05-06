import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: var(--secondary-color);
  font-size: 1.1rem;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <StatNumber>1,234</StatNumber>
        <StatLabel>Total Users</StatLabel>
      </Card>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <StatNumber>5,678</StatNumber>
        <StatLabel>Total Messages</StatLabel>
      </Card>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <StatNumber>98%</StatNumber>
        <StatLabel>User Satisfaction</StatLabel>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;