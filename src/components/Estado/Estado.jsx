import { useContext, useEffect, useState } from 'react'
import './Estado.css'
import { UsuarioContext } from '../../contexts/Usuario.context'
import { useNavigate } from 'react-router-dom';

export default function Estado() {
  const { nombre, peso, altura, cantidadEjercicio } = useContext(UsuarioContext);
  const [mensaje, setMensaje] = useState(false)
  const [resultadoCalculo, setResultadoCalculo] = useState(0);
  const [valorIMC, setValorIMC] = useState('');
  const [colorIMC, setColorIMC] = useState('');
  const {setNombre,setPeso,setAltura,setCantidadEjercicio}=useContext(UsuarioContext);

  const navigate=useNavigate();

  const RegresarFormPage=(e)=>{
    e.preventDefault();
    setNombre('');
    setPeso(0);
    setAltura(0);
    setCantidadEjercicio(0);
    navigate('/');
  }

  const DeterminadorMarcadorIMC = () => {
    // Validar que altura no sea 0 para evitar división por cero
    if (altura <= 0) return;
    
    var respuesta = peso / (altura * altura);
    respuesta = Math.round(respuesta * 10) / 10; // Redondear a 1 decimal correctamente
    setResultadoCalculo(respuesta);
    
    if (respuesta < 18.5) {
      setValorIMC('Bajo Peso');
      setColorIMC('bajo');
    } else if (respuesta >= 18.5 && respuesta < 25) {
      setValorIMC('Peso Saludable');
      setColorIMC('saludable');
    } else if (respuesta >= 25 && respuesta < 30) {
      setValorIMC('Sobrepeso');
      setColorIMC('sobrepeso');
    } else {
      setValorIMC('Obesidad');
      setColorIMC('obesidad');
    }
  }

  useEffect(() => {
    DeterminadorMarcadorIMC();
    if (nombre !== '' && nombre != null &&
      peso !== 0 && peso != null && peso > 0 &&
      altura !== 0 && altura != null && altura > 0
    ) {
      setMensaje(true)
    }
  }, [nombre, peso, altura]) // Añadidas dependencias para recalcular si cambian

  // Obtener icono según estado
  const getIcono = () => {
    switch (colorIMC) {
      case 'bajo': return '⚖️';
      case 'saludable': return '✅';
      case 'sobrepeso': return '⚠️';
      case 'obesidad': return '🚨';
      default: return '❓';
    }
  }

  return (
    <section id="estado" className="estado-section">
      <div className="estado-header">
        <span className="estado-icon">📊</span>
        <h2>Estado de Salud</h2>
      </div>

      {mensaje ? (
        <div className="estado-card">
          <div className="usuario-info">
            <h3 className="saludo">¡Hola, <span className="nombre-usuario">{nombre}</span>! 👋</h3>
            <p className="subtitulo">Aquí está tu resumen de salud</p>
          </div>

          <div className="metricas-grid">
            <div className="metrica-box">
              <span className="metrica-icono">⚖️</span>
              <span className="metrica-valor">{peso} <small>kg</small></span>
              <span className="metrica-label">Peso Actual</span>
            </div>

            <div className="metrica-box">
              <span className="metrica-icono">📏</span>
              <span className="metrica-valor">{altura} <small>m</small></span>
              <span className="metrica-label">Altura</span>
            </div>

            <div className="metrica-box">
              <span className="metrica-icono">🏃</span>
              <span className="metrica-valor">{cantidadEjercicio} <small>días</small></span>
              <span className="metrica-label">Entrenamiento/semana</span>
            </div>

            <div className="metrica-box imc-box">
              <span className="metrica-icono">🧮</span>
              <span className="metrica-valor">{resultadoCalculo}</span>
              <span className="metrica-label">IMC Calculado</span>
            </div>
          </div>

          <div className={`resultado-imc ${colorIMC}`}>
            <span className="resultado-icono">{getIcono()}</span>
            <div className="resultado-texto">
              <span className="resultado-label">Clasificación IMC:</span>
              <strong className="resultado-valor">{valorIMC}</strong>
            </div>
          </div>

          {/* Barra visual de IMC */}
          <div className="imc-visual-bar">
            <div className="imc-rangos">
              <span className="rango bajo">Bajo</span>
              <span className="rango saludable">Saludable</span>
              <span className="rango sobrepeso">Sobrepeso</span>
              <span className="rango obesidad">Obesidad</span>
            </div>
            <div className="imc-barra-container">
              <div 
                className={`imc-indicador ${colorIMC}`} 
                style={{ left: `${Math.min(Math.max((resultadoCalculo / 40) * 100, 0), 100)}%` }}
              ></div>
            </div>
            <div className="imc-numeros">
              <span>16</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40+</span>
            </div>
          </div>
          <div className="estado-error">
          <h3>Desea ingresar datos nuevos?</h3>
          <button className="btn-completar" onClick={RegresarFormPage}>Agregar datos nuevos</button>
        </div>
        </div>
      ) : (
        <div className="estado-error">
          <span className="error-icono">⚠️</span>
          <h3>Datos incompletos</h3>
          <p>Por favor, introduce tu nombre, peso y altura para ver tu estado de salud.</p>
          <button className="btn-completar" onClick={RegresarFormPage}>Completar datos →</button>
        </div>
      )}
    </section>
  )
}