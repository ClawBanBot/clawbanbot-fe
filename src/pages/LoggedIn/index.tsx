import React, { useState, useEffect } from "react";
import { Welcome, TwitchUserName } from "./index.style";
import Emoji from "../../utils/Emoji";
import { TwitchBanListResponse } from "../../api";
interface LoggedInPageProps {
  twitchDisplayName: string;
}

export default function LoggedInPage(props: LoggedInPageProps): JSX.Element {
  const { twitchDisplayName } = props;
  const [banList, setBanList] = useState<TwitchBanListResponse>([]);

  useEffect(() => {
    setBanList([]);
    // Api.getTwitchBanList().then((response) => setBanList(response));
  }, [setBanList]);

  return (
    <Welcome>
      {banList}
      <Emoji label="Waving hand" symbol="👋" />
      Pew pew <TwitchUserName>@{twitchDisplayName}</TwitchUserName>!
    </Welcome>
  );
}
