import { ItalianaBanner, NomeRestaurante, CategoriaPrato } from './styles'

type Props = {
  categoria: string
  nome: string
  imagem: string
}

const Banner = ({ categoria, nome, imagem }: Props) => (
  <ItalianaBanner imagem={imagem}>
    <div className="container">
      <CategoriaPrato>{categoria}</CategoriaPrato>
      <NomeRestaurante>{nome}</NomeRestaurante>
    </div>
  </ItalianaBanner>
)

export default Banner
