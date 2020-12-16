import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { GlobalStyle, Container } from './styles/global.style'
import { Title, TagLine, PantherContainer, Welcome, TwitchUserName } from './styles/home.style'
import { TwitchButton, ButtonIconContainer, ButtonTextContainer } from './styles/button.style' 
import { TwitchSvg } from './svg/twitch'
import { PewPewPanther } from './svg/pewpewpanther'
import Api, { GetAuthLinkResponse } from './api'
import Emoji from './utils/Emoji'

function App(): JSX.Element {
  const [twitchAuthUrl, setTwitchAuthUrl] = useState<GetAuthLinkResponse>(null);
  const [authenticatedWithTwitch, setAuthenticatedWithTwitch] = useState(false);

  const [twitchDisplayName, setTwitchDisplayName] = useState(''); 

  useEffect(() => {
    Api.getTwitchAuthUrl().then((url) => setTwitchAuthUrl(url));

    const { code } = queryString.parse(window.location.search) || '';
    
      if (code) {
        Api.authenticateWithTwitch(code as string).then((response) => {
          if (response !== null) {
            setAuthenticatedWithTwitch(true);
            setTwitchDisplayName(response.twitchDisplayName);
            window.history.pushState({}, "", "/");
          }
        });
      }
  }, []);


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

        {authenticatedWithTwitch && (
          <Welcome>
            <Emoji label="Waving hand" symbol="👋" />
            Pew pew <TwitchUserName>@{twitchDisplayName}</TwitchUserName>!</Welcome>
        )}

        {!authenticatedWithTwitch && twitchAuthUrl && (
          <TwitchButton href={twitchAuthUrl as string}>
            <ButtonIconContainer>
              <TwitchSvg />
            </ButtonIconContainer>
            <ButtonTextContainer>
              Log in with Twitch
            </ButtonTextContainer>
          </TwitchButton>
        )}

      </Container>
    </>
  );
}

export default App;
