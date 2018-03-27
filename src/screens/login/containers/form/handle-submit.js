import {createInvisibleGrecaptcha, execute} from 'invisible-grecaptcha'
import wretch from 'wretch'
import history from '../../../../core/history'

const verifyCallback = (values, {setSubmitting}) => captcha => {
  wretch(process.env.BASE_URL + '/v1/auth/identity')
    .options({mode: 'cors'})
    .json({...values, captcha})
    .post()
    .json(({token}) => {
      window.sessionStorage.setItem('token', token)
      setSubmitting(false)
      history.push('/')
    })
    .catch(err => {
      setSubmitting(false)

      console.error(err)
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
