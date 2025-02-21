import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 298px;
  background-color: ${cores.bege};
  padding: 40px 0;

  .logo {
    margin-top: 80px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  ul {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
`

export const FooterText = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  max-width: 480px;
  color: ${cores.vermelha};
  margin: 80px 0;
`
