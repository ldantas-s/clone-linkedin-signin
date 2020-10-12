import React from 'react';

import signOut from '../hooks/signOut';

import Button from '../components/Button';


const Home = () => {

  function logout() {
    console.log(signOut());
    console.log('asdas')
  }

  return (
    <>
      <Button onClick={logout}>Sign Out</Button>
    </>
  );
}

export default Home;