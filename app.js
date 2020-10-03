const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
const errorController = require('./controllers/404')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended : false}))

// static files are files which can be served to the users !
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000)
