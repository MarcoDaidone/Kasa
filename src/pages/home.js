import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Thumb from '../components/thumb';
import data from '../data/data'
import { Link } from 'react-router-dom';
import Hero from '../components/heros';
import bg from '../img/background.png';


const Home = (title,image) => {
  return (
    <div style={{position:"relative", paddingBottom:"300px"}}>
      <Layout>
        <div className='wraper'>
       <Hero title={"Chez vous, partout et ailleurs"} image={bg}/>
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