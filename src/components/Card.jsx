import React,{useContext,useEffect, useState} from 'react';
import './card.scss'

import { GlobalContext } from "../context/GlobalState";


const Card = ({className}) => {

  const { news, getNews } = useContext(GlobalContext); 
 
  const inputName = ['voluntariado','inteligencia artificial','cultura','Naturaleza', 'bienestar', 'Historias de exito', 'Tecnologia'];
  
  useEffect(() => {
        const randomCategory = Math.floor(Math.random() * inputName.length);
        const randomElement = inputName[randomCategory];
        console.log(randomElement);
        getNews(randomElement, 'es');
        
    }, []);
  

    return (
        <div className={'cards-container'}>
         {news.map( (newItem, index) => {
            
             return (
            <div className='card-container' key={index} >
                <h2 className="card-title">{newItem.title}</h2>
                <img className='card-img' src={newItem.urlToImage} alt="" />
                <div>
                <p className="card-description">{newItem.description}</p>
                </div>
                <button className='button-new'><a target='_blank' className='link-new' href={newItem.url}>Noticia Completa</a></button>
                
             
            </div>
               
                 )
             
         })}
        </div>
    );
};
      

export default Card;