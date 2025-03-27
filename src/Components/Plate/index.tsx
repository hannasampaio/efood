import * as S from './styles'

type Props = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  onClick: () => void
}

const Plate = ({ foto, nome, descricao, onClick }: Props) => {
  const getDishDescription = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + '...'
    }
  }

  return (
    <>
      <S.PizzaContainer>
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{getDishDescription(descricao)}</p>
        <S.Button onClick={onClick}>Adicionar ao carrinho</S.Button>
      </S.PizzaContainer>
    </>
  )
}

export default Plate
