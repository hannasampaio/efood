import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Components/Hero'
import { GlobalCss } from './styles'
import ProductsList from './Components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Hero />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
