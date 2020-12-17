import styled from "styled-components";
import { Font } from "./font.style";
import { focusAccessible } from "./utils.style";

const TwitchButton = styled.a`
  background-color: var(--color-twitch);
  border-width: 0;
  border-radius: 0.25rem;
  display: inline-flex;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: ${Font.weight.bold};
  font-family: ${Font.family.main};
  padding: 0.5rem 1rem;
  color: var(--color-white);
  cursor: pointer;
  transition: color 0.2s ease 0s, background-color 0.2s ease 0s;
  align-items: center;
  justify-content: center;

  ${focusAccessible}

  span {
    color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-twitchDark);
    color: var(--color-offwhite);

    span {
      color: var(--color-offwhite);
    }
  }

  &:active {
    background-color: var(--color-twitchDark);
    color: var(--color-offwhite);

    span {
      color: var(--color-offwhite);
    }
  }
`;

const ButtonIconContainer = styled.span`
  display: flex;
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const ButtonTextContainer = styled.span`
  display: flex;
`;

export { TwitchButton, ButtonIconContainer, ButtonTextContainer };
