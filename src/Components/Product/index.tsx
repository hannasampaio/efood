import * as S from './styles'
import Star from '../../assets/images/estrela.png'

const Product = () => (
  <S.Container>
    <S.Imagem src="" />
    <S.TagContainer>
      <S.Tag>Destaque da semana</S.Tag>
      <S.Tag>categoria</S.Tag>
    </S.TagContainer>
    <S.Title>
      <h2>Nome da comida</h2>
      <span>
        nota <img src={Star} alt="Nota do restaurante" />
      </span>
    </S.Title>
    <S.Info>descrição</S.Info>
    <S.Button>Saiba mais</S.Button>
  </S.Container>
)

export default Product
