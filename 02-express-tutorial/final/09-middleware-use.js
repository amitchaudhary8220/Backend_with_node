const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//we can use , 'use' method , which adds middlewaare to every path without passing it , we can also pass routes after which we want to apply this middleware like this app.use('/api',logger); , in this case middleware will be applied after /api in every path inclue api
// in 'use'  method order do matter ,middleware only work below the lines, where app.use is called , it will not work for functions written above it.

//  req => middleware => res

app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
