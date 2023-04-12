import axios from 'axios';
import { useState, useEffect, createContext } from 'react'

const BebidasContext = createContext();

export function BebidasProvider({ children }) {

   const [bebidas, setBebidas] = useState([]);

   const consultarBebida = async datos => {
      try {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`;
         const { data } = await axios(url);
         setBebidas(data.drinks);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <BebidasContext.Provider value={{
         consultarBebida,
         bebidas
      }}>
         {children}
      </BebidasContext.Provider>
   )
}

export default BebidasContext;
