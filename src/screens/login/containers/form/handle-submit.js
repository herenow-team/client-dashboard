import {createInvisibleGrecaptcha, execute} from 'invisible-grecaptcha'

const verifyCallback = (values, actions) => token => {
  console.log(token)
  console.log(values)
  console.log(actions)
  // LoginToMyApp(values).then(
  //   user => {
  //     setSubmitting(false);
  //     // do whatevs...
  //     // props.updateUser(user)
  //   },
  //   errors => {
  //     setSubmitting(false);
  //     // Maybe even transform your API's errors into the same shape as Formik's!
  //     setErrors(transformMyApiErrors(errors));
  //   }
  // );
}

export default async function handleSubmit(values, actions) {
  const grecaptchaId = await createInvisibleGrecaptcha({
    sitekey: '6LdLnkMUAAAAAA0e7x8KEw9n7W8MMGpwCMszFBwm',
    locale: 'pt',
    callback: verifyCallback(values, actions)
  })
  execute(grecaptchaId)
}
