import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, TextLink } from './styles'

import { openCart } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCar = () => {
    dispatch(openCart())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <TextLink to="/">Restaurantes</TextLink>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <p onClick={openCar}>{items.length} produto(s) no carrinho</p>
      </div>
    </HeaderContainer>
  )
}

export default Header
