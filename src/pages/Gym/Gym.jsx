import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Dumbbell, 
  TrendingUp, 
  Target, 
  Award, 
  BookOpen, 
  Grid, 
  Home,
  Info,
  Zap,
  Activity,
  Layers
} from 'lucide-react';
import Footer from "../../components/Footer/Footer"

// ==========================================
// HERO SECTION
// ==========================================
function HeroSection({ onNavigate }) {
  return (
    <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white overflow-hidden w-full">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rotate-45"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Dumbbell className="w-5 h-5" />
              <span className="font-medium">Entrenamiento con Pesas</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Construye tu
              <span className="block text-green-100">Fuerza</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-green-50 mb-6 sm:mb-8 max-w-lg">
              Rutinas completas con mancuernas, barras y máquinas. 
              Desarrolla cada grupo muscular con técnica y progresión.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('ejercicios')}
                className="flex items-center gap-2 bg-white text-green-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-50 transition-colors"
              >
                <Grid className="w-5 h-5" />
                Ver Ejercicios
              </button>
              <button 
                onClick={() => onNavigate('glosario')}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/30 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Glosario
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <div className="relative scale-90 sm:scale-100">
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/20">
                <Dumbbell className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 text-white/80" />
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-yellow-400 text-yellow-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold shadow-lg text-sm sm:text-base">
                15
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold shadow-lg text-sm sm:text-base">
                Grupos Musculares
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f0fdf4"/>
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// GLOSARIO DE TÉRMINOS
// ==========================================
const terminosGlosario = [
  {
    termino: "Hipertrofia",
    definicion: "Aumento del tamaño de las células musculares mediante el entrenamiento de resistencia progresiva."
  },
  {
    termino: "RM (Repetición Máxima)",
    definicion: "Máximo peso que puedes levantar en un ejercicio determinado para una cantidad específica de repeticiones."
  },
  {
    termino: "Serie",
    definicion: "Grupo de repeticiones consecutivas de un ejercicio, generalmente separadas por descanso."
  },
  {
    termino: "Repetición",
    definicion: "Una ejecución completa de un movimiento, desde la posición inicial hasta la final."
  },
  {
    termino: "Descanso",
    definicion: "Periodo de recuperación entre series, crucial para la recuperación del músculo y el sistema nervioso."
  },
  {
    termino: "Volumen",
    definicion: "Cantidad total de trabajo realizado, calculado como series x repeticiones x peso."
  },
  {
    termino: "Intensidad",
    definicion: "Porcentaje de la carga máxima utilizada en un ejercicio. Mayor intensidad implica menos repeticiones."
  },
  {
    termino: "Frecuencia",
    definicion: "Número de veces que se entrena un grupo muscular por semana."
  },
  {
    termino: "Progresión",
    definicion: "Aumento gradual de la carga, repeticiones o series con el tiempo para continuar estimulando el músculo."
  },
  {
    termino: "Falla Muscular",
    definicion: "Punto en el que no puedes realizar más repeticiones con la técnica correcta."
  },
  {
    termino: "Superserie",
    definicion: "Dos ejercicios realizados consecutivamente sin descanso entre ellos."
  },
  {
    termino: "Drop Set",
    definicion: "Realizar repeticiones hasta el fallo, reducir el peso y continuar inmediatamente."
  },
  {
    termino: "Agarre Neutro",
    definicion: "Posición de las manos con las palmas enfrentadas entre sí, reduciendo la tensión en los hombros."
  },
  {
    termino: "Agarre Prono",
    definicion: "Palmas hacia abajo, típico en press de banca y dominadas."
  },
  {
    termino: "Agarre Supino",
    definicion: "Palmas hacia arriba, mayor activación de bíceps en ejercicios de espalda."
  },
  {
    termino: "Cadena Cinética Cerrada",
    definicion: "Ejercicio donde las extremidades están fijas (ej: sentadilla, dominada)."
  },
  {
    termino: "Cadena Cinética Abierta",
    definicion: "Ejercicio donde las extremidades se mueven libremente (ej: extensión de piernas en máquina)."
  },
  {
    termino: "Rango de Movimiento (ROM)",
    definicion: "Distancia completa que recorre una articulación durante un ejercicio."
  },
  {
    termino: "TUT (Time Under Tension)",
    definicion: "Tiempo total que el músculo permanece bajo tensión durante una serie."
  },
  {
    termino: "Mind-Muscle Connection",
    definicion: "Conexión consciente entre la mente y el músculo trabajado, mejorando la activación muscular."
  }
];

// ==========================================
// COMPONENTE GLOSARIO
// ==========================================
function Glosario({ onBack }) {
  const [busqueda, setBusqueda] = useState('');
  
  const terminosFiltrados = terminosGlosario.filter(t => 
    t.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
    t.definicion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 py-6 sm:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-green-700 hover:text-green-900 font-medium text-sm sm:text-base"
          >
            <Home className="w-5 h-5" />
            Volver al Dashboard
          </button>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Glosario de Términos</h2>
          </div>

          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Buscar término..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none text-green-900 placeholder-green-400 text-sm sm:text-base"
            />
          </div>

          <div className="grid gap-2 sm:gap-3">
            {terminosFiltrados.map((item, index) => (
              <div 
                key={index}
                className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-green-500 hover:bg-green-100 transition-colors"
              >
                <h3 className="font-bold text-green-900 text-base sm:text-lg mb-1 sm:mb-2">{item.termino}</h3>
                <p className="text-green-800 leading-relaxed text-sm sm:text-base">{item.definicion}</p>
              </div>
            ))}
          </div>

          {terminosFiltrados.length === 0 && (
            <div className="text-center py-8 text-green-600 text-sm sm:text-base">
              No se encontraron términos que coincidan con tu búsqueda.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DATOS DE GRUPOS MUSCULARES Y EJERCICIOS
// ==========================================

// Indicador de activación muscular
const ActivacionBadge = ({ nivel }) => {
  const colores = {
    directa: "bg-red-100 text-red-800 border-red-200",
    media: "bg-yellow-100 text-yellow-800 border-yellow-200",
    leve: "bg-green-100 text-green-800 border-green-200"
  };
  
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${colores[nivel] || colores.leve}`}>
      {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
    </span>
  );
};

const gruposMusculares = [
  {
    id: "cuello",
    nombre: "Cuello",
    icono: "🦒",
    descripcion: "Músculos que sostienen y mueven la cabeza",
    color: "#84cc16",
    ejercicios: {
      principiante: [
        {
          nombre: "Extensión de cuello con manos",
          equipamiento: "Peso corporal",
          descripcion: "Coloca las manos en la frente y empuja la cabeza hacia adelante mientras resistes con el cuello. Mantén 5 segundos.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Cuello", media: "Trapecio superior", leve: "Deltoides" }
        },
        {
          nombre: "Flexión lateral de cuello",
          equipamiento: "Peso corporal",
          descripcion: "Inclina la cabeza hacia un lado llevando la oreja hacia el hombro. Mantén 3 segundos. Alterna lados.",
          series: "3",
          repeticiones: "10 por lado",
          activacion: { directa: "Esternocleidomastoideo", media: "Trapecio", leve: "Escalenos" }
        }
      ],
      intermedio: [
        {
          nombre: "Extensión de cuello con disco",
          equipamiento: "Disco de peso",
          descripcion: "Acuéstate boca abajo en banco plano con la cabeza fuera del borde. Coloca un disco liviano en la nuca. Eleva la cabeza hasta alineación neutral.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Cuello posterior", media: "Trapecio superior", leve: "Romboides" }
        },
        {
          nombre: "Encogimientos con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Sostén la barra detrás de la espalda con agarre prono. Eleva los hombros hacia las orejas contrayendo el trapecio superior y cuello.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Trapecio superior", media: "Cuello", leve: "Deltoides" }
        }
      ],
      avanzado: [
        {
          nombre: "Puente de cuello",
          equipamiento: "Banco plano",
          descripcion: "Acuéstate boca arriba con la cabeza colgando del borde. Eleva el cuerpo usando solo la fuerza del cuello hasta formar un puente.",
          series: "3",
          repeticiones: "8-10",
          activacion: { directa: "Cuello completo", media: "Trapecio", leve: "Core" }
        },
        {
          nombre: "Extensión con arnés",
          equipamiento: "Arnés de cabeza + peso",
          descripcion: "Usa un arnés de cabeza con cadena y disco. Acuéstate boca abajo y eleva la cabeza contra la resistencia.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Cuello posterior", media: "Trapecio superior", leve: "Romboides" }
        }
      ]
    }
  },
  {
    id: "trapecio",
    nombre: "Trapecio",
    icono: "🔺",
    descripcion: "Músculo en forma de diamante que conecta el cuello con la espalda media",
    color: "#a3e635",
    ejercicios: {
      principiante: [
        {
          nombre: "Encogimientos con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas a los lados. Eleva los hombros hacia las orejas contrayendo el trapecio. Baja controladamente.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Trapecio superior", media: "Trapecio medio", leve: "Deltoides" }
        },
        {
          nombre: "Encogimientos en máquina Smith",
          equipamiento: "Máquina Smith",
          descripcion: "Coloca la barra a la altura de los muslos. Sostén con agarre prono. Encoge los hombros hacia arriba sosteniendo 2 segundos arriba.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Trapecio superior", media: "Trapecio medio", leve: "Romboides" }
        }
      ],
      intermedio: [
        {
          nombre: "Encogimientos con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Sostén la barra frente a los muslos con agarre prono. Eleva los hombros lo más alto posible, sosteniendo la contracción 2 segundos.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Trapecio superior", media: "Trapecio medio", leve: "Deltoides frontal" }
        },
        {
          nombre: "Farmer's Walk",
          equipamiento: "Mancuernas pesadas",
          descripcion: "Sostén mancuernas pesadas a los lados. Camina 30-40 metros manteniendo los hombros elevados y escápulas retraídas.",
          series: "3",
          repeticiones: "30-40m",
          activacion: { directa: "Trapecio", media: "Antebrazo", leve: "Core" }
        }
      ],
      avanzado: [
        {
          nombre: "Encogimientos con barra detrás",
          equipamiento: "Barra olímpica",
          descripcion: "Sostén la barra detrás de la espalda con agarre prono. Encoge los hombros hacia atrás y arriba, enfocándote en el trapecio medio.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Trapecio medio", media: "Trapecio superior", leve: "Romboides" }
        },
        {
          nombre: "Remo al mentón con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Sostén la barra con agarre cerrado. Tira la barra hacia el mentón elevando los codos lo más alto posible. Excelente para trapecio superior.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Trapecio superior", media: "Deltoides lateral", leve: "Bíceps" }
        }
      ]
    }
  },
  {
    id: "hombro",
    nombre: "Hombro (Deltoides)",
    icono: "💪",
    descripcion: "Tres cabezas: frontal (empuje), lateral (elevación), trasera (extensión)",
    color: "#22c55e",
    ejercicios: {
      principiante: [
        {
          nombre: "Press de hombros con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "Sentado con respaldo, mancuernas a la altura de los hombros. Empuja hacia arriba hasta extender los brazos. Baja controladamente.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Deltoides frontal", media: "Deltoides lateral", leve: "Tríceps" }
        },
        {
          nombre: "Elevaciones laterales con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas a los lados. Eleva los brazos hacia los lados hasta la altura de los hombros. Codo ligeramente flexionado.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Deltoides lateral", media: "Deltoides frontal", leve: "Trapecio" }
        },
        {
          nombre: "Elevaciones frontales con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas frente a los muslos. Eleva un brazo al frente hasta la altura del hombro. Alterna o simultáneo.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Deltoides frontal", media: "Deltoides lateral", leve: "Pectoral superior" }
        }
      ],
      intermedio: [
        {
          nombre: "Press militar con barra",
          equipamiento: "Barra olímpica",
          descripcion: "De pie o sentado, barra a la altura del pecho. Empuja hacia arriba hasta extensión completa. No arquees la espalda.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Deltoides frontal", media: "Deltoides lateral", leve: "Tríceps" }
        },
        {
          nombre: "Elevaciones laterales en máquina",
          equipamiento: "Máquina de elevaciones laterales",
          descripcion: "Ajusta el asiento para que los codos queden alineados con el eje de rotación. Eleva los brazos contra la resistencia.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Deltoides lateral", media: "Deltoides trasero", leve: "Trapecio" }
        },
        {
          nombre: "Face Pull",
          equipamiento: "Polea + cuerda",
          descripcion: "Tira la cuerda hacia la cara separando las manos al final. Codos altos y hacia afuera. Excelente para deltoides trasero.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Deltoides trasero", media: "Romboides", leve: "Trapecio medio" }
        }
      ],
      avanzado: [
        {
          nombre: "Press Arnold",
          equipamiento: "Mancuernas",
          descripcion: "Sentado, inicia con mancuernas frente al pecho y palmas hacia ti. Gira las manos mientras empujas hacia arriba. Completo desarrollo deltoides.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Deltoides (todas las cabezas)", media: "Trapecio", leve: "Tríceps" }
        },
        {
          nombre: "Elevaciones laterales con cable",
          equipamiento: "Polea baja",
          descripcion: "De pie lateral a la polea, agarra el maneral con la mano lejana. Eleva el brazo hacia el lado manteniendo el codo fijo.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Deltoides lateral", media: "Deltoides trasero", leve: "Trapecio" }
        },
        {
          nombre: "Pájaro invertido en máquina",
          equipamiento: "Máquina inversa",
          descripcion: "Sentado mirando hacia la máquina, pecho apoyado. Eleva los brazos hacia atrás y afuera contrayendo el deltoides trasero.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Deltoides trasero", media: "Romboides", leve: "Trapecio medio" }
        }
      ]
    }
  },
  {
    id: "espalda",
    nombre: "Espalda",
    icono: "🔙",
    descripcion: "Dorsales, romboides, trapecio medio e inferior, y erectores espinales",
    color: "#16a34a",
    ejercicios: {
      principiante: [
        {
          nombre: "Jalón al pecho en polea",
          equipamiento: "Máquina de polea alta",
          descripcion: "Sentado con muslos fijos bajo el soporte. Agarra la barra con agarre ancho. Tira hacia abajo hasta el pecho superior.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Bíceps" }
        },
        {
          nombre: "Remo con mancuerna a una mano",
          equipamiento: "Mancuerna + banco",
          descripcion: "Apoya una rodilla y una mano en el banco. Sostén la mancuerna con la otra mano. Tira hacia el torso contrayendo la espalda.",
          series: "3",
          repeticiones: "10-12 por lado",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Bíceps" }
        },
        {
          nombre: "Pullover con mancuerna",
          equipamiento: "Mancuerna + banco plano",
          descripcion: "Acuéstate perpendicular en el banco. Sostén la mancuerna con ambas manos sobre el pecho. Baja detrás de la cabeza con brazos ligeramente flexionados.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Dorsales", media: "Pectoral", leve: "Tríceps" }
        }
      ],
      intermedio: [
        {
          nombre: "Remo con barra T",
          equipamiento: "Barra T + plataforma",
          descripcion: "Coloca el extremo de la barra en una esquina o plataforma. Carga el otro extremo. Inclínate hacia adelante y tira la barra hacia el torso.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Trapecio medio" }
        },
        {
          nombre: "Jalón con agarre cerrado",
          equipamiento: "Polea alta + barra V",
          descripcion: "Usa la barra en V. Agarre neutro. Tira hacia abajo enfocándote en contraer los dorsales. Mantén los codos cerca del cuerpo.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Bíceps" }
        },
        {
          nombre: "Remo en máquina Hammer Strength",
          equipamiento: "Máquina de remo",
          descripcion: "Ajusta el asiento para alinear el pecho con los cojines. Tira las manijas hacia atrás contrayendo los omóplatos.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Trapecio medio" }
        }
      ],
      avanzado: [
        {
          nombre: "Remo pendlay",
          equipamiento: "Barra olímpica",
          descripcion: "Barra en el suelo. Inclínate hasta que el torso esté paralelo al suelo. Tira la barra hacia el abdomen inferior. La barra vuelve al suelo entre repeticiones.",
          series: "4",
          repeticiones: "6-8",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Erectores espinales" }
        },
        {
          nombre: "Dominadas con peso",
          equipamiento: "Barra de dominadas + cinturón de peso",
          descripcion: "Añade peso con un cinturón o mochila. Agarre prono ancho. Sube hasta que la barbilla supere la barra. Control en la bajada.",
          series: "4",
          repeticiones: "6-8",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Bíceps" }
        },
        {
          nombre: "Remo con barra al abdomen",
          equipamiento: "Barra olímpica",
          descripcion: "Inclinación de 45 grados. Tira la barra hacia el abdomen inferior manteniendo los codos cerca del cuerpo. Contracción máxima de dorsales.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Dorsales", media: "Romboides", leve: "Trapecio medio" }
        }
      ]
    }
  },
  {
    id: "biceps",
    nombre: "Bíceps",
    icono: "💪",
    descripcion: "Dos cabezas: larga (cabeza externa) y corta (cabeza interna)",
    color: "#15803d",
    ejercicios: {
      principiante: [
        {
          nombre: "Curl con mancuernas alternado",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas a los lados, palmas hacia adelante. Flexiona un codo llevando la mancuerna hacia el hombro. Alterna.",
          series: "3",
          repeticiones: "10-12 por brazo",
          activacion: { directa: "Bíceps (ambas cabezas)", media: "Braquial", leve: "Antebrazo" }
        },
        {
          nombre: "Curl con barra",
          equipamiento: "Barra EZ",
          descripcion: "De pie con barra EZ, agarre supino al ancho de los hombros. Flexiona los codos llevando la barra hacia los hombros. No balancees el cuerpo.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Bíceps", media: "Braquial", leve: "Antebrazo" }
        }
      ],
      intermedio: [
        {
          nombre: "Curl martillo con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas, palmas enfrentadas (agarre neutro). Flexiona los codos manteniendo las palmas paralelas. Enfatiza braquial y cabeza larga.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Braquial", media: "Bíceps cabeza larga", leve: "Antebrazo" }
        },
        {
          nombre: "Curl en banco Scott",
          equipamiento: "Banco Scott + barra EZ",
          descripcion: "Sentado en el banco Scott con los brazos apoyados. Flexiona los codos llevando la barra hacia los hombros. Aislamiento total del bíceps.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Bíceps cabeza corta", media: "Braquial", leve: "Antebrazo" }
        },
        {
          nombre: "Curl con cable desde polea baja",
          equipamiento: "Polea baja + barra recta",
          descripcion: "De pie frente a la polea baja. Agarra la barra con agarre supino. Flexiona los codos manteniendo los codos fijos a los lados.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Bíceps", media: "Braquial", leve: "Antebrazo" }
        }
      ],
      avanzado: [
        {
          nombre: "Curl concentrado",
          equipamiento: "Mancuerna + banco",
          descripcion: "Sentado en banco, piernas abiertas. Apoya el codo interno del muslo. Flexiona la mancuerna hacia el hombro con máxima concentración.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Bíceps cabeza corta", media: "Braquial", leve: "Antebrazo" }
        },
        {
          nombre: "Curl en banco inclinado",
          equipamiento: "Mancuernas + banco inclinado",
          descripcion: "Acuéstate en banco inclinado a 45 grados. Deja que los brazos cuelguen completamente. Flexiona manteniendo los codos atrás. Máximo estiramiento.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Bíceps cabeza larga", media: "Braquial", leve: "Deltoides frontal" }
        },
        {
          nombre: "Curl 21",
          equipamiento: "Barra EZ",
          descripcion: "7 repeticiones desde abajo hasta la mitad, 7 desde la mitad arriba, y 7 completas. Máxima congestión del bíceps.",
          series: "3",
          repeticiones: "21 (7+7+7)",
          activacion: { directa: "Bíceps (ambas cabezas)", media: "Braquial", leve: "Antebrazo" }
        }
      ]
    }
  },
  {
    id: "triceps",
    nombre: "Tríceps",
    icono: "🦾",
    descripcion: "Tres cabezas: larga, lateral y medial. Responsable de la extensión del codo",
    color: "#059669",
    ejercicios: {
      principiante: [
        {
          nombre: "Extensión con mancuerna a dos manos",
          equipamiento: "Mancuerna",
          descripcion: "De pie o sentado, sostén la mancuerna con ambas manos sobre la cabeza. Flexiona los codos bajando la mancuerna detrás de la cabeza. Extiende.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Tríceps cabeza larga", media: "Tríceps lateral", leve: "Deltoides" }
        },
        {
          nombre: "Fondos en banco",
          equipamiento: "Banco plano",
          descripcion: "Sentado en el borde del banco, manos en el borde. Desplaza el cuerpo hacia adelante y baja flexionando los codos. Empuja para subir.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Tríceps", media: "Pectoral", leve: "Deltoides frontal" }
        }
      ],
      intermedio: [
        {
          nombre: "Extensión en polea alta con cuerda",
          equipamiento: "Polea alta + cuerda",
          descripcion: "De pie frente a la polea alta. Agarra la cuerda con agarre neutro. Extiende los codos separando las manos al final. Sostén la contracción.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Tríceps (todas las cabezas)", media: "Deltoides", leve: "Pectoral" }
        },
        {
          nombre: "Press francés con barra EZ",
          equipamiento: "Barra EZ + banco plano",
          descripcion: "Acuéstate en banco plano. Sostén la barra EZ con agarre cerrado sobre el pecho. Flexiona los codos llevando la barra hacia la frente. Extiende.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Tríceps cabeza larga", media: "Tríceps lateral", leve: "Deltoides" }
        },
        {
          nombre: "Patada de tríceps con mancuerna",
          equipamiento: "Mancuerna + banco plano",
          descripcion: "Apoya una rodilla y una mano en el banco. Sostén la mancuerna con la otra mano, codo a 90 grados. Extiende el codo hacia atrás.",
          series: "3",
          repeticiones: "12-15 por brazo",
          activacion: { directa: "Tríceps cabeza larga", media: "Deltoides trasero", leve: "Dorsales" }
        }
      ],
      avanzado: [
        {
          nombre: "Fondos en paralelas con peso",
          equipamiento: "Paralelas + cinturón de peso",
          descripcion: "Añade peso con cinturón. Colócate en paralelas. Baja hasta que los hombros estén por debajo de los codos. Empuja hasta extensión completa.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Tríceps", media: "Pectoral inferior", leve: "Deltoides frontal" }
        },
        {
          nombre: "Extensión con mancuerna a una mano",
          equipamiento: "Mancuerna",
          descripcion: "De pie, inclínate ligeramente. Sostén la mancuerna con un brazo extendido hacia atrás. Mantén el codo alto y extende. Aislamiento total.",
          series: "4",
          repeticiones: "10-12 por brazo",
          activacion: { directa: "Tríceps cabeza larga", media: "Deltoides trasero", leve: "Dorsales" }
        },
        {
          nombre: "Press cerrado en banco declinado",
          equipamiento: "Barra olímpica + banco declinado",
          descripcion: "Acuéstate en banco declinado. Agarre cerrado en la barra. Baja al pecho inferior. Empuja enfocándote en extender los codos.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Tríceps", media: "Pectoral inferior", leve: "Deltoides frontal" }
        }
      ]
    }
  },
  {
    id: "antebrazo",
    nombre: "Antebrazo",
    icono: "✊",
    descripcion: "Músculos responsables de la flexión y extensión de la muñeca, y agarre",
    color: "#047857",
    ejercicios: {
      principiante: [
        {
          nombre: "Curl de muñeca con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "Sentado en banco, antebrazos apoyados en los muslos con muñecas sobre las rodillas. Flexiona las muñecas hacia arriba.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Flexores del carpo", media: "Aductor del pulgar", leve: "Bíceps" }
        },
        {
          nombre: "Extensión de muñeca con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "Misma posición que el curl pero con palmas hacia abajo. Extiende las muñecas hacia arriba contrayendo los extensores.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Extensores del carpo", media: "Extensores de los dedos", leve: "Tríceps" }
        }
      ],
      intermedio: [
        {
          nombre: "Curl de muñeca con barra",
          equipamiento: "Barra recta",
          descripcion: "Sentado, antebrazos en muslos. Sostén la barra con agarre supino. Flexiona las muñecas hacia arriba. Mayor carga que con mancuernas.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Flexores del carpo", media: "Flexor superficial de los dedos", leve: "Bíceps" }
        },
        {
          nombre: "Farmer's Walk pesado",
          equipamiento: "Mancuernas pesadas",
          descripcion: "Sostén mancuernas muy pesadas a los lados. Camina 40-60 metros manteniendo agarre firme. Excelente para fuerza de agarre.",
          series: "3",
          repeticiones: "40-60m",
          activacion: { directa: "Flexores de los dedos", media: "Flexores del carpo", leve: "Trapecio" }
        }
      ],
      avanzado: [
        {
          nombre: "Curl de muñeca inverso con barra",
          equipamiento: "Barra recta",
          descripcion: "Antebrazos en muslos, agarre prono. Extiende las muñecas hacia arriba. Trabaja los extensores que son más débiles.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Extensores del carpo", media: "Extensores de los dedos", leve: "Tríceps" }
        },
        {
          nombre: "Plate Pinch",
          equipamiento: "Discos de peso",
          descripcion: "Sostén dos discos lisos juntos con los dedos (sin usar el agujero). Mantén el agarre el mayor tiempo posible. Fuerza de pinza extrema.",
          series: "3",
          repeticiones: "30-45 seg",
          activacion: { directa: "Flexores de los dedos", media: "Aductores del pulgar", leve: "Lumbricales" }
        }
      ]
    }
  },
  {
    id: "pecho",
    nombre: "Pecho",
    icono: "🫁",
    descripcion: "Pectoral mayor (superior, medio, inferior) y pectoral menor",
    color: "#065f46",
    ejercicios: {
      principiante: [
        {
          nombre: "Press de banca con mancuernas",
          equipamiento: "Mancuernas + banco plano",
          descripcion: "Acuéstate en banco plano. Mancuernas a los lados del pecho. Empuja hacia arriba hasta extensión completa. Baja controladamente.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Pectoral medio", media: "Deltoides frontal", leve: "Tríceps" }
        },
        {
          nombre: "Aperturas con mancuernas",
          equipamiento: "Mancuernas + banco plano",
          descripcion: "Acuéstate con mancuernas extendidas sobre el pecho. Abre los brazos hacia los lados con codo ligeramente flexionado. Cierra abrazando.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Pectoral medio", media: "Pectoral superior", leve: "Deltoides frontal" }
        },
        {
          nombre: "Press en máquina",
          equipamiento: "Máquina de press",
          descripcion: "Ajusta el asiento para que las manijas queden a la altura del pecho. Empuja hacia adelante hasta extensión completa.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Pectoral medio", media: "Deltoides frontal", leve: "Tríceps" }
        }
      ],
      intermedio: [
        {
          nombre: "Press de banca con barra",
          equipamiento: "Barra olímpica + banco plano",
          descripcion: "Acuéstate con los pies firmes en el suelo. Agarre al ancho de los hombros. Baja la barra al pecho medio. Empuja explosivamente.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Pectoral medio", media: "Deltoides frontal", leve: "Tríceps" }
        },
        {
          nombre: "Press inclinado con mancuernas",
          equipamiento: "Mancuernas + banco inclinado",
          descripcion: "Banco inclinado a 30-45 grados. Empuja las mancuernas desde la parte superior del pecho. Enfatiza pectoral superior.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Pectoral superior", media: "Deltoides frontal", leve: "Tríceps" }
        },
        {
          nombre: "Press declinado con barra",
          equipamiento: "Barra olímpica + banco declinado",
          descripcion: "Banco declinado a -15 grados. Baja la barra al pecho inferior. Empuja enfocándote en contraer el pectoral inferior.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Pectoral inferior", media: "Pectoral medio", leve: "Tríceps" }
        }
      ],
      avanzado: [
        {
          nombre: "Press de banca con pausa",
          equipamiento: "Barra olímpica + banco plano",
          descripcion: "Baja la barra al pecho y mantén 2-3 segundos de pausa. Elimina el rebote elástico. Empuja desde reposo completo.",
          series: "4",
          repeticiones: "6-8",
          activacion: { directa: "Pectoral medio", media: "Deltoides frontal", leve: "Tríceps" }
        },
        {
          nombre: "Aperturas en banco inclinado con cable",
          equipamiento: "Poleas bajas + banco inclinado",
          descripcion: "Coloca el banco inclinado entre dos poleas bajas. Desde abajo, cierra los brazos hacia arriba como abrazando un árbol. Máxima contracción.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Pectoral superior", media: "Pectoral medio", leve: "Deltoides frontal" }
        },
        {
          nombre: "Press con mancuernas en rotación",
          equipamiento: "Mancuernas + banco plano",
          descripcion: "Inicia con palmas hacia ti (agarre neutro). Al empujar, rota las manos para que las palmas queden hacia adelante. Máximo rango de movimiento.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Pectoral (todas las porciones)", media: "Deltoides frontal", leve: "Tríceps" }
        }
      ]
    }
  },
  {
    id: "abdomen",
    nombre: "Abdomen y Oblicuos",
    icono: "🎯",
    descripcion: "Recto abdominal, oblicuos externos e internos, y transverso del abdomen",
    color: "#10b981",
    ejercicios: {
      principiante: [
        {
          nombre: "Crunch en máquina",
          equipamiento: "Máquina de abdominales",
          descripcion: "Ajusta el asiento y el respaldo. Coloca los antebrazos en los cojines. Contrae el abdomen flexionando el torso hacia adelante.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Recto abdominal", media: "Oblicuos", leve: "Psoas" }
        },
        {
          nombre: "Elevación de piernas en banco",
          equipamiento: "Banco plano",
          descripcion: "Acuéstate en banco, manos agarrando el borde. Eleva las piernas rectas hasta 90 grados. Baja controladamente sin tocar el suelo.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Recto abdominal inferior", media: "Psoas", leve: "Oblicuos" }
        },
        {
          nombre: "Plancha abdominal",
          equipamiento: "Peso corporal",
          descripcion: "Apoya antebrazos y puntas de pies en el suelo. Mantén el cuerpo recto contrayendo el abdomen. Aguanta el tiempo indicado.",
          series: "3",
          repeticiones: "30-45 seg",
          activacion: { directa: "Recto abdominal", media: "Transverso", leve: "Erectores espinales" }
        }
      ],
      intermedio: [
        {
          nombre: "Crunch con cable",
          equipamiento: "Polea alta + cuerda",
          descripcion: "Arrodillado frente a la polea alta, cuerda detrás de la cabeza. Flexiona el torso hacia abajo contrayendo el abdomen. No tires con los brazos.",
          series: "4",
          repeticiones: "15-20",
          activacion: { directa: "Recto abdominal", media: "Oblicuos", leve: "Psoas" }
        },
        {
          nombre: "Elevación de piernas en máquina",
          equipamiento: "Máquina de elevación de piernas",
          descripcion: "Coloca los antebrazos en los soportes. Eleva las piernas rectas hacia arriba contrayendo el abdomen. Evita balancear.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Recto abdominal inferior", media: "Psoas", leve: "Oblicuos" }
        },
        {
          nombre: "Russian Twist con mancuerna",
          equipamiento: "Mancuerna + banco",
          descripcion: "Sentado en banco inclinado o suelo, inclínate ligeramente hacia atrás. Sostén mancuerna con ambas manos. Rota el torso de lado a lado.",
          series: "3",
          repeticiones: "20 por lado",
          activacion: { directa: "Oblicuos", media: "Recto abdominal", leve: "Psoas" }
        }
      ],
      avanzado: [
        {
          nombre: "Dragon Flag",
          equipamiento: "Banco plano",
          descripcion: "Acuéstate en banco, agarra el borde superior detrás de la cabeza. Eleva el cuerpo rígido manteniéndolo recto. Solo los hombros en el banco.",
          series: "4",
          repeticiones: "5-8",
          activacion: { directa: "Recto abdominal", media: "Oblicuos", leve: "Erectores espinales" }
        },
        {
          nombre: "Ab Wheel",
          equipamiento: "Rueda abdominal",
          descripcion: "De rodillas, sostén la rueda con ambas manos. Rueda hacia adelante extendiendo el cuerpo. Vuelve contrayendo el abdomen. Mantén la espalda recta.",
          series: "4",
          repeticiones: "8-12",
          activacion: { directa: "Recto abdominal", media: "Oblicuos", leve: "Deltoides" }
        },
        {
          nombre: "Windshield Wipers",
          equipamiento: "Barra de dominadas",
          descripcion: "Colgado de la barra, eleva las piernas hasta formar una L. Rota las piernas de lado a lado como limpiaparabrisas. Control total.",
          series: "3",
          repeticiones: "10 por lado",
          activacion: { directa: "Oblicuos", media: "Recto abdominal", leve: "Psoas" }
        }
      ]
    }
  },
  {
    id: "cuadriceps",
    nombre: "Cuádriceps",
    icono: "🦵",
    descripcion: "Cuatro cabezas: recto femoral, vasto lateral, vasto medial y vasto intermedio",
    color: "#34d399",
    ejercicios: {
      principiante: [
        {
          nombre: "Extensión de piernas en máquina",
          equipamiento: "Máquina de extensión",
          descripcion: "Ajusta el respaldo y el rodillo al tobillo. Extiende las piernas hasta bloquear las rodillas. Baja controladamente.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Cuádriceps (todas las cabezas)", media: "Recto femoral", leve: "Psoas" }
        },
        {
          nombre: "Sentadilla en máquina Smith",
          equipamiento: "Máquina Smith",
          descripcion: "Coloca la barra sobre los trapecios. Pies al ancho de los hombros. Baja flexionando rodillas y caderas hasta muslos paralelos. Sube.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Cuádriceps", media: "Glúteos", leve: "Femoral" }
        },
        {
          nombre: "Prensa de piernas",
          equipamiento: "Máquina de prensa",
          descripcion: "Sentado, pies en la plataforma al ancho de los hombros. Baja la plataflexionando rodillas hacia el pecho. Empuja extendiendo.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Cuádriceps", media: "Glúteos", leve: "Femoral" }
        }
      ],
      intermedio: [
        {
          nombre: "Sentadilla con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Barra sobre trapecios, pies separados. Baja manteniendo la espalda recta y el pecho arriba. Muslos paralelos al suelo. Sube empujando con los talones.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Cuádriceps", media: "Glúteos", leve: "Femoral" }
        },
        {
          nombre: "Sentadilla frontal",
          equipamiento: "Barra olímpica",
          descripcion: "Barra apoyada sobre los deltoides frontales, codos altos. Baja manteniendo el torso más erguido que en la sentadilla trasera. Máximo cuádriceps.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Cuádriceps", media: "Vasto medial", leve: "Glúteos" }
        },
        {
          nombre: "Zancada con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas a los lados. Da un paso largo hacia adelante bajando la rodilla trasera casi al suelo. Empuja para volver. Alterna piernas.",
          series: "3",
          repeticiones: "10-12 por pierna",
          activacion: { directa: "Cuádriceps", media: "Glúteos", leve: "Femoral" }
        }
      ],
      avanzado: [
        {
          nombre: "Sentadilla búlgara con mancuernas",
          equipamiento: "Mancuernas + banco",
          descripcion: "Un pie atrás apoyado en banco, el otro adelante. Sostén mancuernas a los lados. Baja en sentadilla unilateral. Máximo rango de movimiento.",
          series: "4",
          repeticiones: "8-10 por pierna",
          activacion: { directa: "Cuádriceps", media: "Glúteos", leve: "Femoral" }
        },
        {
          nombre: "Sentadilla Hack",
          equipamiento: "Máquina Hack",
          descripcion: "Espalda contra el respaldo, hombros bajo los cojines. Pies bajos en la plataforma. Baja y empuja enfocándote en los cuádriceps.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Cuádriceps", media: "Vasto lateral", leve: "Glúteos" }
        },
        {
          nombre: "Sentadilla en máquina pendulum",
          equipamiento: "Máquina pendulum",
          descripcion: "Sentado con el torso inclinado hacia atrás. Empuja la plataforma hacia arriba con los pies. Aislamiento intenso de cuádriceps.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Cuádriceps", media: "Vasto intermedio", leve: "Glúteos" }
        }
      ]
    }
  },
  {
    id: "femoral",
    nombre: "Femoral",
    icono: "🦵",
    descripcion: "Bíceps femoral, semimembranoso y semitendinoso. Músculos posteriores del muslo",
    color: "#6ee7b7",
    ejercicios: {
      principiante: [
        {
          nombre: "Curl femoral acostado en máquina",
          equipamiento: "Máquina de curl femoral",
          descripcion: "Acuéstate boca abajo con los talones bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos. Baja controladamente.",
          series: "3",
          repeticiones: "12-15",
          activacion: { directa: "Femoral", media: "Glúteos", leve: "Pantorrilla" }
        },
        {
          nombre: "Peso muerto rumano con mancuernas",
          equipamiento: "Mancuernas",
          descripcion: "De pie con mancuernas frente a los muslos. Inclina el torso hacia adelante manteniendo la espalda recta y rodillas ligeramente flexionadas. Siente el estiramiento en los femorales.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Femoral", media: "Glúteos", leve: "Erectores espinales" }
        }
      ],
      intermedio: [
        {
          nombre: "Curl femoral sentado",
          equipamiento: "Máquina de curl sentado",
          descripcion: "Sentado con la espalda contra el respaldo. Flexiona las rodillas contrayendo los femorales. Sostén la contracción 1 segundo arriba.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Femoral", media: "Pantorrilla", leve: "Glúteos" }
        },
        {
          nombre: "Peso muerto rumano con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Barra frente a los muslos, agarre prono. Inclina el torso manteniendo rodillas fijas y espalda recta. Barra cerca de las piernas. Estiramiento máximo de femorales.",
          series: "4",
          repeticiones: "8-10",
          activacion: { directa: "Femoral", media: "Glúteos", leve: "Erectores espinales" }
        },
        {
          nombre: "Good Morning",
          equipamiento: "Barra olímpica",
          descripcion: "Barra sobre los trapecios. Inclina el torso hacia adelante desde las caderas manteniendo las piernas casi extendidas. Espalda recta absolutamente.",
          series: "3",
          repeticiones: "10-12",
          activacion: { directa: "Femoral", media: "Erectores espinales", leve: "Glúteos" }
        }
      ],
      avanzado: [
        {
          nombre: "Peso muerto con piernas rígidas",
          equipamiento: "Barra olímpica",
          descripcion: "Piernas completamente extendidas o casi. Barra en el suelo. Eleva manteniendo las piernas rígidas y espalda recta. Máximo estiramiento de femorales.",
          series: "4",
          repeticiones: "6-8",
          activacion: { directa: "Femoral", media: "Erectores espinales", leve: "Glúteos" }
        },
        {
          nombre: "Curl femoral unilateral en máquina",
          equipamiento: "Máquina de curl unilateral",
          descripcion: "Trabaja una pierna a la vez. Mayor concentración y corrección de desequilibrios. Control total del movimiento excéntrico.",
          series: "4",
          repeticiones: "10-12 por pierna",
          activacion: { directa: "Femoral", media: "Pantorrilla", leve: "Glúteos" }
        },
        {
          nombre: "Nordic Curl",
          equipamiento: "Banco o máquina Nordic",
          descripcion: "Arrodillado con los talones fijos. Baja el torso hacia adelante controlando con los femorales. Usa las manos para asistir si es necesario.",
          series: "3",
          repeticiones: "5-8",
          activacion: { directa: "Femoral", media: "Glúteos", leve: "Pantorrilla" }
        }
      ]
    }
  },
  {
    id: "abductores",
    nombre: "Abductores y Aductores",
    icono: "🦵",
    descripcion: "Glúteo medio, glúteo menor (abductores) y aductores del muslo",
    color: "#a7f3d0",
    ejercicios: {
      principiante: [
        {
          nombre: "Abducción de cadera en máquina",
          equipamiento: "Máquina de abductores",
          descripcion: "Sentado con las piernas juntas contra los cojines laterales. Separa las piernas hacia afuera contrayendo los glúteos laterales. Baja controladamente.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Glúteo medio", media: "Glúteo menor", leve: "Tensor de la fascia lata" }
        },
        {
          nombre: "Aducción de cadera en máquina",
          equipamiento: "Máquina de aductores",
          descripcion: "Sentado con las piernas separadas contra los cojines interiores. Junta las piernas contrayendo los aductores. Sostén 1 segundo.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Aductores", media: "Grácil", leve: "Pectíneo" }
        }
      ],
      intermedio: [
        {
          nombre: "Patada lateral con cable",
          equipamiento: "Polea baja + tobillera",
          descripcion: "Coloca la tobillera en el tobillo. De pie lateral a la polea, eleva la pierna hacia el lado contrayendo el glúteo medio. Controla la bajada.",
          series: "3",
          repeticiones: "12-15 por pierna",
          activacion: { directa: "Glúteo medio", media: "Glúteo mayor", leve: "Tensor de la fascia lata" }
        },
        {
          nombre: "Sentadilla sumo con mancuerna",
          equipamiento: "Mancuerna pesada",
          descripcion: "Pies muy separados con puntas hacia afuera. Sostén mancuerna con ambas manos entre las piernas. Baja en sentadilla manteniendo el torso erguido.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Aductores", media: "Cuádriceps", leve: "Glúteos" }
        },
        {
          nombre: "Puente lateral",
          equipamiento: "Peso corporal",
          descripcion: "Acuéstate de lado con las rodillas flexionadas. Eleva la cadera del suelo contrayendo el glúteo medio. Mantén 2 segundos arriba.",
          series: "3",
          repeticiones: "15-20 por lado",
          activacion: { directa: "Glúteo medio", media: "Glúteo mayor", leve: "Oblicuos" }
        }
      ],
      avanzado: [
        {
          nombre: "Hip Thrust unilateral",
          equipamiento: "Mancuerna o barra",
          descripcion: "Espalda en banco, una pierna apoyada en el suelo. Eleva la cadera con la otra pierna. Máxima activación de glúteo medio y mayor.",
          series: "4",
          repeticiones: "10-12 por pierna",
          activacion: { directa: "Glúteo medio", media: "Glúteo mayor", leve: "Femoral" }
        },
        {
          nombre: "Abducción lateral en máquina de pie",
          equipamiento: "Máquina de abducción de pie",
          descripcion: "De pie con la pierna de trabajo contra el cojín lateral. Eleva la pierna hacia afuera contrayendo el glúteo medio. Aislamiento completo.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Glúteo medio", media: "Glúteo menor", leve: "Tensor de la fascia lata" }
        },
        {
          nombre: "Sentadilla lateral con barra",
          equipamiento: "Barra olímpica",
          descripcion: "Barra sobre trapecios. Da un paso lateral largo manteniendo la otra pierna extendida. Baja en sentadilla lateral. Vuelve. Alterna.",
          series: "4",
          repeticiones: "8-10 por lado",
          activacion: { directa: "Aductores", media: "Cuádriceps", leve: "Glúteos" }
        }
      ]
    }
  },
  {
    id: "pantorrilla",
    nombre: "Pantorrillas",
    icono: "🦶",
    descripcion: "Gastrocnemio (cabeza lateral y medial) y sóleo",
    color: "#d1fae5",
    ejercicios: {
      principiante: [
        {
          nombre: "Elevación de talones de pie",
          equipamiento: "Peso corporal o mancuernas",
          descripcion: "De pie en el suelo o en un escalón. Eleva los talones contrayendo las pantorrillas. Sostén 2 segundos arriba. Baja controladamente.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Tibial posterior" }
        },
        {
          nombre: "Elevación de talones en máquina de pie",
          equipamiento: "Máquina de pantorrilla de pie",
          descripcion: "Hombros bajo los cojines, pies en la plataforma. Eleva los talones lo más alto posible. Máxima contracción en la parte superior.",
          series: "3",
          repeticiones: "15-20",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Tibial posterior" }
        }
      ],
      intermedio: [
        {
          nombre: "Elevación de talones sentado",
          equipamiento: "Máquina de pantorrilla sentado",
          descripcion: "Sentado con muslos bajo los cojines. Eleva los talones contrayendo el sóleo. El gastrocnemio está relajado por la flexión de rodilla.",
          series: "4",
          repeticiones: "15-20",
          activacion: { directa: "Sóleo", media: "Gastrocnemio", leve: "Tibial posterior" }
        },
        {
          nombre: "Elevación de talones con mancuernas",
          equipamiento: "Mancuernas pesadas",
          descripcion: "De pie en un escalón o step. Sostén mancuernas a los lados. Eleva los talones con peso adicional. Rango completo de movimiento.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Tibial posterior" }
        },
        {
          nombre: "Elevación de talones a una pierna",
          equipamiento: "Mancuerna",
          descripcion: "De pie en un escalón, una pierna libre. Sostén mancuerna del lado de trabajo. Eleva el talón con una sola pierna. Mayor intensidad.",
          series: "3",
          repeticiones: "12-15 por pierna",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Estabilizadores" }
        }
      ],
      avanzado: [
        {
          nombre: "Elevación de talones en prensa",
          equipamiento: "Máquina de prensa",
          descripcion: "En máquina de prensa, coloca solo las puntas de los pies en la parte inferior de la plataforma. Eleva los talones contrayendo las pantorrillas.",
          series: "4",
          repeticiones: "15-20",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Cuádriceps" }
        },
        {
          nombre: "Elevación de talones con barra",
          equipamiento: "Barra olímpica + step",
          descripcion: "Barra sobre trapecios como en sentadilla. Pies en step o disco. Eleva los talones con máxima carga. Rango completo, pausa arriba.",
          series: "4",
          repeticiones: "10-12",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Core" }
        },
        {
          nombre: "Donkey Calf Raise",
          equipamiento: "Máquina Donkey o compañero",
          descripcion: "Inclinado hacia adelante con las caderas flexionadas. Compañero sentado en tu espalda baja. Eleva los talones. Máximo estiramiento del gastrocnemio.",
          series: "4",
          repeticiones: "12-15",
          activacion: { directa: "Gastrocnemio", media: "Sóleo", leve: "Isquiotibiales" }
        }
      ]
    }
  }
];

// ==========================================
// DASHBOARD DE NAVEGACIÓN
// ==========================================
function Dashboard({ onNavigate }) {
  const cards = [
    {
      title: "Nivel Principiante",
      description: "15 grupos • técnicas básicas",
      color: "#4ade80",
      icon: Target,
      action: () => onNavigate('principiante')
    },
    {
      title: "Nivel Intermedio",
      description: "15 grupos • técnicas avanzadas",
      color: "#22c55e",
      icon: TrendingUp,
      action: () => onNavigate('intermedio')
    },
    {
      title: "Nivel Avanzado",
      description: "15 grupos • técnicas experto",
      color: "#15803d",
      icon: Award,
      action: () => onNavigate('avanzado')
    },
    {
      title: "Glosario",
      description: "20 términos esenciales",
      color: "#0d9488",
      icon: BookOpen,
      action: () => onNavigate('glosario')
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-3 sm:mb-4">
            Panel de Navegación
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Selecciona tu nivel actual o consulta el glosario de términos.
            Cada grupo muscular contiene ejercicios con mancuernas, barras y máquinas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={card.action}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-left hover:shadow-xl transition-all hover:scale-[1.02] sm:hover:scale-105 border-2 border-transparent hover:border-green-200"
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: `${card.color}20` }}
              >
                <card.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: card.color }} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-1 sm:mb-2">{card.title}</h3>
              <p className="text-green-600 text-xs sm:text-sm">{card.description}</p>
              <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm font-medium" style={{ color: card.color }}>
                Explorar
                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 sm:w-6 sm:h-6" />
            Cómo usar esta guía
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-green-700">
            <div>
              <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">1. Evalúa tu nivel</h4>
              <p className="text-xs sm:text-sm">Comienza con el nivel principiante si eres nuevo. Domina la técnica antes de aumentar peso.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">2. Progresión segura</h4>
              <p className="text-xs sm:text-sm">Aumenta el peso solo cuando completes todas las series y repeticiones con buena forma.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">3. Activación muscular</h4>
              <p className="text-xs sm:text-sm">Presta atención a los indicadores de activación para maximizar resultados y evitar lesiones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE DE LISTA DE EJERCICIOS POR NIVEL
// ==========================================
function ListaEjercicios({ nivel, onBack }) {
  const [grupoExpandido, setGrupoExpandido] = useState({});
  const [ejercicioExpandido, setEjercicioExpandido] = useState({});

  const toggleGrupo = (grupoId) => {
    setGrupoExpandido(prev => ({
      ...prev,
      [grupoId]: !prev[grupoId]
    }));
  };

  const toggleEjercicio = (grupoId, ejercicioIndex) => {
    const key = `${grupoId}-${ejercicioIndex}`;
    setEjercicioExpandido(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-green-50 py-6 sm:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-5xl mx-auto w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-green-700 hover:text-green-900 font-medium mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <Home className="w-5 h-5" />
          Volver al Dashboard
        </button>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="p-4 sm:p-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 capitalize">
              Nivel {nivel}
            </h2>
            <p className="text-white/90 text-sm sm:text-base">
              {nivel === 'principiante' ? 'Técnicas básicas y fundamentos' : 
               nivel === 'intermedio' ? 'Técnicas avanzadas y progresión de carga' : 
               'Técnicas experto y máxima intensidad'}
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {gruposMusculares.map((grupo) => {
            const isGrupoExpanded = grupoExpandido[grupo.id];
            const ejercicios = grupo.ejercicios[nivel] || [];

            return (
              <div key={grupo.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-green-100">
                <button
                  onClick={() => toggleGrupo(grupo.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-green-50/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl"
                      style={{ backgroundColor: `${grupo.color}20` }}
                    >
                      {grupo.icono}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-green-900">{grupo.nombre}</h3>
                      <p className="text-xs sm:text-sm text-green-600">{grupo.descripcion}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {ejercicios.length} ejercicios
                    </span>
                    {isGrupoExpanded ? (
                      <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {isGrupoExpanded && (
                  <div className="border-t border-green-100">
                    {ejercicios.map((ejercicio, index) => {
                      const key = `${grupo.id}-${index}`;
                      const isEjercicioExpanded = ejercicioExpandido[key];

                      return (
                        <div key={index} className="border-b border-green-50 last:border-b-0">
                          <button
                            onClick={() => toggleEjercicio(grupo.id, index)}
                            className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-green-50/30 transition-colors text-left"
                          >
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <span 
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                                style={{ backgroundColor: grupo.color }}
                              >
                                {index + 1}
                              </span>
                              <div className="min-w-0">
                                <span className="font-semibold text-green-900 text-sm sm:text-base block truncate">
                                  {ejercicio.nombre}
                                </span>
                                <span className="text-xs text-green-500">{ejercicio.equipamiento}</span>
                              </div>
                            </div>
                            {isEjercicioExpanded ? (
                              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                            )}
                          </button>

                          {isEjercicioExpanded && (
                            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pl-10 sm:pl-14">
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  Series: {ejercicio.series}
                                </span>
                                <span className="bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {ejercicio.repeticiones}
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {ejercicio.equipamiento}
                                </span>
                              </div>

                              <div className="bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-400 mb-3">
                                <p className="text-green-900 leading-relaxed text-sm sm:text-base">
                                  {ejercicio.descripcion}
                                </p>
                              </div>

                              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                <h4 className="font-semibold text-gray-800 mb-2 text-xs sm:text-sm flex items-center gap-2">
                                  <Activity className="w-4 h-4" />
                                  Activación Muscular
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs text-gray-500 w-16">Directa:</span>
                                    <ActivacionBadge nivel="directa" />
                                    <span className="text-xs sm:text-sm text-gray-700">{ejercicio.activacion.directa}</span>
                                  </div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs text-gray-500 w-16">Media:</span>
                                    <ActivacionBadge nivel="media" />
                                    <span className="text-xs sm:text-sm text-gray-700">{ejercicio.activacion.media}</span>
                                  </div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs text-gray-500 w-16">Leve:</span>
                                    <ActivacionBadge nivel="leve" />
                                    <span className="text-xs sm:text-sm text-gray-700">{ejercicio.activacion.leve}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function Gym() {
  const [vista, setVista] = useState('home');

  const handleNavigate = (destino) => {
    setVista(destino);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-green-50 w-full overflow-x-hidden">
      {vista === 'home' && (
        <>
          <HeroSection onNavigate={handleNavigate} />
          <Dashboard onNavigate={handleNavigate} />
        </>
      )}
      
      {vista === 'dashboard' && (
        <Dashboard onNavigate={handleNavigate} />
      )}
      
      {vista === 'glosario' && (
        <Glosario onBack={() => handleNavigate('home')} />
      )}
      
      {vista === 'principiante' && (
        <ListaEjercicios nivel="principiante" onBack={() => handleNavigate('home')} />
      )}
      
      {vista === 'intermedio' && (
        <ListaEjercicios nivel="intermedio" onBack={() => handleNavigate('home')} />
      )}
      
      {vista === 'avanzado' && (
        <ListaEjercicios nivel="avanzado" onBack={() => handleNavigate('home')} />
      )}
      <Footer/>
    </div>
  );
}