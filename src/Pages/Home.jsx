import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./home.scss";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const Home = () => {
  
  useEffect(() => {
      changeLanguage('es-ES');
    //   changeLanguage('en-US');
    },[])
    const { news, getNews } = useContext(GlobalContext);
    const { t } = useTranslation();
    useEffect(() => {
    getNews("eventos", "es");
  },[]);
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='main'>
          <div className='explain-container'>
            <h2>{t('home.title')}</h2>
            <img src="https://media.gettyimages.com/id/458958567/es/foto/peri%C3%B3dicos-norteamericanos.jpg?s=612x612&w=gi&k=20&c=ZTn2vpAk5BBs1u0awF-GdTnbSWNjZT-CP1eZ61aATCE=" alt="" />
            <p className="main-text">{t('home.parragraph')}</p>
          </div>
          {/* <div className="main-div">
          </div> */}
        </div>
        <div className='sidebar'>
          <div className='title-side-bar'>{t('home.titleSideBar')}</div>
          {news.map((sideNew, index) => {
            return (
              <a href={sideNew.url} target='_blank' className='card-side-container' key={index}>
                <img className='side-img' src={sideNew.urlToImage} alt='' />
                <h2 className='side-title'>{sideNew.title}</h2>
              </a>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
