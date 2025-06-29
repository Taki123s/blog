const express = require('express')
const app = express()
var path = require('path');
const port = 3000
const morgan = require('morgan')
const {engine} = require('express-handlebars')


app.engine('hbs', engine({
  extname : '.hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources', 'views'));
app.use(morgan('combined'))


app.get('/', (req, res) => {
  return res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
