import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { restaurantsType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<restaurantsType[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<restaurantsType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api

export default api
