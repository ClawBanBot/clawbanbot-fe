import { useEffect, useState } from 'react';
import { GlobalStyle, Container } from './styles/global.style'
import { Title, TagLine, PantherContainer } from './styles/home.style'
import { TwitchButton, ButtonIconContainer, ButtonTextContainer } from './styles/button.style' 
import { TwitchSvg } from './svg/twitch'
import { PewPewPanther } from './svg/pewpewpanther'

import Api, { GetAuthLinkResponse } from './api'

function App(): JSX.Element {
  const [twitchAuthUrl, setTwitchAuthUrl] = useState<GetAuthLinkResponse>(null);

  useEffect(() => {
    Api.getTwitchAuthUrl().then((url) => setTwitchAuthUrl(url));
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

        {twitchAuthUrl && (
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
