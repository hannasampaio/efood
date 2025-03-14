import styled from 'styled-components'
import { cores } from '../../styles'

import trash from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preta};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelha};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export const Prices = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  color: ${cores.bege};
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  position: relative;
  width: 100%;
  max-width: 344px;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    background-image: url(${trash});
    right: 16px;
    top: 70px;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  border: none;
  cursor: pointer;
`

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${cores.branca};
  margin-top: 20px;
`
