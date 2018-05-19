export default function validate(values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Insira seu endereço de e-mail da HereNow.'
  } else if (!values.email.includes('@') || values.email.length > 254) {
    errors.email = 'Endereço de email inválido'
  }

  if (!values.password) {
    errors.password = 'Por favor, insira sua senha.'
  }

  return errors
}
