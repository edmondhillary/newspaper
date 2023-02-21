import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './form.scss';
import { useNavigate } from 'react-router-dom';
import { changeLanguage, t } from 'i18next';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const Form = () => {
const {t} = useTranslation()
    useEffect(() => {
        changeLanguage('es-ES');
      //   changeLanguage('en-US');
      },[])

    const navigate = useNavigate()
    const [description, setDescription]= useState('')       
    const [title, setTitle]= useState('');
    const handleSubmit = (event) => {


            event.preventDefault();
            const data = {
                title,
                description
            }
            console.log(data)
            localStorage.setItem('datos', JSON.stringify(data));
            navigate('/news')
}
    return (
    <div>
        <Header/>
        <div className='form-class'>
            <form className='form-container' >
                <input  className='input-title' type="text" placeholder={t('form.inputTitlePlaceHolder')} onChange={event => setTitle(event.target.value)}/>
                <textarea  maxLength={'1500'} className='input-description' type="textarea" onChange={event => setDescription(event.target.value)} rows="4" cols="50" placeholder={t('form.textAreaPlaceHolder')}/>
                <input className='input-submit' type="submit" value={t('form.submitValue')}onClick={handleSubmit}></input>
            </form>
        </div>
        <Footer/>
    </div>
    );
};

export default Form;