import React,{useContext,useEffect,useState} from 'react';
import './list-news.scss'
import { GlobalContext } from "../context/GlobalState";
import Card from '../components/Card';
import Input from '../components/Input';
import Header from '../components/Header';
import { changeLanguage, t } from 'i18next';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
const ListNews =  () => {
    const {t} = useTranslation()
    const [changeColor, setChangeColor] = useState(null);
    const { news, getNews } = useContext(GlobalContext);

    useEffect(() => {
        changeLanguage('es-ES');
      //   changeLanguage('en-US');
      },[]);

const handleClick = (e)=>{

    getNews(e.target.innerText, 'es')
    setChangeColor(e.target.innerText)
    
};

const activeButton = {
    backgroundColor: '#b2af1bf9'
  };

  const normalButton = {
    backgroundColor: '#f7f7df'
   
  };


    return (
        <div className="clas">
            <Header/>

        <div className='cards-container'>
            {/* si no lo hago asi, me cambia los estilos haciendollo con el value */}
            {/* <Input text={'🔍'} className={'input-news'}/> */}
            <div className='span-category'>
                <button   onClick={handleClick}  style={changeColor === 'Naturaleza' ? activeButton : normalButton}>{t('news.spanCategory1')}</button>

                <button   onClick={handleClick} style={changeColor === 'Deportes' ? activeButton : normalButton} >{t('news.spanCategory2')}</button>

                <button className='events-button' onClick={handleClick} style={changeColor === 'Eventos' ? activeButton : normalButton}>{t('news.spanCategory3')}</button>

                <button className='health-button' onClick={handleClick} style={changeColor === 'Salud' ? activeButton : normalButton}>{t('news.spanCategory4')}</button>

                <button className='music-button' onClick={handleClick} style={changeColor === 'Musica' ? activeButton : normalButton}>{t('news.spanCategory5')}</button>

            </div>
            <Card />    
        </div>
        <Footer/>
        </div>
    );
};

export default ListNews;
