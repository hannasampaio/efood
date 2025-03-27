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
        image={restaurant.capa}
        category={restaurant.tipo}
        destaque={restaurant.destaque}
        name={restaurant.titulo}
        nota={restaurant.avaliacao}
        info={restaurant.descricao}
      />
    ))}
  </List>
)

export default RestaurantList
