function InvalidFieldFormatError(field) {
  this.field = field
  this.name = 'InvalidFieldFormatError'
}

InvalidFieldFormatError.prototype = new Error()
InvalidFieldFormatError.prototype.name = InvalidFieldFormatError.name
InvalidFieldFormatError.prototype.constructor = InvalidFieldFormatError

export default InvalidFieldFormatError
