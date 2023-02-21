import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from '../Pages/Home';
import Form from '../Pages/Form';
import ListNews from '../Pages/ListNews';
import WholeNew from '../Pages/WholeNew';


const AppRoutes = () => {
    return useRoutes (

        [
            {
                element: <Home/>,
                path: '/',
              },
              {
                element: <Form/>,
                path: '/form',
              },
              {
                element:<ListNews/>,
                path:'/news'
              },
              {
                element:<WholeNew/>,
                path:'/whole-new'
              }
        ]
        );
    
};

export default AppRoutes;
 