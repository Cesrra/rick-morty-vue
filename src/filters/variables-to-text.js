const variablesToText = {}

function convertVariablesToText (obj) {
  const gender = obj.gender === 'Male' ? 'He' : 'She'
  return `
  ${gender} is a ${obj.species}, this species originated on
  ${obj.origin.name}. ${gender} is currenly ${obj.status}.`
}

variablesToText.install = function (Vue) {
  Vue.filter('variables-to-text', (val) => {
    return convertVariablesToText(val)
  })
}

export default variablesToText
