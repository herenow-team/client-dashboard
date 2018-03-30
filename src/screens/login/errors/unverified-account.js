function UnverifiedAccountError() {
  this.name = 'UnverifiedAccountError'
}

UnverifiedAccountError.prototype = new Error()
UnverifiedAccountError.prototype.name = UnverifiedAccountError.name
UnverifiedAccountError.prototype.constructor = UnverifiedAccountError

export default UnverifiedAccountError
