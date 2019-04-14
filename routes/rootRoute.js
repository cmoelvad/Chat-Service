module.exports = function(express){
    const router = express.Router()

    router.route('/')
        .get((req, res)=>{
            res.redirect('/chat')
        })
    return router
}