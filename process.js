import db from './src/database.js'

db.collection('items').get().then(snapshot => {
    snapshot.forEach(item => {
        db.collection('data').doc('data')
    })
})


myData.forEach(item => {
    let tags = item.tags ? item.tags.split(/, ?/) : []
    let categories = item.categories ? item.categories.split(/, ?/) : []

    db.collection('items').doc(item.name).set({
        tags,
        categories,
    }).then(() => {
        console.log("successfully wrote item");
    })
})