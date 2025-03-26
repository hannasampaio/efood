import * as S from './styles'
import Star from '../../assets/images/estrela.png'

type Props = {
  id: number
  image: string
  nome: string
  nota: number
  info: string
  destaque: boolean
  category: string
}

const Restaurant = ({
  id,
  image,
  nome,
  nota,
  info,
  destaque,
  category
}: Props) => {
  const returnRestaurantInfo = (text: string) => {
    if (text.length > 183) {
      return text.slice(0, 180) + '...'
    }

    return text
  }

  return (
    <S.Container>
      <S.Image src={image} alt={nome} />
      <S.TagContainer destaque={destaque}>
        {destaque ? <S.Tag>Destaque da semana</S.Tag> : ''}
        <S.Tag>{category}</S.Tag>
      </S.TagContainer>
      <S.Title>
        <h2>{nome}</h2>
        <span>
          {nota} <img src={Star} alt="Nota do restaurante" />
        </span>
      </S.Title>
      <S.Info>{returnRestaurantInfo(info)}</S.Info>
      <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>
    </S.Container>
  )
}

export default Restaurant
