import { useContext } from "react";
import CategorysContext from "../context/CategorysProvider";

export default function useCategorys() {
   return useContext(CategorysContext)
}
