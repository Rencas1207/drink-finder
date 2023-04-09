import { useState, useEffect, createContext } from 'react'

const CategorysContext = createContext();

export function CategorysProvider({ children }) {
   return (
      <CategorysContext.Provider value={{

      }}>
         {children}
      </CategorysContext.Provider>
   )
}

export default CategorysContext
