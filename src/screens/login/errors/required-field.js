function RequiredFieldError(field) {
  this.field = field
  this.name = 'RequiredFieldError'
}

RequiredFieldError.prototype = new Error()
RequiredFieldError.prototype.name = RequiredFieldError.name
RequiredFieldError.prototype.constructor = RequiredFieldError

export default RequiredFieldError
