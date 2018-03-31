function TooLongFieldError(field) {
  this.field = field
  this.name = 'TooLongFieldError'
}

TooLongFieldError.prototype = new Error()
TooLongFieldError.prototype.name = TooLongFieldError.name
TooLongFieldError.prototype.constructor = TooLongFieldError

export default TooLongFieldError
