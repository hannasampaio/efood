import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'

import { add, openCart } from '../../store/reducers/cart'

import { modalType } from '../PlatesList'
import { ModalButton } from './styles'

import closeButton from '../../assets/images/fechar.png'

import { parseToBrl } from '../../utils'

import * as S from './styles'

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

  const closeModal = () => {
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
    const plate = { id, descricao, foto, nome, porcao, preco }

    dispatch(add(plate))
    dispatch(openCart())
    closeModal()
  }

  return (
    <S.Modal className={visivel ? 'visible' : ''} key={id}>
      <S.ModalContent>
        <S.CloseButton onClick={closeModal}>
          <img src={closeButton} alt="botão fechar" />
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
            Adicionar ao carrinho - {parseToBrl(preco)}
          </ModalButton>
        </S.Content>
      </S.ModalContent>
      <div onClick={closeModal} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
