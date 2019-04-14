const controller = require('../controllers/controller')

module.exports = function(express){
    const router = express.Router()

    router.route('/')
        .get((req, res) =>{
            res.render('login', {title: 'login'})
        })
        .post((req, res)=>{
            req.session.username = req.body.username
            res.redirect('./chat')
        })
    return router
}