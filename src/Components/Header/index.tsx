import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, TextLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <TextLink to="/">Restaurantes</TextLink>
      <Link to="/">
        <img src={logo} alt="Efood Logo" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderContainer>
)

export default Header
