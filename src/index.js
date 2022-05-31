const{ app }= require('../src/app')
const {connection} = require('./services/db')

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  console.log('helop!!!')

