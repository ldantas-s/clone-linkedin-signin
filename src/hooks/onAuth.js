import auth from '../firebase/config';

function onAuth() {
	auth.onAuthStateChanged(user => {
		console.log(user)
		if (user) return user;
		return null;
	});
}

export default onAuth;
