import { UsuarioContext } from '../../contexts/Usuario.context';
import { useContext } from 'react';
import './ButtonExit.css'
import { useNavigate } from 'react-router-dom'

export default function ButtonExit({dir}) {
    const {setNombre,setPeso,setAltura,setCantidadEjercicio}=useContext(UsuarioContext);
    const navigate=useNavigate();
    const Navegar=(e)=>{
        e.preventDefault();
        setNombre('');
        setPeso(0);
        setAltura(0);
        setCantidadEjercicio(0);
        navigate(dir);
    }
  return (
    <div className='button-exit'>
        <button onClick={Navegar}>Atras</button>
    </div>
  )
}
