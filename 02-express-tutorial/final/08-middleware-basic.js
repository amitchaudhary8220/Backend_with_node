const express = require('express')
const app = express()

//  req => middleware => res

//when we want to write some code , that is going to be written in every get , so we something called middle to mitigate code repetition

//inside get , after '/' path , we can pass middleware , middleware bydefault has access to (req,res,next )
//if we are not returing response from middleware , we have to call next()

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
