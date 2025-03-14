import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import botaoFechar from '../../assets/images/fechar.png'
import { modalType } from '../PlatesList'
import { ModalButton } from './styles'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

interface Props extends modalType {
  setModal: Dispatch<SetStateAction<modalType>>
}

const Modal = ({
  id,
  descricao,
  foto,
  nome,
  porcao,
  preco,
  visivel,
  setModal
}: Props) => {
  const dispatch = useDispatch()

  const fecharModal = () => {
    setModal({
      id: 0,
      descricao: '',
      foto: '',
      nome: '',
      porcao: '',
      preco: 0,
      visivel: false
    })
  }

  const addToCart = () => {
    const plate = { id, nome, descricao, foto, porcao, preco }

    dispatch(add(plate))
    dispatch(open())
  }

  return (
    <S.Modal className={visivel ? 'visible' : ''}>
      <S.ModalContent>
        <S.CloseButton onClick={fecharModal}>
          <img src={botaoFechar} alt="botão fechar" />
        </S.CloseButton>
        <S.Image src={foto} alt={nome} />
        <S.Content>
          <S.Title>{nome}</S.Title>
          <S.Description>
            {descricao} <br /> <br />
            Serve: {porcao}
          </S.Description>
          <ModalButton
            title="Clique aqui para adicionar ao carrinho"
            onClick={addToCart}
          >
            Adicionar ao carrinho - {formataPreco(preco)}
          </ModalButton>
        </S.Content>
      </S.ModalContent>
      <div onClick={fecharModal} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
