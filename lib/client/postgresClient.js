let error

const _getClient = name => {
  try {
    return require(name)
  } catch (err) {
    if (name === 'pg') {
      error = err
      return _getClient('pg')
    }

    throw error
  }
}

module.exports = _getClient('pg')
