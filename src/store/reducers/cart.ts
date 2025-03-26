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

type clientCard = {
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type CartState = {
  items: PlateType[]
  clientAddress: clientAddres
  clientCard: clientCard
  cartIsOpen: boolean
  addressOpen: boolean
  paymentOpen: boolean
  thanksOpen: boolean
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
  clientCard: {
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  },
  cartIsOpen: false,
  addressOpen: false,
  paymentOpen: false,
  thanksOpen: false
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
    clear: (state) => {
      state.items = []
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
    openPayment: (state) => {
      state.paymentOpen = true
    },
    closePayment: (state) => {
      state.paymentOpen = false
    },
    addAddressInfos: (state, action: PayloadAction<clientAddres>) => {
      state.clientAddress = action.payload
      console.log(state.clientAddress)
    },
    addCardInfos: (state, action: PayloadAction<clientCard>) => {
      state.clientCard = action.payload
    }
  }
})

export const {
  add,
  remove,
  clear,
  openCart,
  closeCart,
  openAddress,
  closeAddress,
  openPayment,
  closePayment,
  addAddressInfos,
  addCardInfos
} = cartSlice.actions
export default cartSlice.reducer
