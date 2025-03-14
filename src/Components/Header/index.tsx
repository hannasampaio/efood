import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, TextLink } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <TextLink to="/">Restaurantes</TextLink>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
      </div>
    </HeaderContainer>
  )
}

export default Header
