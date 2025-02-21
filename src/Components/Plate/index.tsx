import Pizza from '../../assets/images/pizza.png'
import { Button, PizzaContainer } from './styles'

const Plates = () => (
  <PizzaContainer>
    <img src={Pizza} alt="Pizza" />
    <h2>Pizza Marguerita</h2>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <Button>Adicionar ao carrinho</Button>
  </PizzaContainer>
)

export default Plates
