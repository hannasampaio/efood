import * as S from './styles'
import Star from '../../assets/images/estrela.png'

type Props = {
  imagem: string
  nome: string
  nota: string
  info: string
  destaque?: boolean
  categoria: string
  link: string
}

const Product = ({
  imagem,
  nome,
  nota,
  info,
  destaque,
  categoria,
  link
}: Props) => (
  <S.Container>
    <S.Imagem src={imagem} />
    <S.TagContainer destaque={destaque}>
      {destaque ? <S.Tag>Destaque da semana</S.Tag> : ''}
      <S.Tag>{categoria}</S.Tag>
    </S.TagContainer>
    <S.Title>
      <h2>{nome}</h2>
      <span>
        {nota} <img src={Star} alt="Nota do restaurante" />
      </span>
    </S.Title>
    <S.Info>{info}</S.Info>
    <S.Button to={link}>Saiba mais</S.Button>
  </S.Container>
)

export default Product
