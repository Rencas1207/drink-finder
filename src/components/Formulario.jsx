import React from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'

const Formulario = () => {
   return (
      <Form>
         <Row>
            <Col md={6}>
               <Form.Group className='mb-3'>
                  <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>
                  <Form.Control
                     id="name"
                     type='text'
                     placeholder='Ej: Tequila, Vodka, etc'
                     name="name"
                  />
               </Form.Group>
            </Col>
            <Col md={6}>
               <Form.Group className='mb-3'>
                  <Form.Label htmlFor='category'>Categoría Bebida</Form.Label>
                  <Form.Select
                     id="category"
                     name="category"
                  >
                     <option value="">- Seleccione categoría -</option>
                  </Form.Select>
               </Form.Group>
            </Col>
         </Row>

         <Button>

         </Button>
      </Form>
   )
}

export default Formulario