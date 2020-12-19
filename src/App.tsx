import React from "react";
import { Color } from "./styles/color.style";
import LoggedInPage from "./pages/LoggedIn";
import AdminPage from "./pages/Admin";
import MissingWhitelist from "./pages/MissingAllowList";
import LoggedOut from "./pages/LoggedOut";
import useTwitchAuthUrl from "./hooks/useTwitchAuthUrl";
import useTwitchAuth, { TwitchAuthResponse } from "./hooks/useTwitchAuth";
import { Container, GlobalStyle } from "./styles/global.style";

function App(): JSX.Element {
  const backgroundColor = Color.background;
  const twitchAuthUrl = useTwitchAuthUrl();
  const authData: TwitchAuthResponse = useTwitchAuth();

  let content = (
    <LoggedOut isLoading={authData.isLoading} twitchAuthUrl={twitchAuthUrl} />
  );

  if (authData.user) {
    if (authData.user.role == "admin") {
      content = <AdminPage />;
    }
    content = (
      <LoggedInPage twitchDisplayName={authData.user.twitchDisplayName} />
    );
  }

  if (authData.missingWhitelist) {
    content = <MissingWhitelist />;
  }

  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>{content}</Container>
    </>
  );
}

export default App;
