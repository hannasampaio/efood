import { createGlobalStyle } from 'styled-components'

const cores = {
  vermelho: '#E66767',
  branco: '#FFFFFF',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: O;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }

    body {
      background-color:${cores.begeClaro};
      color: ${cores.vermelho};
    }
`
