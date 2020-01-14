import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENTID
};

let firebaseSettings = { timestampsInSnapshots: true };

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    let db = firebase.firestore();
    db.settings(firebaseSettings)
  }

  pushCommitment = (values) => {
    console.log('got inside the pushCommitment');
    this.db.collection('commitments').add(values)
  }
}

export default Firebase
