import { useState } from 'react';
import { ChevronDown, ChevronUp, Dumbbell, TrendingUp, Target, Award } from 'lucide-react';

// Hero Section Component
function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rotate-45"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Dumbbell className="w-5 h-5" />
              <span className="font-medium">Entrenamiento Funcional</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domina tu
              <span className="block text-green-100">Cuerpo</span>
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 max-w-lg">
              Progresiones estructuradas desde principiante hasta avanzado. 
              Construye fuerza real con el peso de tu propio cuerpo.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" />
                <span className="font-medium">3 Niveles</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Progresiones</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span className="font-medium">Técnica Perfecta</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/20">
                <Dumbbell className="w-32 h-32 md:w-40 md:h-40 text-white/80" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-lg">
                18
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-green-600 px-4 py-2 rounded-full font-semibold shadow-lg">
                Ejercicios
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f0fdf4"/>
        </svg>
      </div>
    </div>
  );
}

// Datos de ejercicios con progresiones
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
            descripcion: "Colócate de frente a una pared a distancia de brazos extendidos. Apoya las manos a la altura del pecho. Inclina el cuerpo hacia la pared doblando los codos. Mantén el cuerpo recto desde cabeza a talones. Empuja para volver a la posición inicial. Ideal para quienes no pueden hacer flexiones en el suelo.",
            series: "3",
            repeticiones: "10-15"
          },
          {
            nivel: "Nivel 2 - Inclinación alta",
            descripcion: "Usa una superficie elevada como una mesa o mostrador alto. Manos separadas al ancho de los hombros. Cuerpo recto en línea diagonal. Baja el pecho hacia las manos. Cuanto más alta la superficie, más fácil será el ejercicio.",
            series: "3",
            repeticiones: "8-12"
          },
          {
            nivel: "Nivel 3 - Inclinación media",
            descripcion: "Usa un banco o silla firme. Manos en el borde, pies en el suelo. Cuerpo recto. Baja hasta que los codos formen 90 grados. Mantén los codos cerca del cuerpo. Sube empujando con el pecho.",
            series: "3",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 4 - Rodillas",
            descripcion: "Posición de flexión estándar pero con rodillas apoyadas en el suelo. Mantén el cuerpo recto desde cabeza a rodillas. Baja el pecho al suelo. Los codos deben ir hacia atrás, no hacia los lados.",
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
            descripcion: "Colócate frente a una silla. Separa los pies al ancho de los hombros. Baja lentamente como si te fueras a sentar, tocando apenas la silla sin apoyar todo el peso. Mantén el pecho erguido. Sube contrayendo glúteos.",
            series: "3",
            repeticiones: "12-15"
          },
          {
            nivel: "Nivel 2 - Parcial",
            descripcion: "Sentadilla estándar pero bajando solo hasta que los muslos formen 45 grados con el suelo. No bajes completamente. Mantén el peso en los talones. Rodillas alineadas con los pies.",
            series: "3",
            repeticiones: "10-12"
          },
          {
            nivel: "Nivel 3 - Completa",
            descripcion: "Baja hasta que los muslos estén paralelos al suelo. Mantén la espalda recta y el pecho arriba. Los talones no deben despegar del suelo. Contrae los glúteos al subir.",
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
            descripcion: "Apoya las rodillas y las manos en el suelo. Manos directamente bajo los hombros. Mantén el cuerpo recto desde cabeza a rodillas. Contrae el abdomen. No dejes caer las caderas.",
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
            nivel: "Nivel 1 - Dead hang",
            descripcion: "Simplemente cuelga de la barra con agarre prono. Mantén los brazos extendidos completamente. Activa los omóplatos. Acostumbra tus manos al agarre. Mantén 10-20 segundos.",
            series: "4",
            repeticiones: "15-20 seg"
          },
          {
            nivel: "Nivel 2 - Escápulas activas",
            descripcion: "Colgado de la barra, tira los hombros hacia abajo y juntos sin doblar los codos. Sube solo 2-3 cm. Baja controladamente. Trabaja la conexión mente-músculo con los dorsales.",
            series: "4",
            repeticiones: "8-10"
          },
          {
            nivel: "Nivel 3 - Negativas asistidas",
            descripcion: "Usa una silla o banda para subir a la posición final (barbilla sobre la barra). Luego baja lo más lento posible (3-5 segundos) hasta extensión completa.",
            series: "4",
            repeticiones: "3-5 negativas"
          },
          {
            nivel: "Nivel 4 - Bandas elásticas",
            descripcion: "Coloca una banda elástica resistente en la barra y apoya una rodilla en ella. La banda te asistirá a subir. Realiza el movimiento completo. Usa bandas más ligeras conforme progreses.",
            series: "4",
            repeticiones: "5-8"
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
            descripcion: "Manos separadas al ancho de los hombros. Cuerpo recto desde cabeza a talones. Baja el pecho al suelo doblando los codos hacia atrás en 45 grados. Nariz casi toca el suelo. Mantén el core activado.",
            series: "4",
            repeticiones: "12-20"
          },
          {
            nivel: "Nivel 2 - Diamond",
            descripcion: "Junta las manos formando un diamante con pulgares e índices. Colócalas bajo el centro del pecho. Enfatiza tríceps. Mantén los codos pegados al cuerpo al bajar.",
            series: "4",
            repeticiones: "8-12"
          },
          {
            nivel: "Nivel 3 - Archer",
            descripcion: "En la posición baja, extiende un brazo hacia el lado mientras el otro permanece flexionado. Alterna lados. Trabaja un lado más que el otro. Preparación para flexiones a una mano.",
            series: "4",
            repeticiones: "6-8 por lado"
          },
          {
            nivel: "Nivel 4 - Pies elevados",
            descripcion: "Coloca los pies en un banco o silla. Manos en el suelo. Mayor énfasis en hombros y parte superior del pecho. Mantén el cuerpo recto sin dejar caer las caderas.",
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
            descripcion: "Sentadilla completa con algún peso: mochila con libros, botellas de agua, o niño. Mantén la técnica perfecta. El peso debe estar cerca del pecho.",
            series: "4",
            repeticiones: "12-15"
          },
          {
            nivel: "Nivel 2 - Pistol asistido",
            descripcion: "Sentadilla unilateral agarrándote de un soporte (barra, puerta, TRX). Una pierna extendida al frente. Baja hasta sentarte en una silla o hasta tu rango máximo.",
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
            descripcion: "Sentadilla completa seguida de salto explosivo. Aterriza suavemente absorbiendo el impacto. Inmediatamente siguiente repetición. Trabaja potencia y resistencia.",
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
            descripcion: "Agarre prono separado 1.5 veces el ancho de los hombros. Cuelga completamente (dead hang) al inicio. Sube hasta barbilla sobre la barra sin impulso. Baja controladamente hasta extensión completa.",
            series: "5",
            repeticiones: "5-8"
          },
          {
            nivel: "Nivel 2 - Supinas",
            descripcion: "Agarre supino (palmas hacia ti) separado al ancho de los hombros. Mayor énfasis en bíceps. Mantén los codos cerca del cuerpo. Movimiento controlado.",
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
            descripcion: "Dominada estándar manteniendo las piernas extendidas horizontalmente al frente (posición L). Requiere fuerza de core extrema. Puedes doblar ligeramente las rodillas si es necesario.",
            series: "4",
            repeticiones: "3-5"
          }
        ]
      },
      {
        nombre: "Fondos",
        progresiones: [
          {
            nivel: "Nivel 1 - Banco",
            descripcion: "Usa un banco o silla firme. Manos en el borde, pies en el suelo con rodillas flexionadas (fácil) o extendidas (difícil). Baja hasta que los codos formen 90 grados. Empuja hasta extender completamente.",
            series: "4",
            repeticiones: "10-15"
          },
          {
            nivel: "Nivel 2 - Elevados",
            descripcion: "Manos en un banco o escalón elevado. Pies en el suelo. Mayor rango de movimiento. Baja hasta que los hombros estén por debajo de los codos.",
            series: "4",
            repeticiones: "8-12"
          },
          {
            nivel: "Nivel 3 - Paralelas asistidas",
            descripcion: "Si tienes paralelas, usa bandas elásticas para asistencia. O realiza fondos negativos (subir con ayuda, bajar lento). Mantén el cuerpo vertical.",
            series: "4",
            repeticiones: "5-8"
          },
          {
            nivel: "Nivel 4 - Paralelas libres",
            descripcion: "Fondos en paralelas sin asistencia. Cuerpo ligeramente inclinado hacia adelante para mayor pecho, vertical para mayor tríceps. Baja hasta 90 grados de flexión de codo.",
            series: "4",
            repeticiones: "6-10"
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
            descripcion: "Flexión estándar subiendo explosivamente para que las manos despeguen el suelo. Aterriza suavemente. Preparación para palmadas. Mantén el control incluso en la fase aérea.",
            series: "4",
            repeticiones: "6-10"
          },
          {
            nivel: "Nivel 2 - Con palmada",
            descripcion: "Flexión explosiva con palmada en el aire. Aterriza con las manos en la misma posición de inicio. Requiere potencia de pecho considerable. Alternativa: palmada en el pecho o muslos.",
            series: "4",
            repeticiones: "4-6"
          },
          {
            nivel: "Nivel 3 - A una mano asistida",
            descripcion: "Coloca una mano en el suelo, la otra en un balón medicinal o objeto elevado. Realiza flexiones manteniendo el equilibrio. Cambia de lado. Preparación para flexión a una mano pura.",
            series: "4",
            repeticiones: "4-6 por lado"
          },
          {
            nivel: "Nivel 4 - A una mano",
            descripcion: "Flexión con una sola mano. Piernas separadas ampliamente para equilibrio. Coloca la mano en línea con el centro del pecho. Baja controladamente. El movimiento más difícil de flexiones.",
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
            descripcion: "Agarre paralelo (palmas enfrentadas). Alterna subir la barbilla a cada lado de la barra. Trabaja los bíceps y antebrazos intensamente. Movimiento controlado.",
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
            nivel: "Nivel 4 - Muscle-up",
            descripcion: "Dominada explosiva tirando la barra al pecho, luego transición a dips. Cambio de agarre en la parte superior. El movimiento rey de la calistenia. Requiere dominadas sólidas de 10+ reps.",
            series: "5",
            repeticiones: "3-6"
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
            descripcion: "Plancha estándar elevando alternadamente las piernas rectas hacia arriba. Mantén 2-3 segundos arriba. No rotes las caderas. Control total del movimiento.",
            series: "4",
            repeticiones: "8-10 por pierna"
          },
          {
            nivel: "Nivel 3 - Side plank",
            descripcion: "Plancha lateral apoyado en un antebrazo. Cuerpo recto desde cabeza a pies. Otra mano puede estar en la cadera o extendida. Trabaja oblicuos y estabilizadores.",
            series: "4",
            repeticiones: "20-30 seg por lado"
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
        nombre: "Habilidades",
        progresiones: [
          {
            nivel: "Nivel 1 - Pino contra pared",
            descripcion: "Realiza el pino (handstand) con la espalda contra la pared para seguridad. Brazos extendidos y bloqueados. Empuja hacia arriba activamente con los hombros. Mantén 20-30 segundos.",
            series: "5",
            repeticiones: "20-30 seg"
          },
          {
            nivel: "Nivel 2 - Pino libre",
            descripcion: "Pino sin soporte de pared. Usa un spotter o cae hacia adelante en pirueta si pierdes equilibrio. Dedos de las manos agarran el suelo para balance. Mantén 10-20 segundos.",
            series: "5",
            repeticiones: "10-20 seg"
          },
          {
            nivel: "Nivel 3 - L-sit",
            descripcion: "Sentado en el suelo, apoya las manos a los lados de las caderas. Eleva el cuerpo completo del suelo manteniendo las piernas extendidas al frente. Requiere fuerza de compresión y flexibilidad.",
            series: "4",
            repeticiones: "10-15 seg"
          },
          {
            nivel: "Nivel 4 - Dragon flag",
            descripcion: "Acostado boca arriba agarrando un soporte detrás de la cabeza. Eleva las piernas y torso manteniendo el cuerpo completamente recto. Solo los hombros tocan el suelo. Bruce Lee's signature move.",
            series: "4",
            repeticiones: "3-5 reps"
          }
        ]
      }
    ]
  }
];

