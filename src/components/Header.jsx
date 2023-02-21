import React, { useState, useEffect } from 'react';
import Button from './Button';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import { changeLanguage } from 'i18next';
import Input from './Input';


const Header = () => {
    // initialState=['es-ES', 'en-US'];
    const [language,setLangauage] = useState('')
    const navigate =  useNavigate();
    const [menu, setMenu] = useState();
    const handleMenu = ()=>{
        setMenu(!menu);
    }
    const handleClick = (e)=>{
        setLangauage(e.target.value);
    }
    useEffect(() => {
        if(language !== '')
        changeLanguage(language);
      //   changeLanguage('en-US');
      },[language])

    return (

              <div className="header-class">

                <div className='button-container'>
                <div className="left-button-class">
                    <select onChange={handleClick} value={language} className='select-class' id="opciones">
                        <option  value="es-ES">🇪🇦</option>
                        <option   value="en-US">🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
                    </select>
                <label htmlFor="opciones"></label>

                </div>
                

                <div className="right-button-class">
                    <button className='button-list' onClick={handleMenu}>&#9776;</button>
                    {menu &&(
                        <ul>
                            <li  className={'right-button'} text={'Home'} onClick={()=>navigate('/')}> Home</li>

                            <li className={'right-button'} text={'Crear Noticia'} onClick={()=>navigate('/form')}> Crear Noticia</li>
                            <li className={'right-button'} text={'Todas las noticias'} onClick={()=>navigate('/news')}> Noticias</li>
                        </ul>
                    )}
                </div>
                 
                    <h1 className="header__title">The Happy Times</h1>
                </div>
    
                    <Input text={'🔍'} className={'input-news'}/>

              </div>
     
);
};

export default Header;