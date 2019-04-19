const controller = require('../controllers/controller')

module.exports = function(express){
    const router = express.Router()

    router.route('/')
        .get((req, res) =>{
            controller.getmessages()
            .then((gotMessages)=>{
                let messages = []
                gotMessages.forEach(doc =>{
                    messages.push(doc.data())
                })
                res.render('chat', {header: 'Logget ind som: ' + req.session.username, messages: messages})
            })
            .catch(e=>[console.error(e)])
        })

        .post((req, res) => {
            controller.addMessage(req.session.username, req.body.message).then(()=>{
                res.redirect('/')
            })
        })
    return router
}