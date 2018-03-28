import axios from 'axios'
import InvalidCaptcha from '../errors/invalid-captcha'
import RequiredFieldError from '../errors/required-field'
import InvalidFieldError from '../errors/invalid-field'
import TooLongFieldError from '../errors/too-long-field'
import InvalidFieldFormatError from '../errors/invalid-field-format'
import InvalidCredentialsError from '../errors/invalid-credentials'
import UnverifiedAccountError from '../errors/unverified-account'

export default function requestToken(params) {
  return axios
    .post(process.env.BASE_URL + '/v1/auth/identity', params)
    .then(response => response.data)
    .catch(err => {
      const hasResponse = Boolean(err.response)
      const isResponseError =
        err.response.status === 422 || err.response.status === 401

      if (hasResponse && isResponseError) {
        const error = err.response.data.errors[0]

        if (error.code === 101) {
          throw new InvalidCaptcha()
        }
        if (error.code === 104) {
          throw new RequiredFieldError(error.field)
        }
        if (error.code === 102) {
          throw new InvalidFieldError(error.field)
        }
        if (error.code === 103) {
          throw new TooLongFieldError(error.field)
        }
        if (error.code === 106) {
          throw new InvalidFieldFormatError(error.field)
        }
        if (error.code === 301) {
          throw new InvalidCredentialsError()
        }
        if (error.code === 302) {
          throw new UnverifiedAccountError()
        }
      }

      throw err
    })
}
