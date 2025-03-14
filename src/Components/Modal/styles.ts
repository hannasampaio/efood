import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'
import { Button as BaseButton } from '../Plate/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  background-color: ${cores.vermelha};
  color: ${cores.branca};
  width: 1024px;
  height: 344px;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    height: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    height: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
  padding: 0;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin: 0 24px;
  object-fit: cover;

  @media (max-width: ${breakpoints.desktop}) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 180px;
    height: 330px;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  width: 656px;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
    font-size: 13px;
    line-height: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    font-size: 12px;
    line-height: 18px;
    text-align: justify;
  }
`

export const ModalButton = styled(BaseButton)`
  width: 218px;
  height: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 36px;
    width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
    width: 170px;
    height: 40px;
  }
`
