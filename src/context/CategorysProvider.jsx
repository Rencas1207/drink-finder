import axios from 'axios';
import { useState, useEffect, createContext } from 'react'

const CategorysContext = createContext();

export function CategorysProvider({ children }) {
   const [categorys, setCategorys] = useState([]);


   const getCategorys = async () => {
      try {
         const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
         const { data } = await axios(url);
         setCategorys(data.drinks);
      } catch (error) {

      }
   }

   useEffect(() => {
      getCategorys();
   }, []);

   return (
      <CategorysContext.Provider value={{
         categorys
      }}>
         {children}
      </CategorysContext.Provider>
   )
}

export default CategorysContext
