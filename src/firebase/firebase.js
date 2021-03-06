import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
    
//   });

// database.ref('expenses').on('value' , (snapshot) => {
//   const expenses = []

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });

//     console.log(expenses);
// }, (e) => {
//   console.log('Error with data fetching ', e)
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 9875498789
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 9875498789
// });

// database.ref('expenses').push({
//   description: 'Foood',
//   note: '',
//   amount: 1200,
//   createdAt: 9875498789
// });

// database.ref('notes/-L6RiYUmp8U4ffqfZRfP').remove();

// const firebaseNotes = {
//   notes : {
//     aezrazer : {
//       title: 'First note !',
//       body: 'this is my note'
//     },
//     eazreazr : {
//       title: 'Another note !',
//       body: 'this is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note !',
//   body: 'this is my note'
// }, {
//   id: '9872ae',
//   title: 'Another note !',
//   body: 'this is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/1').set(notes);

// database.ref().on('value' , (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//   console.log('Error with data fetching ', e)
// });

// database.ref()
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e)=> {
//     console.log('error fetching data', e)
//   })

// database.ref().set({
//   name: 'Idir Belaid',
//   age: 25,
//   stressLevel : 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Lyon',
//     country: 'France'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed. ', e);
// });

// database.ref().update({
//   stressLevel : 9,
//   'location/city' : 'Amazon',
//   'job/company' : 'Seattle'
// })

// database.set('isSingle').set(null)

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Did remove data')
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   })