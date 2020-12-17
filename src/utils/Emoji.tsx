import styled from "styled-components";
import React from "react";

interface EmojiProps {
  label: string;
  symbol: string;
}

const EmojiContainer = styled.span`
  margin-right: 0.5rem;
`;

export default function Emoji(props: EmojiProps): JSX.Element {
  const { label, symbol } = props;

  return (
    <EmojiContainer
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </EmojiContainer>
  );
}
