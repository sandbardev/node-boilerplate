require('@babel/register')
// require('dotenv').config()

const app = require('./src/app').default

const environment = 'development'
const PORT = 3333

app.listen(
  PORT, () => console.log(`App listening on port ${3333}`)
)
