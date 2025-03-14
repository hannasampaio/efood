import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 180px;
  font-size: 18px;
  font-weight: 900;
  background-image: url(${fundo});
  background-size: cover;
  color: ${cores.vermelha};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;

    div {
      flex-direction: column;
      gap: 20px;
    }
  }
`

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelha};

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
