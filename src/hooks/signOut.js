import auth from '../firebase/config';


function signOut() {

  auth.signOut()
    .then(result => 'heey')
    .catch(err => err.message);
}

export default signOut;