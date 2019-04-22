const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

exports.silenceMessages = functions.firestore.document('messages/{messageId}')
    .onCreate((snap, context) => {
        const censored = [/Microsoft/gi, /Apple/gi, /Google/gi]
        const newValue = snap.data()
        let message = newValue.message

        censored.forEach((regex) => {
            message = message.replace(regex, "*****")
        })
        return snap.ref.set({
            message: message
        })
    })