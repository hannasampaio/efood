import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  image: string
}

export const ItalianBanner = styled.div<Props>`
  position: relative;
  height: 280px;
  margin-bottom: 56px;
  background-image: url(${(props) => props.image});
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
    color: ${colors.white};
  }
`

export const DishCategory = styled.span`
  font-weight: 100;
  font-size: 32px;
  margin-top: 24px;
`

export const RestaurantName = styled.h1`
  margin-bottom: 32px;
`
