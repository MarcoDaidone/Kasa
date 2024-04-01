import React from 'react';
import Layout from '../components/layout';
import Carrousel from '../components/carrousel';
import DropDown from '../components/dropDown';
import { useParams } from 'react-router-dom';
import data from '../data/data'
import Rating from '../components/rating';


const FicheLogement = () => {
  let id = useParams().id;

  return (
    <div>
      <Layout>
        <div className='wrapper_fiche'>
     {data.map((item, index) => (
  (item.id === id) ? (
    <><Carrousel images={item.pictures} />
    <div className='infos' key={item.id}>
      <p className='item_description'>{item.title}</p>
      <span className='localisation'>{item.location}</span>
      <span className='tags'>
        {item.tags.map ((item)=> (
      <span>{item}</span>
        ))}
        </span>
      <div className='wrap_ri'>
        <span><Rating rating={item.rating} /></span>
        <span><img src={item.host.picture}/><p>{item.host.name}</p> </span>
      </div>
      <DropDown title={"Description"} content={item.description} />
     <DropDown title={"Équipements"} content={item.equipments.map((item)=>(<span>{item}</span>))}/>
    </div>
    </>
  ) : null
))}
     </div>
      </Layout>
    </div>
  );
}

export default FicheLogement;