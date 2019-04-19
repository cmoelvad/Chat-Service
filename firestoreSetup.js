const admin = require('firebase-admin')
var serviceAccount = require('C:\\Users\\Chrel\\Documents\\Git Repository\\Chat Service\\Chat service-7726558d7407.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
module.exports=admin.firestore()