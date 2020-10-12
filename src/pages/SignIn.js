import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import signIn from '../hooks/signIn';
// Components
import InputField from '../components/InputField';
import Button from '../components/Button';


function SignIn() {

  const [ userInfo, setUserInfo ] = useState({
    email: '',
    password: '',
  });
  const [ message, setMessage ] = useState('');

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
    setMessage('');
    console.log(userInfo)

    // Authentication

    // console.log(await signIn(userInfo));
  }


  return (
    <>
      <div>
        <h1>LINKEDIN</h1>
        <h2>Olá novamente</h2>
        <p>Não perca sua próxima oportunidade. Entre para ficar por dentro das novidades na sua profissão.</p>


        <form onSubmit={submitUser}>
          {message && <div style={{ color:'orangered' }}>{ message }</div>}

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

          <Button>Entrar</Button>
        </form>
        
        <div>
          ou
        </div>
        <div>
          <button>Entrar com o Google</button>
        </div>
        <div>
          <a href="console.log()">Esqueceu a senha?</a>
        </div>
        <p>Novo no Linkedin? <Link to="/signup">Cadastre-se</Link></p>
      </div>

      <footer>
        <p>
          Linkedin © 2020
        </p>
      </footer>
    </>
  );
}

export default SignIn;
