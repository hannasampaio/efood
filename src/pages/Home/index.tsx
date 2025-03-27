import Hero from '../../Components/Hero'
import Loader from '../../Components/Loader'
import RestaurantList from '../../Components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }

  return (
    <>
      <Hero />
      <Loader />
    </>
  )
}

export default Home
