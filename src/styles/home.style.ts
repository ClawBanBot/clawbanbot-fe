import styled from "styled-components";
import { Layout } from "./layout.style";
import { motion } from "framer-motion";

const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.6rem;
  font-family: var(--font-family-main);
  color: var(--color-offwhite);
  margin-bottom: 2rem;
  text-align: center;
`;

const TagLine = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-main);
  color: var(--color-offwhite);
  margin-bottom: 4rem;
`;

const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  width: ${Layout.maxWidth.small - 100}px;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  height: 260px;
`;

const Welcome = styled.h3`
  font-size: 2rem;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-main);
  color: var(--color-offwhite);
  margin-bottom: 4rem;
`;

const TwitchUserName = styled.span`
  font-weight: var(--font-weight-bold);
`;

const AuthContainer = styled.div`
  max-width: ${Layout.maxWidth.small}px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-black);
  padding: 1rem 2rem 2rem 2rem;
  border: 0.25rem solid var(--color-yellow);
  box-shadow: 0.5rem 0.5rem 0 0 var(--color-redDark);
`;

const PantherContainer = styled(motion.div)`
  width: ${Layout.maxWidth.small - 200}px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const BenefitsListItem = styled.li`
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-normal);
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 1rem;

  &:before {
    content: "✅";
    display: inline-block;
    margin-right: 1rem;
  }
`;

export {
  Title,
  TagLine,
  LogoContainer,
  Welcome,
  TwitchUserName,
  AuthContainer,
  PantherContainer,
  BenefitsList,
  BenefitsListItem,
};
