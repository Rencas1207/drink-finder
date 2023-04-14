import { Image, Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

   const { modal, handleModalClick, receta, setReceta, loading } = useBebidas();

   console.log(receta);

   const showIngredientes = () => {
      let ingredientes = [];
      for (let i = 1; i < 16; i++) {
         if (receta[`strIngredient${i}`]) {
            ingredientes.push(
               <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
            )
         }
      }

      return ingredientes
   }

   return (
      !loading && <Modal show={modal} onHide={() => {
         handleModalClick();
      }}>
         <Image
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`}
         />
         <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div className="p-3">
               <h2>Instrucciones</h2>
               {receta.strInstructions}
               <h2>Ingredientes y cantidades</h2>
               {showIngredientes()}

            </div>
         </Modal.Body>
      </Modal>
   )
}

export default ModalBebida