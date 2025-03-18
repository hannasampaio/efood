import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeAddress, openCart } from '../../store/reducers/cart'

import { Sidebar, CheckoutButton, Overlay } from '../Cart/styles'
import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const { addressOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

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
      console.log(values)
    }
  })

  const getErrorMessage = (fieldname: string, message?: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors

    if (isInvalid && isTouched) return message
    return ''
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
            />
            <small className="error-message">
              {getErrorMessage('fullName', form.errors.fullName)}
            </small>
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
            />
            <small className="error-message">
              {getErrorMessage('address', form.errors.address)}
            </small>
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
            />
            <small className="error-message">
              {getErrorMessage('city', form.errors.city)}
            </small>
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
              />
              <small className="error-message">
                {getErrorMessage('zipCode', form.errors.zipCode)}
              </small>
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
              />
              <small className="error-message">
                {getErrorMessage('houseNumber', form.errors.houseNumber)}
              </small>
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
            />
            <small className="error-message">
              {getErrorMessage('complement', form.errors.complement)}
            </small>
          </S.Row>
          <CheckoutButton
            title="Continuar com a compra"
            type="submit"
            className="continueToPayment"
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
