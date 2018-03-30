function InvalidCredentialsError() {
  this.name = 'InvalidCredentialsError'
}

InvalidCredentialsError.prototype = new Error()
InvalidCredentialsError.prototype.name = InvalidCredentialsError.name
InvalidCredentialsError.prototype.constructor = InvalidCredentialsError

export default InvalidCredentialsError
