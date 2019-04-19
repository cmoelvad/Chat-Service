const db = require('../firestoreSetup')
const functions = require('firebase-functions')

require('isomorphic-fetch')

exports.addMessage = async function(user, message){
    getMessageNumber()
    .then((snapshot)=>{
        let messageID = null
        snapshot.forEach((doc)=>{
            messageID = doc.data().number
        })
        return db.collection('messages').doc('\''+messageID+'\'').set({
            user: user,
            message: message
        })
        .then(()=>{
            db.collection('messageNumber').doc('messagenumber').set({
                number: messageID += 1
            })
        })
    })
}

async function getMessageNumber(){
     return db.collection('messageNumber').get('messagenumber')
}

exports.createMessage = functions.firestore.document('messages')

exports.getmessages = async function(){
    return db.collection('messages').get()
}