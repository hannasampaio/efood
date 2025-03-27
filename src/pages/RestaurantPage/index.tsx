import { useParams } from 'react-router-dom'

import Header from '../../Components/Header'
import PlatesList from '../../Components/PlatesList'
import Banner from '../../Components/Banner'
import Loader from '../../Components/Loader'

import { useGetRestaurantByIdQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantByIdQuery(id)

  if (!restaurant) {
    return (
      <>
        <Header />
        <Loader />
      </>
    )
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
