import {createInvisibleGrecaptcha, execute} from 'invisible-grecaptcha'
import history from '../../../../core/history'
import {setToken} from '../../../../core/token'
import requestToken from '../../services/request-token'
import InvalidCaptcha from '../../errors/invalid-captcha'
import RequiredFieldError from '../../errors/required-field'
import InvalidFieldError from '../../errors/invalid-field'
import TooLongFieldError from '../../errors/too-long-field'
import InvalidFieldFormatError from '../../errors/invalid-field-format'
import InvalidCredentialsError from '../../errors/invalid-credentials'
import UnverifiedAccountError from '../../errors/unverified-account'

const verifyCallback = (
  values,
  {setSubmitting, setFieldError, setFieldValue, setFieldTouched, setStatus}
) => async captcha => {
  setSubmitting(false)
  setStatus(undefined)

  try {
    const {token} = await requestToken({...values, captcha})
    setToken(token)
    history.push('/')
  } catch (err) {
    if (err instanceof InvalidCaptcha) {
      setStatus({message: 'Captcha inválido'})
      return
    }

    if (err instanceof RequiredFieldError) {
      setFieldError(err.field, 'Campo obrigatório')
      return
    }

    if (err instanceof InvalidFieldError) {
      setFieldError(err.field, 'Campo inválido')
      return
    }

    if (err instanceof TooLongFieldError) {
      setFieldError(err.field, 'Campo é muito longo.')
      return
    }

    if (err instanceof InvalidFieldFormatError) {
      setFieldError(err.field, 'Campo está em um formato inválido.')
      return
    }

    if (err instanceof InvalidCredentialsError) {
      setFieldValue('password', '')
      setFieldTouched('password', false, false)
      setFieldError('email', 'Login ou senha inválidos.')
      return
    }

    if (err instanceof UnverifiedAccountError) {
      setStatus({
        message: {
          text:
            'Conta não foi verificada. Tenha certeza de verificar a sua conta antes de continuar.',
          isDanger: false,
          isInfo: true
        }
      })
      return
    }

    setStatus({
      message: {
        text: 'Algo deu errado. Tente novamente mais tarde.',
        isDanger: true,
        isInfo: false
      }
    })
  }
}

export default async function handleSubmit(values, actions) {
  const grecaptchaId = await createInvisibleGrecaptcha({
    sitekey: process.env.RECAPTCHA_KEY,
    locale: 'pt',
    callback: verifyCallback(values, actions)
  })
  execute(grecaptchaId)
}
