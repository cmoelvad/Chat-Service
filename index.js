const admin = require('firebase-admin')
var serviceAccount = require('C:\\Users\\Chrel\\Documents\\Git Repository\\Chat Service\\Chat service-7726558d7407.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

var db = admin.firestore()

function addUser(db, id, first, last, born){

    var docRef = db.collection('users').doc(id)
    
    var setAda = docRef.set({
        first: first,
        last: last,
        born: born
    })
}

function getData(db){
    db.collection('users').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data())
        })
    })
    .catch((err) =>{
        console.log('Error getting documents', err)
    })
}

//addUser(db, 'Cmoelvad', 'Christian', 'Moelvad', 1500)
getData(db)
