import axios from 'axios';
import { useState, useEffect, createContext } from 'react'

const BebidasContext = createContext();

export function BebidasProvider({ children }) {


   return (
      <BebidasContext.Provider value={{

      }}>
         {children}
      </BebidasContext.Provider>
   )
}

export default BebidasContext;
