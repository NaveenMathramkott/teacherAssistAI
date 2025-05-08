import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/layout/Footer";

const LandingContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--primary-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(138, 180, 248, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #8ab4f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 4vw, 3rem);
  }
`;

const Description = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  max-width: 800px;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(138, 180, 248, 0.2);
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 300px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: var(--container-width);
  margin: 4rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const FeatureCard = styled.div`
  background: var(--secondary-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: var(--accent-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
  }
`;

const AboutSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--secondary-color);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const UpdateSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--primary-color);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const NewsletterSection = styled.section`
  padding: 4rem 2rem;
  background: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fff 0%, #8ab4f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  background: var(--primary-color);
  color: var(--text-color);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #fff;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const UpdateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: var(--container-width);
  margin: 3rem auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const UpdateCard = styled.div`
  background: var(--secondary-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--accent-color);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(138, 180, 248, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const Landing = () => {
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <LandingContainer>
      <HeroSection>
        <Title>Welcome to Teacher Assist AI</Title>
        <Description>
          Experience the next generation of educational assistance powered by
          advanced artificial intelligence. Enhance your teaching and learning
          journey.
        </Description>
        <CTAButton onClick={() => navigate("/chat")}>Start Learning</CTAButton>

        <FeaturesGrid>
          <FeatureCard>
            <h3>Intelligent Tutoring</h3>
            <p>
              Personalized learning experience adapted to your unique needs and
              pace.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>24/7 Availability</h3>
            <p>
              Access educational support anytime, anywhere with our AI
              assistant.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Interactive Learning</h3>
            <p>
              Engage with dynamic content and real-time feedback for better
              understanding.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </HeroSection>

      <AboutSection>
        <SectionTitle>About Teacher Assist AI</SectionTitle>
        <Description>
          We're revolutionizing education through artificial intelligence. Our
          platform combines cutting-edge AI technology with pedagogical
          expertise to create an unparalleled learning experience.
        </Description>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Our Mission</h3>
            <p>
              To make quality education accessible to everyone through
              AI-powered assistance.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Our Vision</h3>
            <p>
              Creating a future where personalized learning is available at
              everyone's fingertips.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Our Values</h3>
            <p>
              Innovation, accessibility, and excellence in educational
              technology.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </AboutSection>

      <UpdateSection>
        <SectionTitle>Coming Soon</SectionTitle>
        <Description>
          We're constantly working to improve your experience. Here's what's
          coming next.
        </Description>
        <UpdateGrid>
          <UpdateCard>
            <h3>Advanced Analytics</h3>
            <p>
              Detailed insights into learning patterns and progress tracking.
            </p>
          </UpdateCard>
          <UpdateCard>
            <h3>Mobile App</h3>
            <p>Learn on the go with our upcoming mobile application.</p>
          </UpdateCard>
          <UpdateCard>
            <h3>Integration API</h3>
            <p>
              Connect Teacher Assist AI with your existing educational tools.
            </p>
          </UpdateCard>
          <UpdateCard>
            <h3>Collaborative Learning</h3>
            <p>New features for group learning and peer interaction.</p>
          </UpdateCard>
        </UpdateGrid>
      </UpdateSection>

      <NewsletterSection>
        <SectionTitle>Stay Updated</SectionTitle>
        <Description>
          Subscribe to our newsletter to receive the latest updates, features,
          and educational content.
        </Description>
        <NewsletterForm onSubmit={handleNewsletterSubmit}>
          <Input type="email" placeholder="Enter your email address" required />
          <CTAButton type="submit">Subscribe</CTAButton>
        </NewsletterForm>
      </NewsletterSection>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
