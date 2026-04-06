import React, { useContext} from 'react'
import './FormPage.css'
import { UsuarioContext } from '../../contexts/Usuario.context';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
    const {setNombre,peso,setPeso,altura,setAltura,setCantidadEjercicio}=useContext(UsuarioContext);
    const navigate=useNavigate();
    
    const PaginaPrincipal=(e)=>{
        e.preventDefault();
        navigate('/Home');
    }

  return (
    <div className='form-section'>
        <div className='form-container'>
            <h1>MyFitLife</h1>
            <label htmlFor="name">Nombre</label><input onClick={(e)=>{setNombre(e.target.value)}} type="text" />
            <label htmlFor="peso">Peso</label><input onClick={(e)=>{if(peso()>999 || peso()<1){e.preventDefault()}else{setPeso(e.target.value);console.log(e)}}} type="number" />
            <label htmlFor="altura">Altura</label><input onClick={(e)=>{if(altura.length()>3){e.preventDefault()}else{setAltura(e.target.value);console.log(e)}}} type="number" />
            <h3>Cuantos dias haces ejercicios a la semana?</h3>
                <select onChange={(e)=>{setCantidadEjercicio(parseInt(e.target.value))}} >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            
            <button onClick={PaginaPrincipal}>Terminar</button>
        </div>
    </div>
  )
}
