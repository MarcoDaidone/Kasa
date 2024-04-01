import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Thumb from '../components/thumb';
import data from '../data/data'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Layout>
        <div className='wraper'>
        <div className='hero'>
          <div className='overlay'></div>
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='wrapper2'>
      {data.map((item, index) => (
        <Link to={`/fiche_logement/${item.id}`} key={item.id}>
          <Thumb titre={item.title} cover={item.cover} />
        </Link>
      ))}
    </div>
      </div>
      </Layout>
    </div>
  );
}

export default Home;