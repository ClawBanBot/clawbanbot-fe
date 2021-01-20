import axios from "axios";

export type GetAuthLinkResponse = string | null;

type TwitchBan = {
  twitch_id: string;
  twitch_name: string;
};

export type TwitchBanListResponse = TwitchBan[];
export interface AuthenticateWithTwitchResponse {
  twitchDisplayName: string;
  role: "admin" | "user";
  sub: string;
}

export default class Api {
  static jwt: string = sessionStorage.getItem("token") || "";

  static apiUrl(): string {
    return process.env.REACT_APP_API_URL || "notConnected";
  }

  static clientUrl(): string {
    return process.env.REACT_APP_CLIENT_URL || "notConnected";
  }

  static async getTwitchAuthUrl(): Promise<GetAuthLinkResponse> {
    try {
      const response = await axios.get(
        `${this.apiUrl()}auth_link?return_url=${this.clientUrl()}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  static async authenticateWithTwitch(code: string): Promise<string> {
    try {
      const response = await axios.post(`${this.apiUrl()}authenticate`, {
        code,
        redirect_uri: this.clientUrl(),
      });

      this.jwt = response.data;
      sessionStorage.setItem("token", this.jwt);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getTwitchBanList(): Promise<TwitchBanListResponse | []> {
    try {
      const response = await axios.get(`${this.apiUrl()}ban_list`, {
        headers: { authorization: this.jwt },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static disconnectBot() {
    sessionStorage.removeItem("token");
    this.jwt = "";
  }
}
