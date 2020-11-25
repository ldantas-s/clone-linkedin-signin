import auth from '../firebase/config';


function signOut() {
	return new Promise((resolve, reject) => {
		auth.signOut()
			.then(() => resolve('success'))
			.catch(err => reject(err));
	});
}

export default signOut;
