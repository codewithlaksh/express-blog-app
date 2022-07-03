const express = require('express')
const path = require('path')
const app = express()
var exphbs  = require('express-handlebars');
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))
app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`)
})