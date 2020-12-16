import axios from "axios";

export type GetAuthLinkResponse = string | null;
interface AuthenticateWithTwitchResponse {
  twitchId: string,
  twitchDisplayName: string
}

//https://id.twitch.tv/oauth2/authorize?redirect_uri=#{CLIENT_URL}/login&response_type=code&client_id=$%7BTWITCH_CLIENT_ID%7D&scope=channel:moderate+chat:read+chat:edit+moderation:read


export default class Api {

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
      )
      
      return response.data;  
    } catch (error) {
      console.log(error);
    }

    return null;
  }


  static async authenticateWithTwitch(code: string): Promise<AuthenticateWithTwitchResponse | null> {
    try {
        const response = await axios.post(
          `${this.apiUrl()}authenticate`, {code, redirect_uri: this.clientUrl()}
        )
          
      return response.data;  
    } catch (error) {
      console.log(error);
    }

    return null;
  }

}