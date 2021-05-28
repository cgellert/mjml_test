const renderer = require('../src/rendererRec')
const data = require('../src/data/sampleReceipt.json')

renderer.renderHtml(data, { validationLevel: 'strict' })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
