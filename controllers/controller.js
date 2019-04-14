const db = require('../firestoreSetup')
const createMessage = require('../models/chatmessageModel')
require('es6-promise').polyfill()
require('isomorphic-fetch')

exports.addMessage = function(user, message){
    db.collection('messages').add({
        user: user,
        message: message
    }).then(ref =>{
        console.log("Added document with ID: ", ref.id)
    })
}

exports.getmessages = function(){
    let messages = []
    db.collection('messages').get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log('doc.data: ', doc.data())
            messages.push(createMessage(doc.data().user, doc.data().message))
        })
    })
    .then(()=>{
        console.log("messages.data: ", messages)
        return [1,2]
    })
}