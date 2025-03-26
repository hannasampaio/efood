import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './Components/Footer'
import { store } from './store'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Payment from './Components/Payment'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
        <Payment />
      </BrowserRouter>
    </Provider>
  )
}

export default App
