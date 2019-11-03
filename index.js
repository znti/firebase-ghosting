const configs = require('./configs');
const creds = require('./credentials');

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp(configs);

const db = firebase.firestore();

let onDataChange = (data) => console.log('[stub] Data change:', data);

const { email, password } = creds;
firebase.auth().signInWithEmailAndPassword(email, password)
	.then((user) => {
		console.log('Authenticated successfully.');
		listen('test', onDataChange);
	})

module.exports.onDataChange = (callback) => onDataChange = callback;

function listen(collection, onDataChange) {
	db.collection(collection)
	.onSnapshot(function(snapshot) {
		console.log('Setting listeners');
		snapshot.docChanges().forEach(function(change) {
			const { doc, type } = change;
			onDataChange({ type, id: doc.id, data: doc.data() });
		});
	});
}

