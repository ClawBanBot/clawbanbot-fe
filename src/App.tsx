import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { GlobalStyle, Container } from "./styles/global.style";
import {
  Title,
  LogoContainer,
  AuthContainer,
  PantherContainer,
  BenefitsList,
  BenefitsListItem,
} from "./styles/home.style";
import {
  TwitchButton,
  ButtonIconContainer,
  ButtonTextContainer,
} from "./styles/button.style";
import TwitchSvg from "./svg/twitch";
import PewPewPanther from "./svg/pewpewpanther";
import Api, { GetAuthLinkResponse } from "./api";
import BannerImage from "./svg/bannerImage";
import BannerTextPath from "./svg/bannerTextPath";
import LoggedInPage from "./pages/LoggedIn";
import Loading from "./utils/Loading";

function App(): JSX.Element {
  const [twitchAuthUrl, setTwitchAuthUrl] = useState<GetAuthLinkResponse>(null);
  const [authenticatedWithTwitch, setAuthenticatedWithTwitch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [twitchDisplayName, setTwitchDisplayName] = useState("");

  useEffect(() => {
    Api.getTwitchAuthUrl().then((url) => setTwitchAuthUrl(url));

    const { code }: any = queryString.parse(window.location.search) || "";

    if (code) {
      setIsLoading(true);
      Api.authenticateWithTwitch(code).then((response) => {
        if (response !== null) {
          setAuthenticatedWithTwitch(true);
          setTwitchDisplayName(response.twitchDisplayName);
          window.history.pushState({}, "", "/");
          setIsLoading(false);
        }
      });
    }
  }, [twitchAuthUrl]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <AuthContainer>
          <LogoContainer>
            <PantherContainer
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <PewPewPanther />
            </PantherContainer>
            <BannerImage />
            <BannerTextPath displayText="Claw Ban Bot" />
          </LogoContainer>
          <Title>Ultimate online safety for streamers</Title>

          <BenefitsList>
            <BenefitsListItem>
              Auto-ban users in your Twitch channel who are banned in our
              network
            </BenefitsListItem>
            <BenefitsListItem>
              Works silently in the background and will not invade your chat
            </BenefitsListItem>
          </BenefitsList>

          {isLoading && <Loading />}

          {authenticatedWithTwitch && (
            <LoggedInPage twitchDisplayName={twitchDisplayName} />
          )}

          {!isLoading && !authenticatedWithTwitch && twitchAuthUrl && (
            <TwitchButton href={twitchAuthUrl}>
              <ButtonIconContainer>
                <TwitchSvg />
              </ButtonIconContainer>
              <ButtonTextContainer>Log in with Twitch</ButtonTextContainer>
            </TwitchButton>
          )}
        </AuthContainer>
      </Container>
    </>
  );
}

export default App;
