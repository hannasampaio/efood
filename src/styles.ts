import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelha: '#E66767',
  branca: '#FFFFFF',
  bege: '#FFEBD9',
  begeClara: '#FFF8F2',
  preta: '#000'
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
      background-color:${cores.begeClara};
      color: ${cores.vermelha};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 80%;
      }

`
