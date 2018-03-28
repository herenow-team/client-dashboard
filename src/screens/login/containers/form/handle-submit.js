import axios from 'axios'
import {createInvisibleGrecaptcha, execute} from 'invisible-grecaptcha'
import history from '../../../../core/history'

const verifyCallback = (values, {setSubmitting, setFieldError}) => captcha => {
  axios
    .post(process.env.BASE_URL + '/v1/auth/identity', {...values, captcha})
    .then(response => {
      const token = response.data.token
      window.sessionStorage.setItem('token', token)
      setSubmitting(false)
      history.push('/')
    })
    .catch(err => {
      setSubmitting(false)
      if (err.response.status === 422) {
        if (err.response.data.code === 100) {
          const error = err.response.data.errors[0]
          if (error.code === 101) {
            console.log('Captcha inválido')
          } else if (error.code === 104) {
            setFieldError(error.field, 'Campo obrigatório')
          } else if (error.code === 102) {
            setFieldError(error.field, 'Campo inválido')
          } else if (error.code === 103) {
            setFieldError(error.field, 'Campo é muito longo.')
          } else if (error.code === 106) {
            setFieldError(error.field, 'Campo está em um formato inválido.')
          }
        }
      } else if (err.response.status === 401) {
        if (err.response.data.code === 300) {
          const error = err.response.data.errors[0]

          if (error.code === 301) {
            setFieldError('email', 'Login ou senha inválidos.')
          } else if (error.code === 302) {
            setFieldError(
              'email',
              'Conta não foi verificada. Tenha certeza de verificar a sua conta antes de continuar.'
            )
          }
        }
      } else {
        console.error(err)

        console.log('Algo deu errado. Tente novamente mais tarde.')
      }
    })
}

export default async function handleSubmit(values, actions) {
  const grecaptchaId = await createInvisibleGrecaptcha({
    sitekey: process.env.RECAPTCHA_KEY,
    locale: 'pt',
    callback: verifyCallback(values, actions)
  })
  execute(grecaptchaId)
}
