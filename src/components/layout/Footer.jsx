import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nm from "/logo.svg";

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 3rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(138, 180, 248, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const FooterTitle = styled.h3`
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FooterLink = styled(motion(Link))`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(138, 180, 248, 0.1);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    font-size: 0.9rem;
  }

  img {
    width: 16px;
    padding-top: 2px;
    margin-right: -4px;

    @media (max-width: 768px) {
      width: 14px;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Teacher Assist AI</FooterTitle>
          <FooterText>
            Empowering education through artificial intelligence. Making
            learning more accessible and engaging for everyone.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink
            to="/about"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Us
          </FooterLink>
          <FooterLink
            to="/features"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Features
          </FooterLink>
          <FooterLink
            to="/pricing"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Pricing
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink
            to="/help"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Help Center
          </FooterLink>
          <FooterLink
            to="/contact"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Us
          </FooterLink>
          <FooterLink
            to="/faq"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            FAQ
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <FooterText>
            Follow us on social media for updates and educational content.
          </FooterText>
          <SocialLinks>
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              𝕏
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              in
            </SocialIcon>
            <SocialIcon
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              ⌥
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <img
          src={nm}
          style={{ width: "16px", paddingTop: "2px", marginRight: "-4px" }}
        />
        © {currentYear} Teacher Assist AI. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
