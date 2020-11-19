import React, { useState } from 'react';

// Hooks
import signUp from '../hooks/signUp';
// Components
import InputField from '../components/InputField.jsx';
import ButtonLinkedin from '../components/ButtonLinkedin.jsx';
import ButtonGoogle from '../components/ButtonGoogle';

import LinkCustom from '../components/LinkCustom';
import Divider from '../components/Divider';
// images
import logoLinkedin from '../assets/images/logo_linkedin.png';

function SignUp() {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');

	async function submitRegister(e) {
		e.preventDefault();

		if (!userInfo.email) {
			setMessage('Por favor, preencha o campo de email!');
			return;
		} else if (!userInfo.password) {
			setMessage('Por favor, preencha o campo de senha!');
			return;
		}
		setMessage('');
		console.log(userInfo);

		console.log(await signUp(userInfo));
	}

	return (
		<section className="h-screen flex flex-col justify-between w-full px-6 py-12">
			<div className="text-center mx-auto lg:w-1/3">
				<h1 className="w-6/12 mx-auto pb-6 lg:pb-1">
					<img src={logoLinkedin} alt="" />
				</h1>
				<h2 className="text-xl lg:mt-2">
					Aproveite sua vida profissional ao máximo{' '}
				</h2>

				<form onSubmit={submitRegister}>
					{message && <div style={{ color: 'orangered' }}>{message}</div>}

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
					<p className="mb-4 text-gray-700">
						Ao clicar em Aceite e cadastre-se, você aceita o{' '}
						<LinkCustom toLink="/">Contrato do Usuário</LinkCustom>, a{' '}
						<LinkCustom toLink="/">Política de Privacidade</LinkCustom> e a{' '}
						<LinkCustom toLink="/">Política de Cookies</LinkCustom> do LinkedIn.{' '}
					</p>
					<ButtonLinkedin>Aceite e cadastre-se</ButtonLinkedin>
				</form>

				<Divider />
				<ButtonGoogle />
				<p className="mt-4">
					Já se cadastrou no LinkedIn?{' '}
					<LinkCustom toLink="/">Entrar</LinkCustom>
				</p>
			</div>
			<footer className="text-center py-6 font-bold">
				<p>Linkedin © 2020</p>
			</footer>
		</section>
	);
}

export default SignUp;
