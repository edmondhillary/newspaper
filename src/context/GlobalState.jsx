import React, { createContext, useReducer, useState } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios";


const initialState = {
    news:[]
}
//   news:[]
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const API_KEY='be4a65a36c4e4f46bac0d5fa5b9d3ffb';
    //fb3377037066411c82eb12fae5f3f997
    // bcba2ab1786847b2b387317a697732cf 
    //38b943e5c1ea4d2cb89a3ae390e644c4   
    //81f30e2942bc41cdbc1c751932df192f
    //be4a65a36c4e4f46bac0d5fa5b9d3ffb
    const getNews = async (category,language) => {
    
       const res = await axios.get(`https://newsapi.org/v2/everything?q=${category}&language=${language}&pageSize=12&sortBy=popularity&apiKey=${API_KEY}`);
        console.log(res.data.articles)
        dispatch({
          type: "GET_NEWS",
          payload: res.data.articles
        });
      };

return(
    <GlobalContext.Provider value={{
        news: state.news,
        getNews
    }}
    >
        {children}
    </GlobalContext.Provider>
)





}