import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/heros';
import bg from '../img/kalen.png';
import DropDown from '../components/dropDown';



const Apropos = () => {
  return (
    <div>
        <Layout>
        <div className='wraper'>
        <Hero title={"Chez vous, partout et ailleurs"} image={bg}/>
        <div className='drp_wrap'>
          <DropDown title={"Fiabilité"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confromes aux logements,et toutes les informations sont régulièrement vérifiées par nos équipes"}/>
          <DropDown title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"}/>
          <DropDown title={"Service"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"}/>
          <DropDown title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, sela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"}/>
        </div>
        </div>
      </Layout>
    </div>
  );
}

export default Apropos;