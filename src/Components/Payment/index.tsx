import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import {
  openAddress,
  closePayment,
  clear,
  addCardInfos
} from '../../store/reducers/cart'

import { parseToBrl, getTotalPrice } from '../../utils'

import { Sidebar, CheckoutButton, Overlay } from '../Cart/styles'

import * as S from './styles'

const Payment = () => {
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { paymentOpen, items, clientAddress } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const backToPayment = () => {
    dispatch(openAddress())
    dispatch(closePayment())
  }

  const endPurchase = () => {
    dispatch(clear())
    dispatch(closePayment())
  }

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().min(5).required(),
      cardNumber: Yup.string().min(19).max(19).required(),
      cardCode: Yup.string().min(3).max(3).required(),
      expiresMonth: Yup.string().min(2).max(2).required(),
      expiresYear: Yup.string().min(2).max(2).required()
    }),
    onSubmit: (values) => {
      purchase({
        products: clientAddress.products,
        delivery: clientAddress.delivery,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })

      dispatch(
        addCardInfos({
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        })
      )
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const Error = isInvalid && isTouched

    return Error
  }

  const handleSendTicket = () => {
    form.handleSubmit()
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={paymentOpen ? 'payment-is-open' : ''}>
        <Overlay />
        <Sidebar>
          {isSuccess && data ? (
            <>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <CheckoutButton
                title="Concluir compra"
                type="button"
                onClick={endPurchase}
              >
                Concluir
              </CheckoutButton>
            </>
          ) : (
            <>
              <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
              <S.Row>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  name="cardName"
                  id="cardName"
                  type="text"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </S.Row>
              <S.Row className="mid-size">
                <div>
                  <label htmlFor="cardNumber">Número no cartão</label>
                  <InputMask
                    name="cardNumber"
                    id="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    name="cardCode"
                    id="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </div>
              </S.Row>
              <S.Row className="mid-size">
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    name="expiresMonth"
                    id="expiresMonth"
                    type="text"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    name="expiresYear"
                    id="expiresYear"
                    type="text"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </div>
              </S.Row>
              <CheckoutButton
                onClick={handleSendTicket}
                disabled={isLoading}
                title="Continuar com a compra"
                type="submit"
                className="payment-button"
              >
                {isLoading
                  ? 'Finalizando pagamento...'
                  : ' Finalizar pagamento'}
              </CheckoutButton>
              <CheckoutButton
                title="Voltar para o carrinho"
                type="button"
                onClick={backToPayment}
              >
                Voltar para a edição de endereço
              </CheckoutButton>
            </>
          )}
        </Sidebar>
      </S.Container>
    </form>
  )
}

export default Payment
