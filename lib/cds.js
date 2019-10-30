const injection = {
  inject (cds) {
    if (!cds || typeof cds !== 'object') {
      throw new Error('Injected value is not of type `cds`')
    }

    injection.cds = cds

    require('@sap/cds-sql').inject(cds)
  }
}

const handler = {
  get: (target, name) => {
    switch (name) {
      case 'inject':
      case 'cds':
        return target[name]
    }

    if (!injection.cds) {
      if (name === 'config') {
        return { data: {} }
      }
      throw new Error('This method requires `cds` to be injected')
    }

    if (name === 'config' && !target.cds.config) {
      return { data: {} }
    }

    return target.cds[name]
  }
}

module.exports = new Proxy(injection, handler)
