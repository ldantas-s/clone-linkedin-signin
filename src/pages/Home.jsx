import React from 'react';

import signOut from '../hooks/signOut';
import onAuth from '../hooks/onAuth';

import ButtonLinkedin from '../components/ButtonLinkedin.jsx';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Home = () => {
	const history = useHistory();
	const { user, setUser } = useAuth();

	function logout() {
		signOut()
			.then((result) => {
				setUser(onAuth());
				sessionStorage.setItem('userInfoSession', '{}');
				history.push('/');
			})
			.catch((err) => console.log(err));
	}

	return (
		<section className="h-screen flex flex-col justify-center w-full px-6 py-12">
			<h1 className="text-3xl">Welcome to the Linkedin</h1>
			<h2 className="text-2xl mb-3 font-medium">{user.email}</h2>
			<ButtonLinkedin onClick={() => logout()}>Sign Out</ButtonLinkedin>
		</section>
	);
};

export default Home;
