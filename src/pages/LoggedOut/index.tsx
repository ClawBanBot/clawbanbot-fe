import React from "react";
import {
  Title,
  LogoContainer,
  AuthContainer,
  PantherContainer,
  BenefitsList,
  BenefitsListItem,
} from "../../styles/home.style";
import {
  TwitchButton,
  ButtonIconContainer,
  ButtonTextContainer,
} from "../../styles/button.style";
import TwitchSvg from "../../svg/twitch";
import PewPewPanther from "../../svg/pewpewpanther";
import BannerImage from "../../svg/bannerImage";
import BannerTextPath from "../../svg/bannerTextPath";
import Loading from "../../utils/Loading";

interface IProps {
  twitchAuthUrl: string | null;
  isLoading: boolean;
}

export default ({ twitchAuthUrl, isLoading }: IProps) => {
  return (
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
          Auto-ban users in your Twitch channel who are banned in our network
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
  );
};
