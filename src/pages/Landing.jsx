import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LandingContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #e0b10d 0%, #4a5568 100%);
  color: white;
`;

const AboutSection = styled(Section)`
  background: white;
  color: var(--primary-color);
`;

const DetailsSection = styled(Section)`
  background: #f7fafc;
  color: var(--primary-color);
`;

const UpdateSection = styled(Section)`
  background: #2d3748;
  color: white;
`;

const NewsletterSection = styled(Section)`
  background: white;
  color: var(--primary-color);
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 3rem;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: ${(props) => (props.inverse ? "transparent" : "white")};
  color: ${(props) => (props.inverse ? "white" : "var(--primary-color)")};
  border: ${(props) => (props.inverse ? "2px solid white" : "none")};
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  max-width: 300px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
  margin-top: 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 1rem;
`;

const Landing = () => {
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <LandingContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to AI Chat Platform
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the next generation of AI conversation with our intuitive
          and powerful chat interface.
        </Description>
        <CTAButton
          onClick={() => navigate("/chat")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Chatting
        </CTAButton>
      </HeroSection>

      <AboutSection>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </Title>
        <Description
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are dedicated to revolutionizing education through AI-powered
          assistance, making learning more accessible and engaging.
        </Description>
      </AboutSection>

      <DetailsSection>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </Title>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Card
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Intelligent Assistance</h3>
            <p>Advanced AI-powered support for enhanced learning experience</p>
          </Card>
          <Card
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>24/7 Availability</h3>
            <p>Access learning resources and support anytime, anywhere</p>
          </Card>
          <Card
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Personalized Learning</h3>
            <p>Tailored content and feedback for individual needs</p>
          </Card>
        </div>
      </DetailsSection>

      <UpdateSection>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </Title>
        <Description
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay tuned for exciting new features and improvements. We're
          constantly working to enhance your learning experience.
        </Description>
        <CTAButton
          inverse
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Learn More
        </CTAButton>
      </UpdateSection>

      <NewsletterSection>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Stay Updated
        </Title>
        <Description
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Subscribe to our newsletter for the latest updates and features.
        </Description>
        <NewsletterForm onSubmit={handleSubscribe}>
          <Input type="email" placeholder="Enter your email" required />
          <CTAButton type="submit">Subscribe</CTAButton>
        </NewsletterForm>
      </NewsletterSection>
    </LandingContainer>
  );
};

export default Landing;
