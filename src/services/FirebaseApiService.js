import firebase from 'firebase-admin';
import firebaseAccount from '../config/firebaseAdminSdk';

let db, ref;

class FirebaseApiService {
    constructor(){ 
        firebase.initializeApp({
            credential: firebase.credential.cert(firebaseAccount),
            databaseURL: 'https://line-bot-message-40203.firebaseio.com'
        });

        db = firebase.database();

        ref = db.ref('messages_map');
    }

    getAnswer(question) {
        return new Promise((resolve, reject) => {
            try {
                return ref.child(question).once('value')
                    .then((snapshot) => resolve(snapshot.val()))
                    .catch((err) => reject(err))
            } catch (e) {
                return reject(e);
            }
        });
    }

}

export default new FirebaseApiService();