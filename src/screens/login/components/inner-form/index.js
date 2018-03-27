import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../components/ui/button'
import Field from '../../../../components/ui/field'

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
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
    <Button
      type="submit"
      isSuccess
      isFullWidth
      isOutlined
      isRounded
      isMedium
      isLoading={isSubmitting}
    >
      Entrar
    </Button>
  </form>
)

InnerForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
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
  }
}

export default InnerForm
