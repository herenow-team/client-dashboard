import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'bulma-ui'
import Recaptcha from 'react-recaptcha'
import Field from '../../../../components/ui/field'
import Message from '../../../../components/ui/message'

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  status,
  setFieldValue
}) => (
  <form onSubmit={handleSubmit}>
    {status.message && <Message {...status.message} />}
    <Field
      type="email"
      name="email"
      label={false}
      isSuccess={touched.email && !errors.email}
      isDanger={touched.email && Boolean(errors.email)}
      errorMessage={errors.email}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      placeholder="Digite seu e-mail"
    />
    <Field
      type="password"
      name="password"
      label={false}
      isSuccess={touched.password && !errors.password}
      isDanger={touched.password && Boolean(errors.password)}
      errorMessage={errors.password}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      placeholder="Digite a Senha"
    />
    <Recaptcha
      sitekey={process.env.RECAPTCHA_KEY}
      verifyCallback={captcha => {
        setFieldValue('captcha', captcha)
      }}
    />
    <Button
      type="submit"
      color="success"
      size="medium"
      isFullWidth
      isOutlined
      isRounded
      state={isSubmitting ? 'loading' : 'normal'}
    >
      Entrar
    </Button>
  </form>
)

InnerForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    captcha: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  status: PropTypes.shape({
    message: PropTypes.shape({
      text: PropTypes.string,
      isDanger: PropTypes.bool,
      isInfo: PropTypes.bool
    })
  }),
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

InnerForm.defaultProps = {
  touched: {
    email: false,
    password: false
  },
  errors: {
    email: null,
    password: null
  },
  status: {
    message: null
  }
}

export default InnerForm
