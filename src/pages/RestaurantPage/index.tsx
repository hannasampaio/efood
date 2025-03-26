import { useParams } from 'react-router-dom'

import Header from '../../Components/Header'
import PlatesList from '../../Components/PlatesList'
import Banner from '../../Components/Banner'

import { useGetRestaurantByIdQuery } from '../../services/api'

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantByIdQuery(id!)

  if (!restaurant) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <Header />
      <Banner
        category={restaurant.tipo}
        image={restaurant.capa}
        name={restaurant.titulo}
      />
      <PlatesList plates={restaurant.cardapio} />
    </>
  )
}

export default RestaurantPage
