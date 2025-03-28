import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.address-is-open {
    display: flex;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.beige};
    margin-bottom: 16px;
  }

  .continueToPayment {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .error {
    border: 3px solid red;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.beige};
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    margin-bottom: 8px;
    font-weight: bold;
    color: black;
    border: 2px solid ${colors.beige};
    background-color: ${colors.beige};
  }

  &.mid-size {
    display: flex;
    flex-direction: row;

    div {
      margin-right: 34px;

      input {
        width: 155px;
        margin-top: 8px;

        @media (max-width: ${breakpoints.tablet}) {
          width: 124px;
        }
      }
    }
  }
`
