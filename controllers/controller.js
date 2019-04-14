exports.addMessage = function(db, ){

    // TODO: Ny datastruktur så det passer med en liste istedet for en map
    var docRef = db.collection('users').doc(id)
    
    var setAda = docRef.set({
        first: first,
        last: last,
        born: born
    })
}

exports.getUsers = function(db){
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