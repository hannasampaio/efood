import styled from 'styled-components'
import { colors } from '../../styles'

export const PizzaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  width: 320px;
  height: 338px;
  background-color: ${colors.red};
  color: ${colors.beige};

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 14px;
  height: 24px;
  color: ${colors.red};
  background-color: ${colors.beige};
`