// Componente principal
export default function Calistenia() {
  const [expandido, setExpandido] = useState({});

  const toggleProgresion = (nivelIndex, ejercicioIndex, progresionIndex) => {
    const key = `${nivelIndex}-${ejercicioIndex}-${progresionIndex}`;
    setExpandido(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Progresiones de Ejercicios
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Cada ejercicio cuenta con 4 niveles de progresión. Domina cada nivel antes de pasar al siguiente.
            Toca cada progresión para ver la técnica detallada.
          </p>
        </div>

        {/* Niveles */}
        <div className="space-y-10">
          {niveles.map((nivel, nivelIndex) => (
            <div 
              key={nivelIndex}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Header del nivel */}
              <div 
                className="p-6 text-white"
                style={{ backgroundColor: nivel.color }}
              >
                <h3 className="text-2xl font-bold mb-2">{nivel.titulo}</h3>
                <p className="text-white/90">{nivel.descripcion}</p>
              </div>

              {/* Ejercicios */}
              <div className="p-6 space-y-8">
                {nivel.ejercicios.map((ejercicio, ejercicioIndex) => (
                  <div key={ejercicioIndex} className="border-2 border-green-100 rounded-xl overflow-hidden">
                    {/* Nombre del ejercicio */}
                    <div className="bg-green-50 px-4 py-3 border-b border-green-100">
                      <h4 className="text-xl font-bold text-green-800 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        {ejercicio.nombre}
                      </h4>
                    </div>

                    {/* Progresiones */}
                    <div className="divide-y divide-green-50">
                      {ejercicio.progresiones.map((progresion, progresionIndex) => {
                        const key = `${nivelIndex}-${ejercicioIndex}-${progresionIndex}`;
                        const isExpanded = expandido[key];

                        return (
                          <div key={progresionIndex}>
                            <button
                              onClick={() => toggleProgresion(nivelIndex, ejercicioIndex, progresionIndex)}
                              className="w-full p-4 flex items-center justify-between hover:bg-green-50/50 transition-colors text-left"
                            >
                              <div className="flex items-center gap-3">
                                <span 
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                  style={{ backgroundColor: nivel.color }}
                                >
                                  {progresionIndex + 1}
                                </span>
                                <span className="font-semibold text-green-900">
                                  {progresion.nivel}
                                </span>
                              </div>
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-green-600" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-green-600" />
                              )}
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-4 pl-16">
                                <div className="flex gap-3 mb-3">
                                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Series: {progresion.series}
                                  </span>
                                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {progresion.repeticiones}
                                  </span>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                                  <p className="text-green-900 leading-relaxed">
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
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-green-600">
          <p className="text-sm">Toca cualquier nivel para expandir y ver la técnica detallada</p>
        </div>
      </div>
    </div>
  );
}
