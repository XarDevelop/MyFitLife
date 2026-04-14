import { useState } from 'react';
import './Nutricion.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

// ============================================
// DATOS ESTÁTICOS - Aquí están todas las listas
// ============================================

const micronutrientes = [
  {
    id: 1,
    nombre: 'Hierro (Fe)',
    funcion: 'Transporte de oxígeno en sangre, producción de energía celular',
    fuentes: ['Carnes rojas', 'Hígado', 'Espinacas', 'Lentejas', 'Cereales fortificados'],
    tipo: 'Mineral',
    icono: '🩸'
  },
  {
    id: 2,
    nombre: 'Calcio (Ca)',
    funcion: 'Huesos y dientes fuertes, contracción muscular, coagulación sanguínea',
    fuentes: ['Lácteos', 'Brócoli', 'Almendras', 'Sardinas con hueso', 'Tofu'],
    tipo: 'Mineral',
    icono: '🦴'
  },
  {
    id: 3,
    nombre: 'Potasio (K)',
    funcion: 'Equilibrio de líquidos, función nerviosa y muscular, presión arterial',
    fuentes: ['Plátanos', 'Patatas', 'Aguacate', 'Espinacas', 'Melón', 'Frijoles'],
    tipo: 'Mineral',
    icono: '⚡'
  },
  {
    id: 4,
    nombre: 'Magnesio (Mg)',
    funcion: '+300 reacciones bioquímicas, relajación muscular, sueño, energía',
    fuentes: ['Nueces', 'Semillas', 'Cacao', 'Legumbres', 'Pescado', 'Aguacate'],
    tipo: 'Mineral',
    icono: '🧘'
  },
  {
    id: 5,
    nombre: 'Zinc (Zn)',
    funcion: 'Sistema inmune, cicatrización, crecimiento, metabolismo',
    fuentes: ['Ostras', 'Carne', 'Semillas de calabaza', 'Garbanzos', 'Nueces'],
    tipo: 'Mineral',
    icono: '🛡️'
  },
  {
    id: 6,
    nombre: 'Vitamina C',
    funcion: 'Inmunidad, colágeno, absorción de hierro, antioxidante',
    fuentes: ['Cítricos', 'Pimientos', 'Kiwi', 'Fresa', 'Brócoli'],
    tipo: 'Vitamina',
    icono: '🍊'
  },
  {
    id: 7,
    nombre: 'Vitamina D',
    funcion: 'Huesos fuertes, inmunidad, absorción de calcio',
    fuentes: ['Sol (sintetiza)', 'Pescado graso', 'Yemas', 'Hongos'],
    tipo: 'Vitamina',
    icono: '☀️'
  },
  {
    id: 8,
    nombre: 'Vitamina B12',
    funcion: 'Energía, función nerviosa, formación de glóbulos rojos',
    fuentes: ['Carnes', 'Pescado', 'Lácteos', 'Huevos'],
    tipo: 'Vitamina',
    icono: '🔋'
  }
];

const macronutrientes = [
  {
    id: 1,
    nombre: 'Proteínas',
    funcion: 'Construcción muscular, enzimas, hormonas, reparación tejidos',
    fuentes: ['Pollo', 'Pescado', 'Huevos', 'Tofu', 'Lentejas', 'Quinoa', 'Yogur griego'],
    tipo: 'Macronutriente',
    icono: '💪',
    recomendacion: '1.6-2.2g por kg de peso (atletas)'
  },
  {
    id: 2,
    nombre: 'Carbohidratos',
    funcion: 'Energía principal del cuerpo, función cerebral, reserva glucógeno',
    fuentes: ['Arroz', 'Pasta integral', 'Avena', 'Frutas', 'Verduras', 'Pan integral'],
    tipo: 'Macronutriente',
    icono: '🌾',
    recomendacion: '45-65% de calorías totales'
  },
  {
    id: 3,
    nombre: 'Grasas Saludables',
    funcion: 'Energía de reserva, absorción vitaminas, hormonas, cerebro',
    fuentes: ['Aguacate', 'Aceite de oliva', 'Frutos secos', 'Pescado graso', 'Semillas'],
    tipo: 'Macronutriente',
    icono: '🥑',
    recomendacion: '20-35% de calorías totales'
  }
];

const suplementos = [
  {
    id: 1,
    nombre: 'Creatina',
    funcion: 'Energía rápida para músculos, rendimiento deportivo, fuerza',
    fuentes: ['Carnes rojas', 'Pescado (cantidades pequeñas)', 'Suplementación común'],
    tipo: 'Compuesto',
    icono: '⚡',
    nota: 'Mayormente se obtiene por suplementación'
  },
  {
    id: 2,
    nombre: 'Omega-3',
    funcion: 'Salud cerebral, antiinflamatorio, cardiovascular, vista',
    fuentes: ['Salmón', 'Sardinas', 'Nueces', 'Chía', 'Linaza'],
    tipo: 'Ácido graso',
    icono: '🧠'
  },
  {
    id: 3,
    nombre: 'Fibra',
    funcion: 'Digestión, control azúcar, saciedad, microbioma intestinal',
    fuentes: ['Legumbres', 'Avena', 'Frutas', 'Verduras', 'Cereales integrales'],
    tipo: 'Carbohidrato complejo',
    icono: '🌿'
  }
];

