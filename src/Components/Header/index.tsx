import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

import { openCart } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCartHandler = () => {
    dispatch(openCart())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.TextLink to="/">Restaurantes</S.TextLink>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <p onClick={openCartHandler}>
          {items.length} produto{items.length !== 1 ? 's' : ''} no carrinho
        </p>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
