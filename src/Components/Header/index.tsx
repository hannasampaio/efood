import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, TextLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <TextLink to="/">Restaurantes</TextLink>
    <Link to="/">
      <img src={logo} alt="Efood Logo" />
    </Link>
    <p>0 produto(s) no carrinho</p>
  </HeaderContainer>
)

export default Header
