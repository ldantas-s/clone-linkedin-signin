import auth from '../firebase/config';


function signUp({ email, password }) {
	return new Promise((resolve, reject) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then(cred => resolve(cred))
			.catch(err => reject(err));
	});
}

export default signUp;
