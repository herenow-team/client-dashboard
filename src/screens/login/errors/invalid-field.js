function InvalidFieldError(field) {
  this.field = field
  this.name = 'InvalidFieldError'
}

InvalidFieldError.prototype = new Error()
InvalidFieldError.prototype.name = InvalidFieldError.name
InvalidFieldError.prototype.constructor = InvalidFieldError

export default InvalidFieldError
