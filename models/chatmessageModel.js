module.exports = function createMessage(db, user, message){
    var docRef = db.collection('messages').doc(user)

    var setMessage = docRef.set({
        message: message
    })
}

function addUser(db, id, first, last, born){

    var docRef = db.collection('users').doc(id)
    
    var setAda = docRef.set({
        first: first,
        last: last,
        born: born
    })
}

function getData(db){
    let users = new Map()
    db.collection('users').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            users.set(doc.id, doc.data())
        })
    })
    .catch((err) =>{
        console.log('Error getting documents', err)
    })
    return users
}