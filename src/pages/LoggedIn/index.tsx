import React from "react";
import { Welcome, TwitchUserName } from "./index.style";
import Emoji from "../../utils/Emoji";

interface LoggedInPageProps {
  twitchDisplayName: string;
}

export default function LoggedInPage(props: LoggedInPageProps): JSX.Element {
  const { twitchDisplayName } = props;

  return (
    <Welcome>
      <Emoji label="Waving hand" symbol="👋" />
      Pew pew <TwitchUserName>@{twitchDisplayName}</TwitchUserName>!
    </Welcome>
  );
}
