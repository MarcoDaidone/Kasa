import React from 'react';
import { Link } from 'react-router-dom';
import quatrcentquatre from '../img/quatrecentquatre.png'
import Layout from '../components/layout';

const QuatreCentQuatre = () => {
  return (
    <Layout>
    <div className='quatrecentquatre'>
            <img src={quatrcentquatre} alt="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
        </Layout>
  );
}

export default QuatreCentQuatre;