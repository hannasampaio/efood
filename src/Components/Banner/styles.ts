import styled from 'styled-components'
import restaurant from '../../assets/images/italiana.png'
import { cores } from '../../styles'

const textBaseStyle = `
  color: ${cores.branca};
  margin-left: 170px;
`

export const ItalianaBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  height: 280px;
  margin-bottom: 56px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${restaurant});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`

export const CategoriaPrato = styled.span`
  ${textBaseStyle};
  font-weight: 100; /* Corrigido o erro de digitação */
  font-size: 32px;
`

export const NomeRestaurante = styled.h1`
  ${textBaseStyle};
`