const glosario = [
  { termino: 'Macronutriente', definicion: 'Nutrientes que el cuerpo necesita en grandes cantidades: proteínas, carbohidratos y grasas.' },
  { termino: 'Micronutriente', definicion: 'Nutrientes necesarios en pequeñas cantidades pero vitales: vitaminas y minerales.' },
  { termino: 'Metabolismo', definicion: 'Conjunto de reacciones químicas que ocurren en las células para mantener la vida.' },
  { termino: 'Homeostasis', definicion: 'Equilibrio interno del cuerpo pese a cambios externos.' },
  { termino: 'Biodisponibilidad', definicion: 'Proporción de nutriente que el cuerpo puede absorber y utilizar.' },
  { termino: 'Glucógeno', definicion: 'Reserva de carbohidratos almacenada en músculos e hígado.' },
  { termino: 'Aminoácidos', definicion: 'Bloques constructores de las proteínas, hay 9 esenciales.' },
  { termino: 'Electrolitos', definicion: 'Minerales con carga eléctrica: sodio, potasio, magnesio, calcio.' },
  { termino: 'Antioxidante', definicion: 'Sustancia que protege las células del daño oxidativo.' },
  { termino: 'Índice Glucémico', definicion: 'Medida de qué tan rápido sube el azúcar en sangre un alimento.' }
];



// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Nutricion = () => {
  const navigate=useNavigate();
  // TODO: Implementar navegación real según necesites
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // TODO: Implementar lógica de historial para el botón atrás
  const handleGoBack = () => {
    navigate('/Home')
    setSeccionActiva('inicio');
  };

  // TODO: Implementar cálculo real de calorías
  const handleCalcularCalorias = (e) => {
    e.preventDefault();
    // TU LÓGICA AQUÍ: fórmula Harris-Benedict o Mifflin-St Jeor
    console.log('Calcular calorías - implementa tu lógica');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSeccionActiva(id);
  };

  return (
    <div className="nutricion-container">
      {/* ============================================
          BOTÓN ATRÁS (Flotante)
          ============================================ */}
      <button className="btn-back" onClick={handleGoBack}>
        ← Volver
      </button>

      {/* ============================================
          MENÚ DE NAVEGACIÓN
          ============================================ */}
      <nav className="nav-menu">
        <div className="nav-brand">MyFitLife</div>
        <ul className="nav-links">
          <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
          <li><a href="#macronutrientes" onClick={() => scrollToSection('macronutrientes')}>Macronutrientes</a></li>
          <li><a href="#micronutrientes" onClick={() => scrollToSection('micronutrientes')}>Micronutrientes</a></li>
          <li><a href="#suplementos" onClick={() => scrollToSection('suplementos')}>Suplementos</a></li>
          <li><a href="#calculadora" onClick={() => scrollToSection('calculadora')}>Calculadora</a></li>
          <li><a href="#glosario" onClick={() => scrollToSection('glosario')}>Glosario</a></li>
        </ul>
      </nav>

      {/* ============================================
          PORTADA (Hero Section)
          TODO: Agrega tu imagen de fondo en el CSS
          ============================================ */}
      <section id="inicio" className="hero-section-nutricion">
        <div className="hero-overlay">
          <h1>Nutrición</h1>
          <span className="hero-subtitle">Tu guía completa para una alimentación balanceada</span>
          <p className="hero-description">
            Descubre todo sobre nutrientes, desde los macronutrientes esenciales 
            hasta los micronutrientes que mantienen tu cuerpo funcionando óptimamente.
          </p>
          <button className="btn-primary" onClick={() => scrollToSection('macronutrientes')}>
            Explorar Nutrientes
          </button>
        </div>
        {/* TODO: Agrega tu imagen de fondo en CSS: .hero-section { background-image: url('tu-imagen.jpg') } */}
      </section>

      {/* ============================================
          DASHBOARD - MACRONUTRIENTES
          ============================================ */}
      <section id="macronutrientes" className="section macronutrientes-section">
        <div className="section-header">
          <h2>🍽️ Macronutrientes</h2>
          <p>La base de tu alimentación - necesitas estos en grandes cantidades</p>
        </div>
        
        <div className="cards-grid">
          {macronutrientes.map(item => (
            <div key={item.id} className="nutrient-card macro-card">
              <div className="card-icon">{item.icono}</div>
              <h3>{item.nombre}</h3>
              <span className="card-type">{item.tipo}</span>
              <p className="card-function">{item.funcion}</p>
              <div className="card-fuentes">
                <strong>Fuentes:</strong>
                <ul>
                  {item.fuentes.map((fuente, idx) => (
                    <li key={idx}>{fuente}</li>
                  ))}
                </ul>
              </div>
              {item.recomendacion && (
                <span className="card-badge">{item.recomendacion}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          MICRONUTRIENTES (con fondo sutil)
          ============================================ */}
      <section id="micronutrientes" className="section micronutrientes-section with-bg">
        <div className="section-header">
          <h2>🔬 Micronutrientes</h2>
          <p>Pequeñas cantidades, gran impacto en tu salud</p>
        </div>

        <div className="subsection">
          <h3>⛏️ Minerales Esenciales</h3>
          <div className="cards-grid small-cards">
            {micronutrientes.filter(m => m.tipo === 'Mineral').map(item => (
              <div key={item.id} className="nutrient-card micro-card">
                <div className="card-icon small">{item.icono}</div>
                <h4>{item.nombre}</h4>
                <p>{item.funcion}</p>
                <div className="mini-fuentes">
                  {item.fuentes.slice(0, 3).join(', ')}...
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <h3>💊 Vitaminas Clave</h3>
          <div className="cards-grid small-cards">
            {micronutrientes.filter(m => m.tipo === 'Vitamina').map(item => (
              <div key={item.id} className="nutrient-card vitamin-card">
                <div className="card-icon small">{item.icono}</div>
                <h4>{item.nombre}</h4>
                <p>{item.funcion}</p>
                <div className="mini-fuentes">
                  {item.fuentes.slice(0, 3).join(', ')}...
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SUPLEMENTOS Y COMPUESTOS
          ============================================ */}
      <section id="suplementos" className="section suplementos-section">
        <div className="section-header">
          <h2>⚡ Suplementos y Compuestos Especiales</h2>
          <p>Para objetivos específicos de rendimiento y salud</p>
        </div>

        <div className="cards-grid">
          {suplementos.map(item => (
            <div key={item.id} className="nutrient-card suplemento-card">
              <div className="card-icon">{item.icono}</div>
              <h3>{item.nombre}</h3>
              <span className="card-type tag">{item.tipo}</span>
              <p className="card-function">{item.funcion}</p>
              <div className="card-fuentes">
                <strong>Obtención:</strong>
                <ul>
                  {item.fuentes.map((fuente, idx) => (
                    <li key={idx}>{fuente}</li>
                  ))}
                </ul>
              </div>
              {item.nota && <p className="card-note">💡 {item.nota}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          CALCULADORA DE CALORÍAS
          TODO: Implementar la lógica de cálculo
          ============================================ */}
      <section id="calculadora" className="section calculadora-section with-bg-alt">
        <div className="section-header">
          <h2>🧮 Calculadora de Calorías</h2>
          <p>Estima tus necesidades calóricas diarias</p>
        </div>

        <div className="calculator-container">
          <form className="calculator-form" onSubmit={handleCalcularCalorias}>
            <div className="form-row">
              <div className="form-group">
                <label>Peso (kg)</label>
                <input type="number" placeholder="Ej: 70" required />
              </div>
              <div className="form-group">
                <label>Altura (cm)</label>
                <input type="number" placeholder="Ej: 175" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Edad</label>
                <input type="number" placeholder="Ej: 25" required />
              </div>
              <div className="form-group">
                <label>Sexo</label>
                <select required>
                  <option value="">Seleccionar</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Nivel de actividad</label>
              <select required>
                <option value="">Selecciona tu nivel</option>
                <option value="sedentario">Sedentario (poco o ningún ejercicio)</option>
                <option value="ligero">Ligero (1-3 días/semana)</option>
                <option value="moderado">Moderado (3-5 días/semana)</option>
                <option value="activo">Activo (6-7 días/semana)</option>
                <option value="muy-activo">Muy activo (trabajo físico + ejercicio)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Objetivo</label>
              <select required>
                <option value="">Selecciona objetivo</option>
                <option value="mantener">Mantener peso</option>
                <option value="perder">Perder grasa</option>
                <option value="ganar">Ganar músculo</option>
              </select>
            </div>

            {/* TODO: Aquí mostrarás el resultado del cálculo */}
            <button type="submit" className="btn-calculate">
              Calcular Calorías
            </button>

            {/* TODO: Implementar div para mostrar resultados */}
            <div className="resultado-placeholder">
              <p>El resultado aparecerá aquí después de implementar la lógica</p>
            </div>
          </form>

          <div className="info-sidebar">
            <h4>📋 Fórmulas comunes:</h4>
            <ul>
              <li><strong>Harris-Benedict:</strong> Clásica y probada</li>
              <li><strong>Mifflin-St Jeor:</strong> Más precisa actualmente</li>
              <li><strong>Katch-McArdle:</strong> Si conoces % grasa</li>
            </ul>
            <p className="disclaimer">
              *Esta calculadora es orientativa. Consulta un profesional para planes personalizados.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          GLOSARIO
          ============================================ */}
      <section id="glosario" className="section glosario-section">
        <div className="section-header">
          <h2>📚 Glosario Nutricional</h2>
          <p>Entiende los términos técnicos de forma sencilla</p>
        </div>

        <div className="glosario-grid">
          {glosario.map((item, index) => (
            <div key={index} className="glosario-card">
              <h4>{item.termino}</h4>
              <p>{item.definicion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer></Footer>
    </div>
  );
};

export default Nutricion;