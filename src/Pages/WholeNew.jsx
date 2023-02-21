import React from 'react';
import { GlobalContext } from "../context/GlobalState";

const WholeNew = () => {
    const { news } = useContext(GlobalContext); 
    
    return (
        <div>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      )
};

export default WholeNew;