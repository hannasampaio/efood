import * as S from './styles'

type Props = {
  category: string
  name: string
  image: string
}

const Banner = ({ category, name, image }: Props) => (
  <S.ItalianBanner image={image}>
    <div className="container">
      <S.DishCategory>{category}</S.DishCategory>
      <S.RestaurantName>{name}</S.RestaurantName>
    </div>
  </S.ItalianBanner>
)

export default Banner
