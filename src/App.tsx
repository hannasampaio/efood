import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Components/Hero'
import { GlobalCss } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
