import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListBebidas from './components/ListBebidas'
import { BebidasProvider } from './context/BebidasProvider'
import { CategorysProvider } from './context/CategorysProvider'

function App() {

  return (
    <CategorysProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />

          <ListBebidas />
        </Container>
      </BebidasProvider>
    </CategorysProvider>
  )
}

export default App
