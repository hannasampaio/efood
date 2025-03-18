import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlateType = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Product = {
  id: number
  price: number
}

type clientAddres = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}

type CartState = {
  items: PlateType[]
  clientAddress: clientAddres
  cartIsOpen: boolean
  addressOpen: boolean
}

const initialState: CartState = {
  items: [],
  clientAddress: {
    products: [],
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  },
  cartIsOpen: false,
  addressOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PlateType>) => {
      const plate = state.items.find((item) => item.id === action.payload.id)

      if (!plate) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload)
    },
    openCart: (state) => {
      state.cartIsOpen = true
    },
    closeCart: (state) => {
      state.cartIsOpen = false
    },
    openAddress: (state) => {
      state.addressOpen = true
    },

    closeAddress: (state) => {
      state.addressOpen = false
    },
    addAddressInfos: (state, action: PayloadAction<clientAddres>) => {
      state.clientAddress = action.payload
      console.log(state.clientAddress)
    }
  }
})

export const {
  add,
  remove,
  openCart,
  closeCart,
  openAddress,
  closeAddress,
  addAddressInfos
} = cartSlice.actions
export default cartSlice.reducer
