import {withFormik} from 'formik'
import InnerForm from '../../components/inner-form'
import validate from './validate'
import handleSubmit from './handle-submit'

const Form = withFormik({
  mapPropsToValues: () => ({email: '', password: ''}),
  validate,
  handleSubmit
})(InnerForm)

export default Form
