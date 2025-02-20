import ProductsList from '../../Components/ProductsList'
import PratosClass from '../../models/Pratos'

import Hioki from '../../assets/images/japonesa.png'
import VitaTrattoria from '../../assets/images/italiana.png'

const Pratos: PratosClass[] = [
  {
    id: 1,
    imagem: Hioki,
    destaque: true,
    categoria: 'Japonesa',
    nome: 'Hioki Sushi',
    nota: '4.9',
    info: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: '/hiokisushi'
  },
  {
    id: 2,
    imagem: VitaTrattoria,
    destaque: false,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 3,
    imagem: VitaTrattoria,
    destaque: false,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 4,
    imagem: VitaTrattoria,
    destaque: false,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 5,
    imagem: VitaTrattoria,
    destaque: false,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  },
  {
    id: 6,
    imagem: VitaTrattoria,
    destaque: false,
    categoria: 'Italiana',
    nome: 'La Dolce Vita Trattoria',
    nota: '4.6',
    info: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolcevita'
  }
]

const Home = () => (
  <>
    <ProductsList pratos={Pratos} />
  </>
)

export default Home
