import React , {useEffect, useContext, useState}from 'react';
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import { changeLanguage} from 'i18next';
import { useTranslation } from 'react-i18next';


const Input = ({className, text}) => {
    const {t} = useTranslation();
    useEffect(() => {
        changeLanguage('es-ES');
      //   changeLanguage('en-US');
      },[])
    const navigate = useNavigate();
    const [value, setValue]=useState('')
    const { news, getNews } = useContext(GlobalContext);
    
      const handleOnChange = (e)=>{
          console.log(e.target.value);
          setValue(e.target.value)
          console.log(value)
      }

    const handleChange = (e)=>{
        getNews(value, 'es');
        navigate('/news');
        setValue('')
        
    }

    return (
        <div className={className}>
           <label> {text} 

            <input onChange={handleOnChange} type='text' placeholder={t('news.placeHolder')}  name='input' value={value}/>
        
           </label>
           <button className= 'header-button-search' onClick={handleChange}>
            Search
           </button>
           
        </div>
    );
};

export default Input;