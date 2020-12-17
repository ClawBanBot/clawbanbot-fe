import styled from "styled-components";

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

export { Welcome, TwitchUserName };
