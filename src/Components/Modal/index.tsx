import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

import botaoFechar from '../../assets/images/fechar.png'
import { modalType } from '../PlatesList'
import { ModalButton } from './styles'

interface Props extends modalType {
  setModal: Dispatch<SetStateAction<modalType>>
}

const Modal = ({
  descricao,
  foto,
  nome,
  porcao,
  preco,
  visivel,
  setModal
}: Props) => {
  const formataPreco = (number = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)
  }

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

  return (
    <S.Modal className={visivel ? 'visible' : ''}>
      <S.ModalContent>
        <S.CloseButton onClick={fecharModal}>
          <img src={botaoFechar} alt="botão fechar" />
        </S.CloseButton>
        <S.Image src={foto} alt="Nome do prato" />
        <S.Content>
          <S.Title>{nome}</S.Title>
          <S.Description>
            {descricao} <br /> <br />
            Serve: de {porcao}
          </S.Description>
          <ModalButton>
            Adicionar ao carrinho - {formataPreco(preco)}
          </ModalButton>
        </S.Content>
      </S.ModalContent>
      <div onClick={fecharModal} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
