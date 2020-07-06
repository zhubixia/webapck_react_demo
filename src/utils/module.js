
const module = (directory, useSubdirectories, regExp ) => {
  const moduleFiles = require.context(directory, useSubdirectories, regExp)
  return moduleFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app' $1匹配正则表达式第一个小括号的内容
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
  }, {})
}

export default module
