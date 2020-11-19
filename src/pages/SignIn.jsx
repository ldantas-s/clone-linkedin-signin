import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks
import signIn from '../hooks/signIn';
// Components
import InputField from '../components/InputField.jsx';
import LinkCustom from '../components/LinkCustom.jsx';
import ButtonLinkedin from '../components/ButtonLinkedin.jsx';
import Divider from '../components/Divider';
import ButtonGoogle from '../components/ButtonGoogle';
//images
import logoLinkedin from '../assets/images/logo_linkedin.png';

function SignIn() {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');
	const history = useHistory();

	// Function SubmitUser
	async function submitUser(e) {
		e.preventDefault();

		if (!userInfo.email) {
			setMessage('Por favor, preencha o campo de email!');
			return;
		} else if (!userInfo.password) {
			setMessage('Por favor, preencha o campo de senha!');
			return;
		}
		// Authentication
		await signIn(userInfo);
		history.push('/home');
		setMessage('');
	}

	return (
		<section className="h-screen flex flex-col justify-between w-full px-6 py-12">
			<div className="text-center mx-auto lg:w-1/3">
				<h1 className="w-6/12 mx-auto pb-6 lg:pb-1">
					<img src={logoLinkedin} alt="" />
				</h1>
				<h2 className="font-medium text-lg my-1">Olá novamente</h2>
				<p className="text-gray-800">
					Não perca sua próxima oportunidade. Entre para ficar por dentro das
					novidades na sua profissão.
				</p>

				<form onSubmit={submitUser} className="mt-12 mb-6 lg:mt-8 lg:mb-2">
					{message && <div className="text-orange-500">{message}</div>}

					<InputField
						label="E-mail ou telefone"
						type="text"
						name="email"
						value={userInfo.email}
						setValue={(e) =>
							setUserInfo({ ...userInfo, email: e.target.value })
						}
						autoComplete="off"
					/>

					<InputField
						label="Senha"
						type="password"
						name="password"
						value={userInfo.password}
						setValue={(e) =>
							setUserInfo({ ...userInfo, password: e.target.value })
						}
						autoComplete="off"
					/>

					<ButtonLinkedin>Entrar</ButtonLinkedin>
				</form>

				<Divider />
				<ButtonGoogle />
				<div className="my-3">
					<LinkCustom toLink="#">Esqueceu a senha?</LinkCustom>
				</div>
				<p>
					Novo no Linkedin?{' '}
					<LinkCustom toLink="/signup">Cadastre-se</LinkCustom>
				</p>
			</div>

			<footer className="text-center py-6 font-bold">
				<p>Linkedin © 2020</p>
			</footer>
		</section>
	);
}

export default SignIn;
