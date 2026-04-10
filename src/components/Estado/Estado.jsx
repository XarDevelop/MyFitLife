import { useContext, useEffect , useState} from 'react'
import './Estado.css'
import { UsuarioContext } from '../../contexts/Usuario.context'

export default function Estado() {
    const {nombre,peso,altura,cantidadEjercicio}=useContext(UsuarioContext);
    const [mensaje,setMensaje]=useState(false)
    const [resultadoCalculo,setResultadoCalculo]=useState(0);
    const [valorIMC,setValorIMC]=useState('');


    const DeterminadorMarcadorIMC=()=>{
        var respuesta=peso/(altura*altura);
        respuesta=Math.round(respuesta,3)
        setResultadoCalculo(respuesta);
        if(respuesta<18.5) setValorIMC('Bajo Peso');
        if(respuesta>=18.5 && respuesta<25)setValorIMC('Peso Saludable');
        if(respuesta>=25 && respuesta<30)setValorIMC('Sobre Peso');
        if(respuesta>=30)setValorIMC('Obesidad')
    }

    useEffect(()=>{
        
        DeterminadorMarcadorIMC();
        if(nombre!='' && nombre!=null &&
            peso!=0 && peso!=null && peso>0 &&
            altura!=0 && altura!=null && altura>0
        ){
            setMensaje(true)
            
        }
    },[])
  return (
    <div className='informe-salud'>
        <h3>Estado de Salud:</h3>
        <h4>{mensaje}</h4>
        {mensaje && (<h4>
            Hola {nombre} <br />
            Peso Actual:{peso}kg<br />
            Altura:{altura}m <br />
Dias de entranamiento a la semana:{cantidadEjercicio} <br />
Indice de Masa Corporal:{resultadoCalculo} <br />
            Resultado:<strong>{valorIMC}</strong>
        </h4>)}
        {!mensaje && (<h2>Error en la introduccion de datos</h2>)}
    </div>
  )
}
