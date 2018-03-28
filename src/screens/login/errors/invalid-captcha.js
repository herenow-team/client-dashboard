function InvalidCaptchaError() {
  this.name = 'InvalidCaptchaError'
}

InvalidCaptchaError.prototype = new Error()
InvalidCaptchaError.prototype.name = InvalidCaptchaError.name
InvalidCaptchaError.prototype.constructor = InvalidCaptchaError

export default InvalidCaptchaError
