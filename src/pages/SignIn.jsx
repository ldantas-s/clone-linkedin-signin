import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

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
// Context
import { useAuth } from '../context/authContext';

// Validation form
const validationLogin = yup.object().shape({
	email: yup
		.string()
		.email('Digite um e-mail válido!')
		.required('Campo obrigatório!'),
	password: yup.string().required('Campo obrigatório!'),
});

function SignIn() {
	const [message, setMessage] = useState('');
	const history = useHistory();
	const formLoginRef = useRef(null);
	const { setUser } = useAuth();

	// Function SubmitUser
	function handleSubmitLogin(values) {
		// Authentication
		signIn(values)
			.then((cred) => {
				setUser(cred.user);
				history.push('/home');
			})
			.catch((err) => {
				setMessage(err.message);
				console.log('ERROR', err);
				formLoginRef.current.reset();
				formLoginRef.current[0].focus();
			});
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

				<Formik
					onSubmit={handleSubmitLogin}
					initialValues={{ email: '', password: '' }}
					validationSchema={validationLogin}
					className="mt-12 mb-6 lg:mt-8 lg:mb-2"
				>
					{(props) => (
						<Form ref={formLoginRef}>
							{message && <div className="text-orange-500 my-2">{message}</div>}

							<InputField
								label="E-mail ou telefone"
								type="text"
								name="email"
								autoComplete="off"
							/>

							<InputField
								label="Senha"
								type="password"
								name="password"
								autoComplete="off"
							/>

							<ButtonLinkedin type="submit">Entrar</ButtonLinkedin>
						</Form>
					)}
				</Formik>

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
