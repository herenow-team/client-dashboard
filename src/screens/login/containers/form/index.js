import {withRouter} from 'react-router'
import {withFormik} from 'formik'
import InnerForm from '../../components/inner-form'
import validate from './validate'
import handleSubmit from './handle-submit'

const Form = withRouter(
  withFormik({
    mapPropsToValues: () => ({email: '', password: '', captcha: 'invalid'}),
    validate,
    handleSubmit
  })(InnerForm)
)

export default Form
