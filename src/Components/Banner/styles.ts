import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  imagem: string
}

export const ItalianaBanner = styled.div<Props>`
  position: relative;
  height: 280px;
  margin-bottom: 56px;
  background-image: url(${(props) => props.imagem});
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
