import React, { useContext } from 'react'
import './FormPage.css'
import { UsuarioContext } from '../../contexts/Usuario.context';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const { setNombre, peso, setPeso, altura, setAltura, setCantidadEjercicio } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const PaginaPrincipal = (e) => {
    e.preventDefault();
    navigate('/Home');
  }

  return (
    <div className='form-section'>
      {/* Overlay para mejorar legibilidad sobre la imagen */}
      <div className="form-overlay"></div>
      
      <div className='form-container'>
        <div className="form-header">
          <span className="form-icon"></span>
          <h1>MyFitLife</h1>
        </div>

        <form className="form-body" onSubmit={PaginaPrincipal}>
          <div className="form-group">
            <label htmlFor="name">
                <h4>Nombre</h4>
            </label>
            <input 
              id="name"
              onChange={(e) => { setNombre(e.target.value) }} 
              type="text" 
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="peso">
              <h4>Peso (kg)</h4>
            </label>
            <input 
              id="peso"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (val > 0 && val <= 300) {
                  setPeso(val);
                }
              }} 
              type="number" 
              placeholder="Ej: 70"
              min="1"
              max="300"
              step="0.1"
              required
            />
            <span className="input-hint">Entre 1 y 300 kg</span>
          </div>

          <div className="form-group">
            <label htmlFor="altura">
              <h4>Altura (metros)</h4>
            </label>
            <input 
              id="altura"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (val > 0 && val <= 3) {
                  setAltura(val);
                }
              }} 
              type="number" 
              placeholder="Ej: 1.75"
              min="0.1"
              max="3"
              step="0.01"
              required
            />
            <span className="input-hint">Formato: 1.75 (metros)</span>
          </div>

          <div className="form-group">
            <label htmlFor="ejercicio">
              <span className="label-icon">🏃</span>
              <h4>¿Días de ejercicio por semana?</h4>
            </label>
            <select 
              id="ejercicio"
              onChange={(e) => { setCantidadEjercicio(parseInt(e.target.value)) }}
              defaultValue="0"
            >
              <option value="0">0 días (Sedentario)</option>
              <option value="1">1 día</option>
              <option value="2">2 días</option>
              <option value="3">3 días</option>
              <option value="4">4 días</option>
              <option value="5">5 días</option>
              <option value="6">6 días</option>
              <option value="7">7 días (Todos los días)</option>
            </select>
          </div>
          <button type="submit" className="btn-terminar">
            Empezar
          </button>
        </form>
      </div>
    </div>
  )
}