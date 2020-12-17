import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default}

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((item) => {
//     expenses.push({
//       id: item.key,
//       ...item.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'gas bill',
//   note: 'lots of money',
//   amount: 52565,
//   createdAt: 0
// })

// const notes = [{
//   id: '12',
//   title: 'First',
//   body: 'This is a note',
// }, {
//   id: '13',
//   title: 'second',
//   body: 'This is a second note',
// }]

// database.ref('notes').set(firebaseNotes)

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error fetching data', e)
//   })

// database.ref().set({
//   name: 'Haku Degerman',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'monster',
//     company: 'seasame street'
//   },
//   isSingle: false,
//   location: {
//     city: 'EastSide',
//     country: 'Bagoon'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('error', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': "Amazon",
//   'location/city': 'Seattle'
// })

// database.ref().remove()
//   .then(() => {
//     console.log('remove success')
//   })
//   .catch((e) => {
//     console.log('remove error')
//   })