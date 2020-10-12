import auth from '../firebase/config';


function signIn({ email, password }) {

    auth.signInWithEmailAndPassword(email, password)
      .then(result => result)
      .catch(err => 'eeeita deu errado');
}

// xoton64632@treeheir.com
export default signIn;