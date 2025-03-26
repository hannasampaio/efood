import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { RootReducer } from '../../store'
import {
  closeAddress,
  openCart,
  addAddressInfos,
  openPayment
} from '../../store/reducers/cart'

import { getTotalPrice } from '../../utils'

import { Sidebar, CheckoutButton, Overlay } from '../Cart/styles'
import * as S from './styles'

const Checkout = () => {
  const { addressOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const backToCart = () => {
    dispatch(openCart())
    dispatch(closeAddress())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .max(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .max(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        addAddressInfos({
          products: items.map((item) => ({
            id: item.id,
            price: totalPrice
          })),

          delivery: {
            receiver: values.fullName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.houseNumber),
              complement: values.complement
            }
          }
        })
      )
      dispatch(openPayment())
      dispatch(closeAddress())
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const handleGoToPayment = () => {
    form.handleSubmit()
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={addressOpen ? 'address-is-open' : ''}>
        <Overlay />
        <Sidebar>
          <h3>Entrega</h3>
          <S.Row>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </S.Row>
          <S.Row>
            <label htmlFor="address">Endereço</label>
            <input
              name="address"
              id="address"
              type="text"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.Row>
          <S.Row>
            <label htmlFor="city">Cidade</label>
            <input
              name="city"
              id="city"
              type="text"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.Row>
          <S.Row className="mid-size">
            <div>
              <label htmlFor="zipCode">CEP</label>
              <input
                name="zipCode"
                id="zipCode"
                type="text"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('zipCode') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="houseNumber">Número</label>
              <input
                name="houseNumber"
                id="houseNumber"
                type="text"
                value={form.values.houseNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('houseNumber') ? 'error' : ''}
              />
            </div>
          </S.Row>
          <S.Row>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              name="complement"
              id="complement"
              type="text"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.Row>
          <CheckoutButton
            title="Continuar com a compra"
            type="submit"
            className="continueToPayment"
            onClick={handleGoToPayment}
          >
            Continuar com o pagamento
          </CheckoutButton>
          <CheckoutButton
            title="Voltar para o carrinho"
            type="button"
            onClick={backToCart}
          >
            Voltar para o carrinho
          </CheckoutButton>
        </Sidebar>
      </S.Container>
    </form>
  )
}

export default Checkout
