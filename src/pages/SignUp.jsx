import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
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

const validationSignup = Yup.object().shape({
	email: Yup.string()
		.email('Digite um e-mail válido!')
		.required('E-mail obrigatório!'),
	password: Yup.string()
		.min(6, 'A senha deve ter pelo menos 6 caracteres')
		.required('Senha obrigatória!'),
});

function SignUp() {
	const [message, setMessage] = useState({
		type: '',
		message: '',
	});

	const formRef = useRef(null);

	async function handleSubmit(values) {
		await signUp(values)
			.then((cred) => {
				if (cred) {
					setMessage({
						type: 'success',
						message: 'Conta criada com sucesso!',
					});
					// redirect to other page
				}
			})
			.catch((err) => {
				setMessage({
					type: 'error',
					message: err.message,
				});
			});
		formRef.current.reset();
		setTimeout(() => setMessage({ type: '', message: '' }), 4000);
	}

	return (
		<section className="h-screen flex flex-col justify-between w-full px-6 py-12">
			<div className="text-center mx-auto lg:w-1/3">
				<h1 className="w-6/12 mx-auto pb-6 lg:pb-1">
					<img src={logoLinkedin} alt="Logo linkedin" />
				</h1>
				<h2 className="text-xl lg:mt-2">
					Aproveite sua vida profissional ao máximo{' '}
				</h2>

				<Formik
					onSubmit={handleSubmit}
					initialValues={{ email: '', password: '' }}
					validationSchema={validationSignup}
				>
					<Form ref={formRef}>
						{message.message && (
							<div
								className={
									message.type === 'error'
										? 'text-orange-500'
										: 'text-green-500'
								}
							>
								{message.message}
							</div>
						)}

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

						<p className="mb-4 text-gray-700">
							Ao clicar em Aceite e cadastre-se, você aceita o{' '}
							<LinkCustom toLink="/">Contrato do Usuário</LinkCustom>, a{' '}
							<LinkCustom toLink="/">Política de Privacidade</LinkCustom> e a{' '}
							<LinkCustom toLink="/">Política de Cookies</LinkCustom> do
							LinkedIn.{' '}
						</p>
						<ButtonLinkedin type="submit">Aceite e cadastre-se</ButtonLinkedin>
					</Form>
				</Formik>

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
