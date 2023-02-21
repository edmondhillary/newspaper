import React, {useEffect, useState} from 'react';
import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { GlobalProvider } from './context/GlobalState';
import ListNews from './Pages/ListNews';
import './translations'



function App() {
    return (
    <GlobalProvider>
      <BrowserRouter>
        <AppRoutes/>
      
      </BrowserRouter>
    </GlobalProvider>
    );
  }
  
  export default App;
  