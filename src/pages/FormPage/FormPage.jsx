import React, { useContext } from 'react'
import './FormPage.css'
import { UsuarioContext } from '../../contexts/Usuario.context';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const { setNombre, setPeso, setAltura, setCantidadEjercicio } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const PaginaPrincipal = (e) => {
    e.preventDefault();
    navigate('/Home');
  }

  return (
    <div className='form-section'>
      {/* Fondo con overlay sutil */}
      <div className="form-overlay"></div>
      
      <div className='form-container'>
        {/* Header con icono/logo */}
        <div className="form-header">
          <div className="form-logo">
            <span className="logo-icon">💪</span>
          </div>
          <h1>MyFitLife</h1>
          <p className="form-subtitle">Completa tu perfil para comenzar</p>
        </div>

        <form className="form-body" onSubmit={PaginaPrincipal}>
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="name">
              <span className="label-icon">👤</span>
              Nombre
            </label>
            <input 
              id="name"
              onChange={(e) => setNombre(e.target.value)} 
              type="text" 
              placeholder="¿Cómo te llamas?"
              required
            />
          </div>

          {/* Peso y Altura en grid */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="peso">
                <span className="label-icon">⚖️</span>
                Peso
              </label>
              <div className="input-wrapper">
                <input 
                  id="peso"
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val > 0 && val <= 300) setPeso(val);
                  }} 
                  type="number" 
                  placeholder="70"
                  min="1"
                  max="300"
                  step="0.1"
                  required
                />
                <span className="input-unit">kg</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="altura">
                <span className="label-icon">📏</span>
                Altura
              </label>
              <div className="input-wrapper">
                <input 
                  id="altura"
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val > 0 && val <= 3) setAltura(val);
                  }} 
                  type="number" 
                  placeholder="1.75"
                  min="0.1"
                  max="3"
                  step="0.01"
                  required
                />
                <span className="input-unit">m</span>
              </div>
            </div>
          </div>

          {/* Días de ejercicio */}
          <div className="form-group">
            <label htmlFor="ejercicio">
              <span className="label-icon">🏃</span>
              ¿Días de ejercicio por semana?
            </label>
            <select 
              id="ejercicio"
              onChange={(e) => setCantidadEjercicio(parseInt(e.target.value))}
              defaultValue="0"
            >
              <option value="0">0 días — Sedentario</option>
              <option value="1">1 día</option>
              <option value="2">2 días</option>
              <option value="3">3 días</option>
              <option value="4">4 días</option>
              <option value="5">5 días</option>
              <option value="6">6 días</option>
              <option value="7">7 días — Todos los días</option>
            </select>
          </div>

          <button type="submit" className="btn-terminar">
            <span>Comenzar mi viaje</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  )
}