import { restaurantsType } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: restaurantsType[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List className="container">
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        imagem={restaurant.capa}
        categoria={restaurant.tipo}
        destaque={restaurant.destaque}
        nome={restaurant.titulo}
        nota={restaurant.avaliacao}
        info={restaurant.descricao}
      />
    ))}
  </List>
)

export default RestaurantList
