import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlateType = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  items: PlateType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
