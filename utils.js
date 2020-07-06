const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

const utils = {
  resolve
}

module.exports = utils
