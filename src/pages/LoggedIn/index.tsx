import React, { useState, useEffect } from "react";
import { Welcome, TwitchUserName } from "./index.style";
import Emoji from "../../utils/Emoji";
import { TwitchBanListResponse } from "../../api";
import Api from "../../api";

interface LoggedInPageProps {
  twitchDisplayName: string;
}

export default function LoggedInPage(props: LoggedInPageProps): JSX.Element {
  const { twitchDisplayName } = props;
  const [banList, setBanList] = useState<TwitchBanListResponse>([]);

  useEffect(() => {
    setBanList([]);
    Api.getTwitchBanList().then((response) => {
      setBanList(response);
    });
  }, [setBanList]);

  const disconnectBot = () => {
    Api.disconnectBot();
  };

  return (
    <>
      <Welcome>
        <Emoji label="Waving hand" symbol="👋" />
        Pew pew <TwitchUserName>@{twitchDisplayName}</TwitchUserName>!
        <button onClick={disconnectBot} type="button">
          Disconnect from Claw Ban Bot
        </button>
      </Welcome>

      <div>
        {banList.map((ban) => (
          <p>{ban.twitch_name}</p>
        ))}
      </div>
    </>
  );
}
