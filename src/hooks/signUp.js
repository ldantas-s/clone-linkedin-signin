import auth from '../firebase/config';


function signUp({ email, password }) {

  auth.createUserWithEmailAndPassword(email, password)
    .then(result => result)
    .catch(err => err);

}

export default signUp;