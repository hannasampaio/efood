import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFFFFF',
  beige: '#FFEBD9',
  lightbeige: '#FFF8F2',
  black: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: O;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    }

    body {
      background-color:${colors.lightbeige};
      color: ${colors.red};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 80%;
      }

`
