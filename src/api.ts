import axios from "axios";

export type GetAuthLinkResponse = string | null;

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


  // static authenticateTwitchUser = async (
  //   id: string,
  // ): Promise<GameByIdResponse | null> => {
  //   const accessTokenData = await accessTokenUtil.get();
  //   if (!accessTokenData) return null;

  //   const response = await axios.get(
  //     `https://api.twitch.tv/helix/games?id=${id}`,
  //     {
  //       headers: {
  //         accept: "application/vnd.twitchtv.v5+json",
  //         "client-id": process.env.CLIENT_ID,
  //         authorization: `Bearer ${accessTokenData.accessToken}`,
  //       },
  //     },
  //   );

  //   return response.data.data[0];
  // };


}