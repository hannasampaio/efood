import pizza from '../../assets/images/pizza.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  CheckoutButton
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        Valor total <span>R$182,70</span>
      </Prices>
      <CheckoutButton
        title="Clique aqui para continuar com a entrega"
        type="button"
      >
        Continuar com a entrega
      </CheckoutButton>
    </Sidebar>
  </CartContainer>
)

export default Cart
