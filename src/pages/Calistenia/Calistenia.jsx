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
  List, 
  Home,
  Info,
  X
} from 'lucide-react';
import Footer from "../../components/Footer/Footer"

// ==========================================
// HERO SECTION
// ==========================================
function HeroSection({ onNavigate }) {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400 text-white overflow-hidden w-full">
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
              <span className="font-medium">Entrenamiento Funcional</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Domina tu
              <span className="block text-green-100">Cuerpo</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-green-50 mb-6 sm:mb-8 max-w-lg">
              Progresiones estructuradas desde principiante hasta avanzado. 
              Construye fuerza real con el peso de tu propio cuerpo.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('ejercicios')}
                className="flex items-center gap-2 bg-white text-green-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-50 transition-colors"
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
                36
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-green-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold shadow-lg text-sm sm:text-base">
                Ejercicios
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
    termino: "Calistenia",
    definicion: "Sistema de entrenamiento físico que utiliza exclusivamente el peso corporal como resistencia, realizando movimientos que aprovechan la gravedad y la biomecánica del cuerpo."
  },
  {
    termino: "Progresión",
    definicion: "Serie de variaciones de un ejercicio ordenadas de menor a mayor dificultad, permitiendo avanzar gradualmente desde niveles básicos hasta avanzados."
  },
  {
    termino: "Repetición (Rep)",
    definicion: "Una ejecución completa de un movimiento, desde la posición inicial hasta la final y regreso."
  },
  {
    termino: "Serie (Set)",
    definicion: "Grupo de repeticiones realizadas consecutivamente sin descanso."
  },
  {
    termino: "ROM (Range of Motion)",
    definicion: "Rango de movimiento completo de una articulación durante un ejercicio."
  },
  {
    termino: "Core",
    definicion: "Conjunto de músculos del torso que estabilizan la columna vertebral: abdominales, oblicuos, lumbares, diafragma y suelo pélvico."
  },
  {
    termino: "Prono",
    definicion: "Posición de las manos con las palmas hacia abajo o hacia atrás (como en dominadas con agarre prono)."
  },
  {
    termino: "Supino",
    definicion: "Posición de las manos con las palmas hacia arriba o hacia ti (como en dominadas con agarre supino)."
  },
  {
    termino: "Isométrico",
    definicion: "Ejercicio donde los músculos se contraen sin producir movimiento, manteniendo una posición estática (ej: plancha)."
  },
  {
    termino: "Excéntrico",
    definicion: "Fase del movimiento donde el músculo se alarga bajo tensión (ej: bajar en una flexión)."
  },
  {
    termino: "Concéntrico",
    definicion: "Fase del movimiento donde el músculo se acorta bajo tensión (ej: subir en una flexión)."
  },
  {
    termino: "Dead Hang",
    definicion: "Posición de colgado pasivo en la barra con brazos completamente extendidos y escápulas relajadas."
  },
  {
    termino: "Escápulas Activas",
    definicion: "Movimiento de retraer y deprimir los omóplatos (hombros hacia atrás y abajo) sin flexionar los codos."
  },
  {
    termino: "Muscle-Up",
    definicion: "Movimiento combinado de dominada seguida de transición y fondos en barra."
  },
  {
    termino: "Pino (Handstand)",
    definicion: "Posición de equilibrio sobre las manos con brazos extendidos y cuerpo vertical."
  },
  {
    termino: "L-Sit",
    definicion: "Posición isométrica donde el cuerpo se sostiene sobre las manos con piernas extendidas horizontalmente formando una L."
  },
  {
    termino: "Pistol Squat",
    definicion: "Sentadilla unilateral donde una pierna se flexiona mientras la otra permanece extendida al frente."
  },
  {
    termino: "Dragon Flag",
    definicion: "Ejercicio avanzado de core donde el cuerpo se mantiene rígido mientras se eleva y baja desde los hombros."
  },
  {
    termino: "Hollow Body",
    definicion: "Posición de core donde la espalda baja se presiona contra el suelo mientras piernas y hombros se elevan."
  },
  {
    termino: "Arch Body",
    definicion: "Posición opuesta al hollow, arqueando la espalda y elevando pecho y muslos del suelo."
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
// DATOS DE EJERCICIOS EXPANDIDOS
// ==========================================
const niveles = [
  {
    titulo: "Nivel Principiante",
    color: "#4ade80",
    descripcion: "Fundamentos y construcción de base",
    ejercicios: [
      {
        nombre: "Flexiones",
        progresiones: [
          {
            nivel: "Nivel 1 - Pared",
            descripcion: "Colócate de frente a una pared a distancia de brazos extendidos. Apoya las manos a la altura del pecho. Inclina el cuerpo hacia la pared doblando los codos. Mantén el cuerpo recto desde cabeza a talones. Empuja para volver a la posición inicial.",
            series: "3",
            repeticiones: "10-15"
          },
          {
            nivel: "Nivel 2 - Inclinación alta",
            descripcion: "Usa una superficie elevada como una mesa o mostrador alto. Manos separadas al ancho de los hombros. Cuerpo recto en línea diagonal. Baja el pecho hacia las manos. Cuanto más alta la superficie, más fácil será.",
            series: "3",
            repeticiones: "8-12"
          },
          {
            nivel: "Nivel 3 - Inclinación media",
            descripcion: "Usa un banco o silla firme. Manos en el borde, pies en el suelo. Cuerpo recto. Baja hasta que los codos formen 90 grados. Mantén los codos cerca del cuerpo.",
            series: "3",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 4 - Rodillas",
            descripcion: "Posición de flexión estándar pero con rodillas apoyadas en el suelo. Mantén el cuerpo recto desde cabeza a rodillas. Baja el pecho al suelo. Los codos deben ir hacia atrás.",
            series: "3",
            repeticiones: "5-8"
          }
        ]
      },
      {
        nombre: "Sentadillas",
        progresiones: [
          {
            nivel: "Nivel 1 - Asistida",
            descripcion: "Colócate frente a una silla. Separa los pies al ancho de los hombros. Baja lentamente como si te fueras a sentar, tocando apenas la silla sin apoyar todo el peso. Mantén el pecho erguido.",
            series: "3",
            repeticiones: "12-15"
          },
          {
            nivel: "Nivel 2 - Parcial",
            descripcion: "Sentadilla estándar pero bajando solo hasta que los muslos formen 45 grados con el suelo. No bajes completamente. Mantén el peso en los talones.",
            series: "3",
            repeticiones: "10-12"
          },
          {
            nivel: "Nivel 3 - Completa",
            descripcion: "Baja hasta que los muslos estén paralelos al suelo. Mantén la espalda recta y el pecho arriba. Los talones no deben despegar del suelo.",
            series: "3",
            repeticiones: "8-10"
          },
          {
            nivel: "Nivel 4 - Pausada",
            descripcion: "Sentadilla completa con pausa de 3 segundos en la parte inferior. Elimina el rebote. Control total del movimiento. Sube explosivamente.",
            series: "3",
            repeticiones: "6-8"
          }
        ]
      },
      {
        nombre: "Plancha",
        progresiones: [
          {
            nivel: "Nivel 1 - Rodillas",
            descripcion: "Apoya las rodillas y las manos en el suelo. Manos directamente bajo los hombros. Mantén el cuerpo recto desde cabeza a rodillas. Contrae el abdomen.",
            series: "3",
            repeticiones: "20-30 seg"
          },
          {
            nivel: "Nivel 2 - Rodillas en antebrazos",
            descripcion: "Similar al anterior pero apoyado en antebrazos. Codos bajo los hombros. Mayor activación del core. Mantén la espalda plana.",
            series: "3",
            repeticiones: "25-35 seg"
          },
          {
            nivel: "Nivel 3 - Media plancha",
            descripcion: "Posición de plancha estándar pero con una rodilla apoyada en el suelo alternando cada 10 segundos. Mantén el cuerpo recto durante los cambios.",
            series: "3",
            repeticiones: "30-40 seg"
          },
          {
            nivel: "Nivel 4 - Estándar corta",
            descripcion: "Plancha estándar completa sobre pies y manos. Mantén 15-20 segundos. Cuerpo recto absoluto. No arquees la espalda ni levantes el glúteo.",
            series: "3",
            repeticiones: "15-20 seg"
          }
        ]
      },
      {
        nombre: "Dominadas",
        progresiones: [
          {
            nivel: "Nivel 1 - Dead Hang",
            descripcion: "Simplemente cuelga de la barra con agarre prono. Mantén los brazos extendidos completamente. Activa los omóplatos. Acostumbra tus manos al agarre.",
            series: "4",
            repeticiones: "15-20 seg"
          },
          {
            nivel: "Nivel 2 - Escápulas activas",
            descripcion: "Colgado de la barra, tira los hombros hacia abajo y juntos sin doblar los codos. Sube solo 2-3 cm. Baja controladamente. Trabaja la conexión mente-músculo.",
            series: "4",
            repeticiones: "8-10"
          },
          {
            nivel: "Nivel 3 - Negativas asistidas",
            descripcion: "Usa una silla o banda para subir a la posición final. Luego baja lo más lento posible (3-5 segundos) hasta extensión completa.",
            series: "4",
            repeticiones: "3-5 negativas"
          },
          {
            nivel: "Nivel 4 - Bandas elásticas",
            descripcion: "Coloca una banda elástica resistente en la barra y apoya una rodilla en ella. La banda te asistirá a subir. Realiza el movimiento completo.",
            series: "4",
            repeticiones: "5-8"
          }
        ]
      },
      {
        nombre: "Fondos",
        progresiones: [
          {
            nivel: "Nivel 1 - Silla",
            descripcion: "Usa una silla firme. Manos en el borde, pies en el suelo con rodillas flexionadas. Baja hasta que los codos formen 90 grados. Empuja hasta extender completamente.",
            series: "3",
            repeticiones: "10-12"
          },
          {
            nivel: "Nivel 2 - Piernas extendidas",
            descripcion: "Similar al anterior pero con piernas completamente extendidas. Mayor dificultad por el aumento de peso corporal que debes levantar.",
            series: "3",
            repeticiones: "8-10"
          },
          {
            nivel: "Nivel 3 - Elevado",
            descripcion: "Manos en un banco, pies en otro banco al frente. Cuerpo horizontal. Mayor rango de movimiento y dificultad.",
            series: "3",
            repeticiones: "6-8"
          },
          {
            nivel: "Nivel 4 - Pausado",
            descripcion: "Fondos con pausa de 2 segundos en la parte inferior. Elimina el rebote elástico. Control total del movimiento excéntrico y concéntrico.",
            series: "3",
            repeticiones: "5-7"
          }
        ]
      },
      {
        nombre: "Hollow Body",
        progresiones: [
          {
            nivel: "Nivel 1 - Cabeza y hombros",
            descripcion: "Acuéstate boca arriba. Presiona la zona lumbar contra el suelo. Eleva solo la cabeza y hombros. Mantén las piernas en el suelo.",
            series: "3",
            repeticiones: "10-15 seg"
          },
          {
            nivel: "Nivel 2 - Piernas",
            descripcion: "Mantén la espalda pegada al suelo. Eleva las piernas rectas unos 15 cm del suelo. Cabeza y hombros pueden permanecer en el suelo.",
            series: "3",
            repeticiones: "15-20 seg"
          },
          {
            nivel: "Nivel 3 - Completo básico",
            descripcion: "Eleva simultáneamente hombros y piernas del suelo. Brazos extendidos hacia atrás o al frente. Forma un arco con el cuerpo. Espalda baja siempre pegada al suelo.",
            series: "3",
            repeticiones: "20-30 seg"
          },
          {
            nivel: "Nivel 4 - Balanceo",
            descripcion: "Mantén la posición hollow body completa y balancea suavemente hacia adelante y atrás. Control total del core durante todo el movimiento.",
            series: "3",
            repeticiones: "10-15 reps"
          }
        ]
      }
    ]
  },
  {
    titulo: "Nivel Medio",
    color: "#22c55e",
    descripcion: "Construcción de fuerza y volumen",
    ejercicios: [
      {
        nombre: "Flexiones",
        progresiones: [
          {
            nivel: "Nivel 1 - Estándar",
            descripcion: "Manos separadas al ancho de los hombros. Cuerpo recto desde cabeza a talones. Baja el pecho al suelo doblando los codos hacia atrás en 45 grados.",
            series: "4",
            repeticiones: "12-20"
          },
          {
            nivel: "Nivel 2 - Diamond",
            descripcion: "Junta las manos formando un diamante con pulgares e índices. Colócalas bajo el centro del pecho. Enfatiza tríceps. Mantén los codos pegados al cuerpo.",
            series: "4",
            repeticiones: "8-12"
          },
          {
            nivel: "Nivel 3 - Archer",
            descripcion: "En la posición baja, extiende un brazo hacia el lado mientras el otro permanece flexionado. Alterna lados. Trabaja un lado más que el otro.",
            series: "4",
            repeticiones: "6-8 por lado"
          },
          {
            nivel: "Nivel 4 - Pies elevados",
            descripcion: "Coloca los pies en un banco o silla. Manos en el suelo. Mayor énfasis en hombros y parte superior del pecho. Mantén el cuerpo recto.",
            series: "4",
            repeticiones: "10-15"
          }
        ]
      },
      {
        nombre: "Sentadillas",
        progresiones: [
          {
            nivel: "Nivel 1 - Estándar con peso",
            descripcion: "Sentadilla completa con algún peso: mochila con libros, botellas de agua. Mantén la técnica perfecta. El peso debe estar cerca del pecho.",
            series: "4",
            repeticiones: "12-15"
          },
          {
            nivel: "Nivel 2 - Pistol asistido",
            descripcion: "Sentadilla unilateral agarrándote de un soporte (barra, puerta). Una pierna extendida al frente. Baja hasta sentarte en una silla o hasta tu rango máximo.",
            series: "3",
            repeticiones: "5-8 por pierna"
          },
          {
            nivel: "Nivel 3 - Bulgarian split",
            descripcion: "Un pie atrás apoyado en un banco. El otro adelante. Baja en sentadilla. Mayor rango de movimiento. Mantén el torso erguido.",
            series: "3",
            repeticiones: "8-10 por pierna"
          },
          {
            nivel: "Nivel 4 - Salto",
            descripcion: "Sentadilla completa seguida de salto explosivo. Aterriza suavemente absorbiendo el impacto. Inmediatamente siguiente repetición.",
            series: "4",
            repeticiones: "15-20"
          }
        ]
      },
      {
        nombre: "Dominadas",
        progresiones: [
          {
            nivel: "Nivel 1 - Estándar estricta",
            descripcion: "Agarre prono separado 1.5 veces el ancho de los hombros. Cuelga completamente al inicio. Sube hasta barbilla sobre la barra sin impulso. Baja controladamente.",
            series: "5",
            repeticiones: "5-8"
          },
          {
            nivel: "Nivel 2 - Supinas",
            descripcion: "Agarre supino (palmas hacia ti) separado al ancho de los hombros. Mayor énfasis en bíceps. Mantén los codos cerca del cuerpo.",
            series: "4",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 3 - Cerradas",
            descripcion: "Agarre prono con las manos juntas o muy cercanas. Mayor énfasis en los dorsales externos. Trabaja el ancho de la espalda.",
            series: "4",
            repeticiones: "6-8"
          },
          {
            nivel: "Nivel 4 - L-sit",
            descripcion: "Dominada estándar manteniendo las piernas extendidas horizontalmente al frente. Requiere fuerza de core extrema. Puedes doblar ligeramente las rodillas si es necesario.",
            series: "4",
            repeticiones: "3-5"
          }
        ]
      },
      {
        nombre: "Fondos",
        progresiones: [
          {
            nivel: "Nivel 1 - Paralelas asistidas",
            descripcion: "Si tienes paralelas, usa bandas elásticas para asistencia. O realiza fondos negativos (subir con ayuda, bajar lento). Mantén el cuerpo vertical.",
            series: "4",
            repeticiones: "5-8"
          },
          {
            nivel: "Nivel 2 - Paralelas libres",
            descripcion: "Fondos en paralelas sin asistencia. Cuerpo ligeramente inclinado hacia adelante para mayor pecho, vertical para mayor tríceps.",
            series: "4",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 3 - Peso añadido",
            descripcion: "Fondos con mochila con peso o disco entre las piernas. Mantén la técnica perfecta. No compenses con balanceo.",
            series: "4",
            repeticiones: "6-8"
          },
          {
            nivel: "Nivel 4 - Anillos",
            descripcion: "Fondos en anillos gimnásticos. Mayor estabilización requerida. Mantén los anillos cerca del cuerpo durante todo el movimiento.",
            series: "4",
            repeticiones: "5-8"
          }
        ]
      },
      {
        nombre: "Plancha",
        progresiones: [
          {
            nivel: "Nivel 1 - Estándar larga",
            descripcion: "Plancha sobre manos. Mantén 60-90 segundos. Cuerpo recto absoluto. Contrae abdomen, glúteos y cuádriceps constantemente.",
            series: "3",
            repeticiones: "60-90 seg"
          },
          {
            nivel: "Nivel 2 - Antebrazos",
            descripcion: "Plancha sobre antebrazos. Mayor dificultad por la posición más baja. Mantén los codos directamente bajo los hombros.",
            series: "3",
            repeticiones: "45-60 seg"
          },
          {
            nivel: "Nivel 3 - Alternando",
            descripcion: "Alterna entre posición de manos y antebrazos sin tocar el suelo. Levanta una mano, coloca el antebrazo, luego la otra. Movimiento controlado.",
            series: "3",
            repeticiones: "10-12 cambios"
          },
          {
            nivel: "Nivel 4 - Lateral",
            descripcion: "Plancha lateral apoyado en un antebrazo. Cuerpo recto desde cabeza a pies. Otra mano en la cadera o extendida. Trabaja oblicuos.",
            series: "3",
            repeticiones: "30-45 seg por lado"
          }
        ]
      },
      {
        nombre: "Muscle-Up",
        progresiones: [
          {
            nivel: "Nivel 1 - Transición asistida",
            descripcion: "Usa una banda elástica o baja el punto de apoyo. Practica el movimiento de transición de dominada a fondos. Enfócate en la técnica de muñeca.",
            series: "4",
            repeticiones: "3-5"
          },
          {
            nivel: "Nivel 2 - Negativa",
            descripcion: "Salta o usa ayuda para llegar a la posición de fondos sobre la barra. Luego baja lentamente (5 segundos) pasando por la transición hasta dead hang.",
            series: "4",
            repeticiones: "3-4"
          },
          {
            nivel: "Nivel 3 - Asistido con impulso",
            descripcion: "Realiza el muscle-up completo permitiéndote un pequeño impulso con las piernas (kipping controlado). Reduce gradualmente el impulso.",
            series: "4",
            repeticiones: "2-4"
          },
          {
            nivel: "Nivel 4 - Estricto",
            descripcion: "Muscle-up sin impulso de piernas. Dominada explosiva, transición limpia, fondos completos. El estándar de oro del movimiento.",
            series: "5",
            repeticiones: "2-3"
          }
        ]
      }
    ]
  },
  {
    titulo: "Nivel Avanzado",
    color: "#15803d",
    descripcion: "Dominio y habilidades avanzadas",
    ejercicios: [
      {
        nombre: "Flexiones",
        progresiones: [
          {
            nivel: "Nivel 1 - Explosivas",
            descripcion: "Flexión estándar subiendo explosivamente para que las manos despeguen el suelo. Aterriza suavemente. Preparación para palmadas.",
            series: "4",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 2 - Con palmada",
            descripcion: "Flexión explosiva con palmada en el aire. Aterriza con las manos en la misma posición de inicio. Requiere potencia de pecho considerable.",
            series: "4",
            repeticiones: "4-6"
          },
          {
            nivel: "Nivel 3 - A una mano asistida",
            descripcion: "Coloca una mano en el suelo, la otra en un balón medicinal o objeto elevado. Realiza flexiones manteniendo el equilibrio. Cambia de lado.",
            series: "4",
            repeticiones: "4-6 por lado"
          },
          {
            nivel: "Nivel 4 - A una mano",
            descripcion: "Flexión con una sola mano. Piernas separadas ampliamente para equilibrio. Coloca la mano en línea con el centro del pecho. Baja controladamente.",
            series: "4",
            repeticiones: "3-5 por lado"
          }
        ]
      },
      {
        nombre: "Dominadas",
        progresiones: [
          {
            nivel: "Nivel 1 - Pectorales",
            descripcion: "Dominada tirando la barra hasta el pecho superior. Codos van hacia abajo y atrás. Agarre medio. Mantén el pecho arriba durante todo el movimiento.",
            series: "5",
            repeticiones: "5-8"
          },
          {
            nivel: "Nivel 2 - Commando",
            descripcion: "Agarre paralelo (palmas enfrentadas). Alterna subir la barbilla a cada lado de la barra. Trabaja los bíceps y antebrazos intensamente.",
            series: "4",
            repeticiones: "4-6 por lado"
          },
          {
            nivel: "Nivel 3 - Archer",
            descripcion: "En la posición alta, extiende un brazo hacia el lado manteniéndote con el otro. Alterna lados. Trabaja dominadas a una mano progresivamente.",
            series: "4",
            repeticiones: "3-5 por lado"
          },
          {
            nivel: "Nivel 4 - A una mano asistida",
            descripcion: "Agarre con una mano, la otra agarra la muñeca de la mano dominante. Realiza dominadas de esta forma. Reduce gradualmente la ayuda de la segunda mano.",
            series: "4",
            repeticiones: "2-4 por lado"
          }
        ]
      },
      {
        nombre: "Pino (Handstand)",
        progresiones: [
          {
            nivel: "Nivel 1 - Contra pared pecho",
            descripcion: "Realiza el pino con la espalda contra la pared para seguridad. Brazos extendidos y bloqueados. Empuja hacia arriba activamente con los hombros.",
            series: "5",
            repeticiones: "20-30 seg"
          },
          {
            nivel: "Nivel 2 - Contra pared espalda",
            descripcion: "Pino mirando hacia la pared. Mayor alineación correcta del cuerpo. Solo los talones tocan la pared ligeramente. Forma perfecta.",
            series: "5",
            repeticiones: "15-25 seg"
          },
          {
            nivel: "Nivel 3 - Libre spotter",
            descripcion: "Pino sin pared pero con un spotter que te ayude si pierdes equilibrio. Practica el balanceo de dedos para corrección de equilibrio.",
            series: "5",
            repeticiones: "10-20 seg"
          },
          {
            nivel: "Nivel 4 - Libre",
            descripcion: "Pino completamente libre. Usa caída hacia adelante en pirueta si pierdes equilibrio. Dedos de las manos agarran el suelo para balance.",
            series: "5",
            repeticiones: "10-15 seg"
          }
        ]
      },
      {
        nombre: "Plancha",
        progresiones: [
          {
            nivel: "Nivel 1 - Un brazo asistido",
            descripcion: "Plancha estándar pero con un brazo extendido al frente o lateral. Mantén 10-15 segundos. Alterna brazos. Preparación para plancha a un brazo.",
            series: "4",
            repeticiones: "15-20 seg por lado"
          },
          {
            nivel: "Nivel 2 - Elevación pierna",
            descripcion: "Plancha estándar elevando alternadamente las piernas rectas hacia arriba. Mantén 2-3 segundos arriba. No rotes las caderas.",
            series: "4",
            repeticiones: "8-10 por pierna"
          },
          {
            nivel: "Nivel 3 - Side plank dinámica",
            descripcion: "Side plank con rotación del torso, llevando el brazo libre bajo el cuerpo y luego extendiéndolo hacia arriba. Trabaja oblicuos y estabilidad.",
            series: "4",
            repeticiones: "8-10 por lado"
          },
          {
            nivel: "Nivel 4 - Un brazo",
            descripcion: "Plancha sobre un solo antebrazo. Piernas separadas para equilibrio. Cuerpo recto. Mantén la posición sin rotar. Ejercicio de core extremadamente avanzado.",
            series: "4",
            repeticiones: "10-15 seg por lado"
          }
        ]
      },
      {
        nombre: "Habilidades Avanzadas",
        progresiones: [
          {
            nivel: "Nivel 1 - L-sit",
            descripcion: "Sentado en el suelo, apoya las manos a los lados de las caderas. Eleva el cuerpo completo del suelo manteniendo las piernas extendidas al frente.",
            series: "4",
            repeticiones: "10-15 seg"
          },
          {
            nivel: "Nivel 2 - Dragon Flag negativo",
            descripcion: "Desde posición vertical en banco, baja el cuerpo manteniéndolo recto y rígido. Solo los hombros en el banco. Baja lo más lento posible.",
            series: "4",
            repeticiones: "3-5"
          },
          {
            nivel: "Nivel 3 - Dragon Flag",
            descripcion: "Eleva y baja el cuerpo rígido desde los hombros. Piernas rectas o ligeramente flexionadas. Control total. Movimiento de Bruce Lee.",
            series: "4",
            repeticiones: "3-5"
          },
          {
            nivel: "Nivel 4 - Front Lever",
            descripcion: "Colgado de la barra, eleva el cuerpo horizontalmente con brazos extendidos. Cuerpo paralelo al suelo. Mantén la posición. Ejercicio de fuerza extrema.",
            series: "5",
            repeticiones: "5-10 seg"
          }
        ]
      },
      {
        nombre: "Pistol Squat",
        progresiones: [
          {
            nivel: "Nivel 1 - A una silla",
            descripcion: "Realiza pistol squat bajando hasta una silla. Una pierna extendida al frente. Usa las manos para equilibrio si es necesario.",
            series: "3",
            repeticiones: "5-8 por pierna"
          },
          {
            nivel: "Nivel 2 - Asistido ligero",
            descripcion: "Realiza pistol squat libre pero usando solo un dedo en un soporte para equilibrio mínimo. No uses fuerza de los brazos.",
            series: "3",
            repeticiones: "4-6 por pierna"
          },
          {
            nivel: "Nivel 3 - Libre manos adelante",
            descripcion: "Pistol squat completo sin asistencia. Brazos extendidos al frente para equilibrio. Baja hasta que el glúteo toque el talón.",
            series: "3",
            repeticiones: "3-5 por pierna"
          },
          {
            nivel: "Nivel 4 - Peso añadido",
            descripcion: "Pistol squat sosteniendo un disco o mochila contra el pecho. Mantén la técnica perfecta. Mayor dificultad por el peso adicional.",
            series: "3",
            repeticiones: "3-4 por pierna"
          }
        ]
      }
    ]
  }
];

// ==========================================
// DASHBOARD DE NAVEGACIÓN
// ==========================================
function Dashboard({ onNavigate }) {
  const cards = [
    {
      title: "Nivel Principiante",
      description: "6 ejercicios • 24 progresiones",
      color: "#4ade80",
      icon: Target,
      action: () => onNavigate('principiante')
    },
    {
      title: "Nivel Medio",
      description: "6 ejercicios • 24 progresiones",
      color: "#22c55e",
      icon: TrendingUp,
      action: () => onNavigate('medio')
    },
    {
      title: "Nivel Avanzado",
      description: "6 ejercicios • 24 progresiones",
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
            Cada nivel contiene progresiones detalladas para dominar cada ejercicio.
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
              <p className="text-xs sm:text-sm">Comienza honestamente en el nivel que corresponda a tu fuerza actual. No saltes progresiones.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">2. Domina cada progresión</h4>
              <p className="text-xs sm:text-sm">Completa todas las series y repeticiones con técnica perfecta antes de pasar al siguiente nivel.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">3. Sé consistente</h4>
              <p className="text-xs sm:text-sm">La calistenia recompensa la paciencia. La consistencia vence a la intensidad a largo plazo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE DE LISTA DE EJERCICIOS
// ==========================================
function ListaEjercicios({ nivel, onBack }) {
  const [expandido, setExpandido] = useState({});
  const nivelData = niveles.find(n => 
    n.titulo.toLowerCase().includes(nivel.toLowerCase())
  );

  if (!nivelData) return null;

  const toggleProgresion = (ejercicioIndex, progresionIndex) => {
    const key = `${ejercicioIndex}-${progresionIndex}`;
    setExpandido(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-green-50 py-6 sm:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-green-700 hover:text-green-900 font-medium mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <Home className="w-5 h-5" />
          Volver al Dashboard
        </button>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div 
            className="p-4 sm:p-6 text-white"
            style={{ backgroundColor: nivelData.color }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{nivelData.titulo}</h2>
            <p className="text-white/90 text-sm sm:text-base">{nivelData.descripcion}</p>
          </div>

          <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            {nivelData.ejercicios.map((ejercicio, ejercicioIndex) => (
              <div key={ejercicioIndex} className="border-2 border-green-100 rounded-lg sm:rounded-xl overflow-hidden">
                <div className="bg-green-50 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-green-100">
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {ejercicio.nombre}
                  </h3>
                </div>

                <div className="divide-y divide-green-50">
                  {ejercicio.progresiones.map((progresion, progresionIndex) => {
                    const key = `${ejercicioIndex}-${progresionIndex}`;
                    const isExpanded = expandido[key];

                    return (
                      <div key={progresionIndex}>
                        <button
                          onClick={() => toggleProgresion(ejercicioIndex, progresionIndex)}
                          className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-green-50/50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <span 
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                              style={{ backgroundColor: nivelData.color }}
                            >
                              {progresionIndex + 1}
                            </span>
                            <span className="font-semibold text-green-900 text-sm sm:text-base truncate">
                              {progresion.nivel}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-3 sm:px-4 pb-3 sm:pb-4 pl-12 sm:pl-16">
                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                              <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                Series: {progresion.series}
                              </span>
                              <span className="bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                {progresion.repeticiones}
                              </span>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-400">
                              <p className="text-green-900 leading-relaxed text-sm sm:text-base">
                                {progresion.descripcion}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function Calistenia() {
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
      
      {vista === 'medio' && (
        <ListaEjercicios nivel="medio" onBack={() => handleNavigate('home')} />
      )}
      
      {vista === 'avanzado' && (
        <ListaEjercicios nivel="avanzado" onBack={() => handleNavigate('home')} />
      )}
      <Footer/>
    </div>
  );
}