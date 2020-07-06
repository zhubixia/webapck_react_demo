const files = require.context('.', false, /\.js$/)


files.keys().forEach((item) => {
  console.log(item)
})