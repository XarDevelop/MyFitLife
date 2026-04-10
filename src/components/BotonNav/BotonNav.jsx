import { UsuarioContext } from '../../contexts/Usuario.context';
import { useContext } from 'react';
import './BotonNav.css'
import { useNavigate } from 'react-router-dom'

export default function BotonNav({dir,name}) {
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
    <div className='button-nav'>
        <button onClick={Navegar}>{name}</button>
    </div>
  )
}
