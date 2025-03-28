import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeCart, openAddress, remove } from '../../store/reducers/cart'

import * as S from './styles'

import { parseToBrl, getTotalPrice } from '../../utils'

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCartSidebar = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const continueToAddress = () => {
    dispatch(openAddress())
    dispatch(closeCart())
  }

  return (
    <S.CartContainer className={cartIsOpen ? 'cart-is-open' : ''}>
      <S.Overlay onClick={closeCartSidebar} />
      <S.Sidebar>
        {items.length === 0 ? (
          <S.EmptyCartMessage>O carrinho está vazio!</S.EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{parseToBrl(getTotalPrice(items))}</span>
            </S.Prices>
            <S.CheckoutButton
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={continueToAddress}
            >
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
