import styled, { createGlobalStyle } from 'styled-components'
import { Font } from './font.style'
import { Layout } from './layout.style'
import { Color } from './color.style'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family-main: ${Font.family.main};
    --font-family-heading: ${Font.family.heading};
    --font-weight-bold: ${Font.weight.bold};
    --font-weight-normal: ${Font.weight.normal};

    --color-background: ${Color.background};
    --color-foreground: ${Color.foreground};

    --color-red: ${Color.palette.red};
    --color-redDark: ${Color.palette.redDark};
    --color-green: ${Color.palette.green};
    --color-black: ${Color.palette.black};
    --color-white: ${Color.palette.white};
    --color-offwhite: ${Color.palette.offwhite};
    --color-yellow: ${Color.palette.yellow};
    --color-twitch: ${Color.palette.twitch};
    --color-twitchDark: ${Color.palette.twitchDark};
  }

  body {
    margin: 0;
    font-size: ${Font.baseSize}px;
    font-family: var(--font-family-main);
    background-color: ${Color.background};
    color: ${Color.foreground};
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }
`

const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: ${Layout.maxWidth.main}px;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
`


export { GlobalStyle, Container }