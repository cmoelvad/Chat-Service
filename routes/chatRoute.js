const controller = require('../controllers/controller')
const db =  require('../index')

module.exports = function(express){
    const router = express.Router()

    router.route('/')
        .get((req, res) =>{
            res.render('chat', {header: 'Logget ind som: ' + req.session.username, messages: controller.getUsers(db)})
        })
    return router
}