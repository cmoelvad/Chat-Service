const controller = require('../controllers/controller')

module.exports = function(express){
    const router = express.Router()

    router.route('/')
        .get((req, res) =>{
            controller.getmessages().then((messages)=>{
                console.log("should have messages")
                res.render('chat', {header: 'Logget ind som: ' + req.session.username, messages: messages})
            })
            .catch(e=>[console.error(e)])
        })
    return router
}