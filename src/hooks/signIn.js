import auth from '../firebase/config';


function signIn({ email, password }) {
	return new Promise((resolve, reject) => {
		auth.signInWithEmailAndPassword(email, password)
			.then(result => resolve(result))
			.catch(err => reject(err));
	});
}

export default signIn;
