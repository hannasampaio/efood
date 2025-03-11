import { useEffect, useState } from 'react'

import Hero from '../../Components/Hero'
import RestaurantList from '../../Components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export type restaurantsType = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

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

  return <h4>Carregando</h4>
}

export default Home
