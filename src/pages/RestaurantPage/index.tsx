import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { restaurantsType } from '../Home'
import Header from '../../Components/Header'
import PlatesList from '../../Components/PlatesList'
import Banner from '../../Components/Banner'

const RestaurantPage = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<restaurantsType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <Header />
      <Banner
        categoria={restaurant.tipo}
        imagem={restaurant.capa}
        nome={restaurant.titulo}
      />
      <PlatesList plates={restaurant.cardapio} />
    </>
  )
}

export default RestaurantPage
