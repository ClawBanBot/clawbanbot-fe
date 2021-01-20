import { AxiosError } from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Api from "../api";
import jwt from "jsonwebtoken";

interface User {
  twitchDisplayName: string;
  role: "user" | "admin";
}

export interface TwitchAuthResponse {
  user: User;
  missingWhitelist: boolean;
  isLoading: boolean;
}

export default function useTwitchAuth(): TwitchAuthResponse {
  const [userInfo, setUserInfo] = useState<any>(
    sessionStorage.getItem("token")
      ? jwt.decode(sessionStorage.getItem("token") || "")
      : ""
  ); // This is actually a User, but we can't cast it 😢
  const [missingWhitelist, setMissingWhitelist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { code }: any = queryString.parse(window.location.search) || "";
    if (code) {
      setIsLoading(true);
      window.history.replaceState({}, "", "/");
      Api.authenticateWithTwitch(code)
        .then((response) => {
          setUserInfo(jwt.decode(response));
        })
        .catch((response: AxiosError) => {
          if (response.response?.status === 403) {
            setMissingWhitelist(true);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  return {
    user: userInfo,
    missingWhitelist,
    isLoading,
  };
}
