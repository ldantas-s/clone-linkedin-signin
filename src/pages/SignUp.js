import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import signUp from '../hooks/signUp';
// Components
import InputField from '../components/InputField.jsx';
import ButtonLinkedin from '../components/ButtonLinkedin.jsx';


function SignUp() {

  const [ userInfo, setUserInfo ] = useState({
    'email':'',
    'password':''
  });
  const [ message, setMessage ] = useState('');

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
    console.log(userInfo)

    console.log(await signUp(userInfo));

  }


  return (
    <>
      <h1>LINKEDIN</h1>
      <h3>Aproveite sua vida profissional ao máximo </h3>

      <form onSubmit={submitRegister}>
        { message && <div style={{ color: 'orangered' }}>{ message }</div> }

        <InputField
          label="E-mail ou telefone"
          type="text"
          name="email"
          setValue={(e) => setUserInfo({ ...userInfo, 'email': e.target.value })}
          autoComplete="off"
        />

        <InputField
          label="Senha"
          type="password"
          name="password"
          setValue={(e) => setUserInfo({ ...userInfo, 'password': e.target.value })}
          autoComplete="off"
        />
        <p>Ao clicar em Aceite e cadastre-se, você aceita o Contrato do Usuário, a Política de Privacidade e a Política de Cookies do LinkedIn. </p>
        <ButtonLinkedin>Aceite e cadastre-se</ButtonLinkedin>
      </form>

      <div>
        ou
      </div>
      <div>
        <button>Entrar com o Google</button>
      </div>
      <p>Já se cadastrou no LinkedIn? <Link to="/">Entrar</Link></p>

    </>
  );
}

export default SignUp;
