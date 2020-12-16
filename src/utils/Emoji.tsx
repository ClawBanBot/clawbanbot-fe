import styled from 'styled-components';

interface EmojiProps {
  label: string,
  symbol: string
}

const EmojiContainer = styled.span`
  margin-right: 0.5rem;
`

export default function Emoji(props: EmojiProps) {
  return (
      <EmojiContainer
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
      {props.symbol}
    </EmojiContainer>
  )
}
