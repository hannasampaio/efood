import Pratos from '../../models/Pratos'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  pratos: Pratos[]
}

const ProductsList = ({ pratos }: Props) => (
  <List className="container">
    {pratos.map((pratos) => (
      <Product
        key={pratos.id}
        imagem={pratos.imagem}
        categoria={pratos.categoria}
        destaque={pratos.destaque}
        nome={pratos.nome}
        nota={pratos.nota}
        info={pratos.info}
        link={pratos.link}
      />
    ))}
  </List>
)

export default ProductsList
