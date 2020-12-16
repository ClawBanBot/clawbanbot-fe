import { GlobalStyle, Container } from './styles/global.style'
import { Title, TagLine, PantherContainer } from './styles/home.style'
import { TwitchButton, ButtonIconContainer, ButtonTextContainer } from './styles/button.style' 
import { TwitchSvg } from './svg/twitch'
import { PewPewPanther } from './svg/pewpewpanther'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <PantherContainer>
          <PewPewPanther />
        </PantherContainer>
        <Title>Ultimate online safety</Title>
        <TagLine>
          You want to stream but harassment is getting in the way. It's putting you off. 
          Claw Ban Bot detects unwanted messages and auto-bans the user. 
          Let's put an end to harassment.
        </TagLine>


          <TwitchButton>
            <ButtonIconContainer>
              <TwitchSvg />
            </ButtonIconContainer>
            <ButtonTextContainer>
              Log in with Twitch
            </ButtonTextContainer>
          </TwitchButton>

      </Container>
    </>
  );
}

export default App;
