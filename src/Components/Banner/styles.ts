import styled from 'styled-components'
import restaurant from '../../assets/images/italiana.png'
import { cores } from '../../styles'

export const ItalianaBanner = styled.div`
  position: relative;
  height: 280px;
  margin-bottom: 56px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${restaurant});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;
    height: 100%;
    color: ${cores.branca};
  }
`

export const CategoriaPrato = styled.span`
  font-weight: 100;
  font-size: 32px;
  margin-top: 24px;
`

export const NomeRestaurante = styled.h1`
  margin-bottom: 32px;
`
