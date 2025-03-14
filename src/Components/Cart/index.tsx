import { useDispatch, useSelector } from 'react-redux'
import { formataPreco } from '../../utils'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  CheckoutButton,
  EmptyCartMessage
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? (
          <EmptyCartMessage>O carrinho está vazio!</EmptyCartMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total <span>{formataPreco(getTotalPrice())}</span>
            </Prices>
            <CheckoutButton
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              Continuar com a entrega
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
