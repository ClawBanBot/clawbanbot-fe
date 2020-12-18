import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { GlobalStyle, Container } from "./styles/global.style";
import { Color } from "./styles/color.style";
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
  // const [backgroundColor, setBackgroundColor] = useState(Color.palette.redDark);
  const backgroundColor = Color.background;

  const [twitchDisplayName, setTwitchDisplayName] = useState<string>("");

  useEffect(() => {
    Api.getTwitchAuthUrl().then((url) => setTwitchAuthUrl(url));

    const { code }: any = queryString.parse(window.location.search) || "";
    if (code) {
      setIsLoading(true);
      window.history.replaceState({}, "", "/");
      Api.authenticateWithTwitch(code)
        .then((response) => {
          if (response !== null) {
            setAuthenticatedWithTwitch(true);
            setTwitchDisplayName(response.twitchDisplayName);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      {!authenticatedWithTwitch && (
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

            {!isLoading && twitchAuthUrl && (
              <TwitchButton href={twitchAuthUrl}>
                <ButtonIconContainer>
                  <TwitchSvg />
                </ButtonIconContainer>
                <ButtonTextContainer>Log in with Twitch</ButtonTextContainer>
              </TwitchButton>
            )}
          </AuthContainer>
        </Container>
      )}

      {authenticatedWithTwitch && (
        <LoggedInPage twitchDisplayName={twitchDisplayName} />
      )}
    </>
  );
}

export default App;
