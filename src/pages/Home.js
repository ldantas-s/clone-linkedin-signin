import React from 'react';

import signOut from '../hooks/signOut';

import ButtonLinkedin from '../components/ButtonLinkedin.jsx';
import { useHistory } from 'react-router-dom';


const Home = () => {

	const history = useHistory();

  async function logout() {
		console.log('error!')
		await signOut();
		history.push('/');
  }

  return (
    <>
      <ButtonLinkedin onClick={() => logout()}>Sign Out</ButtonLinkedin>
    </>
  );
}

export default Home;
