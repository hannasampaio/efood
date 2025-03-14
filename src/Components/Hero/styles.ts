import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 384px;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 40px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  width: 539px;
  color: ${cores.vermelha};
  margin-top: 138px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    text-align: center;
    width: 300px;
    margin-top: 50px;
  }
`
