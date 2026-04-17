import {Routes,Route} from 'react-router-dom'
import './App.css'
import FormPage from './pages/FormPage/FormPage'
import PrincipalPage from './pages/Home/PrincipalPage'
import Nutricion from './pages/NutricionPage/Nutricion'
import Consejos from './pages/Consejos/Consejos'
import Calistenia from './pages/Calistenia/Calistenia'
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
        <Route path='/Nutricion' element={<Nutricion></Nutricion>}></Route>
        <Route path='/Consejos' element={<Consejos></Consejos>}></Route>
        <Route path='/Calistenia' element={<Calistenia></Calistenia>}></Route>
      </Routes>
    </>
  )
}

export default App
