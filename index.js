const express = require('express')
const app = express()
app.set('view engine', 'pug')

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
    extended: false
}))

const session = require('express-session')
app.use(session({
    secret: "fbui",
    saveUninitialized: true,
    resave: true
}))

const rootRoute = require('./routes/rootRoute')(express)
const loginRoute = require('./routes/loginRoute')(express)
const chatRoute = require('./routes/chatRoute')(express)

app.use((req, res, next) => {
    if (req.session.username != null) {
        next()
    } else if (req.path !== '/login') {
        res.redirect('/login')
    } else {
        next()
    }
})

app.use('/', rootRoute)
app.use('/login', loginRoute)
app.use('/chat', chatRoute)

app.listen(9000, () => {
    console.log('running on port 9000')
})