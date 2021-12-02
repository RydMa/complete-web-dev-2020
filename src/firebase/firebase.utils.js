import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyB_lGUr7xJuPAftD2J4Sy4DUiBl36W4pQE",
	authDomain: "complete-web-dev-with-react.firebaseapp.com",
	projectId: "complete-web-dev-with-react",
	storageBucket: "complete-web-dev-with-react.appspot.com",
	messagingSenderId: "915168683622",
	appId: "1:915168683622:web:c4b3faaa1447579ccf2fa7"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firesore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;