import { useEffect, useState } from "react";
import Api, { GetAuthLinkResponse } from "../api";

export default function useTwitchAuthUrl() {
  const [twitchAuthUrl, setTwitchAuthUrl] = useState<GetAuthLinkResponse>(null);
  useEffect(() => {
    Api.getTwitchAuthUrl().then((url) => setTwitchAuthUrl(url));
  });
  return twitchAuthUrl;
}
