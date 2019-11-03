const configs = require('./configs');
const creds = require('./credentials');

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp(configs);

const db = firebase.firestore();

const { email, password } = creds;
firebase.auth().signInWithEmailAndPassword(email, password)
	.then((user) => {
		console.log('Authenticated successfully.', user);
		setListeners();
	})

function setListeners() {
	db.collection("test")
	.onSnapshot(function(snapshot) {
		snapshot.docChanges().forEach(function(change) {
			if (change.type === "added") {
				console.log("New: ", change.doc.data());
			}
			if (change.type === "modified") {
				console.log("Modified: ", change.doc.data());
			}
			if (change.type === "removed") {
				console.log("Removed: ", change.doc.data());
			}
		});
	});
}
//module.exports = () => console.log('configs are', configs, 'and credentials', creds);


