import React from 'react';
import Layout from '../components/layout';
import Carrousel from '../components/carrousel';
import DropDown from '../components/dropDown';
import { useParams } from 'react-router-dom';
import data from '../data/data'
import Rating from '../components/rating';
import QuatreCentQuatre from './quatreCentquatre';


const FicheLogement = () => {
  let id = useParams().id;
  const dataId = data.find(item => item.id === id);

  if (!dataId){
    return (
      <QuatreCentQuatre/>
    );
  }

  return (
    <div>
    <Layout>
      <div className='wrapper_fiche'>
  <Carrousel images={dataId.pictures} />
  <div className='infos' key={dataId.id}>
    <div className='wrap_info_2'>
    <p className='item_description'>{dataId.title}</p>
    <span className='localisation'>{dataId.location}</span>
    <span className='tags'>
      {dataId.tags.map ((item)=> (
    <span>{item}</span>
      ))}
      </span>
    <div className='wrap_ri'>
      <span><Rating rating={dataId.rating} /></span>
      <span><img src={dataId.host.picture}/><p>{dataId.host.name}</p> </span>
    </div></div>
    <div className='wrap_dpd'>
    <DropDown title={"Description"} content={dataId.description} />
    <DropDown title={"Équipements"} content={dataId.equipments.map((item)=>(<span>{item}</span>))}/>
   </div></div>
   </div>
    </Layout>
  </div>
  )
}

export default FicheLogement;