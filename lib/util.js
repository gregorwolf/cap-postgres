/**
 * Converts the error code to a string if it is a number.
 *
 * @param err - that will be adapted if necessary
 * @returns {Error} - input param with adapted error code if necessary
 */
const convertErrorCodeToString = err => {
  if (typeof err.code === 'number') {
    err.code = err.code.toString()
  }

  return err
}

module.exports = {
  convertErrorCodeToString
}
