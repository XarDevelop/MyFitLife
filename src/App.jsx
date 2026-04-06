import {Routes,Route} from 'react-router-dom'
import './App.css'
import FormPage from './pages/FormPage/FormPage'
import PrincipalPage from './pages/Home/PrincipalPage'

/* <Routes>
<Route path=para la ruta element=componente>
Link to=ruta
 */

/**
 * para Context es const {valores del value}=useContext(nombreDelContextCreado)
 */
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<FormPage></FormPage>}></Route>
        <Route path='/Home' element={<PrincipalPage></PrincipalPage>}></Route>
      </Routes>
    </>
  )
}

export default App
