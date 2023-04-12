import React, { useState } from 'react'
import { Button, Col, Form, Row, Alert } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';
import useCategorys from '../hooks/useCategorys'

const Formulario = () => {
   const { categorys } = useCategorys();
   const { consultarBebida } = useBebidas();

   const [alerta, setAlerta] = useState('');
   const [search, setSearch] = useState({
      name: '',
      category: ''
   });

   const handleSubmit = e => {
      e.preventDefault();

      if (Object.values(search).includes('')) {
         setAlerta('Todos los campos obligatorios');
         return;
      }
      setAlerta('');
      consultarBebida(search);
   }

   return (
      <Form onSubmit={handleSubmit}>
         {
            alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>
         }
         <Row>
            <Col md={6}>
               <Form.Group className='mb-3'>
                  <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>
                  <Form.Control
                     id="name"
                     type='text'
                     placeholder='Ej: Tequila, Vodka, etc'
                     name="name"
                     value={search.name}
                     onChange={e => setSearch({
                        ...search,
                        [e.target.name]: e.target.value
                     })}
                  />
               </Form.Group>
            </Col>
            <Col md={6}>
               <Form.Group className='mb-3'>
                  <Form.Label htmlFor='category'>Categoría Bebida</Form.Label>
                  <Form.Select
                     id="category"
                     name="category"
                     value={search.category}
                     onChange={e => setSearch({
                        ...search,
                        [e.target.name]: e.target.value
                     })}
                  >
                     <option value="">- Seleccione categoría -</option>
                     {
                        categorys?.map(category => (
                           <option
                              key={category.strCategory}
                              value={category.strCategory}>
                              {category.strCategory}
                           </option>
                        ))
                     }
                  </Form.Select>
               </Form.Group>
            </Col>
         </Row>

         <Row className='justify-content-end'>
            <Col md={3}>
               <Button
                  variant='danger'
                  className="w-100 text-uppercase"
                  type='submit'
               >
                  Buscar bebidas
               </Button>
            </Col>
         </Row>
      </Form>
   )
}

export default Formulario