import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategorysProvider } from './context/CategorysProvider'

function App() {

  return (
    <CategorysProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>
      <Container className='mt-5'>
        <Formulario />
      </Container>
    </CategorysProvider>
  )
}

export default App
