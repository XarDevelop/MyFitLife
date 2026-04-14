// src/pages/Consejos.jsx
import { useState } from 'react';
import { 
  Dumbbell, 
  Heart, 
  Scale, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  Droplets,
  Flame,
  BookOpen,
  ChevronRight,
  Info
} from 'lucide-react';
import ButtonExit from '../../components/ButtonExit/ButtonExit'
import Footer from '../../components/Footer/Footer'

// Datos de consejos
const consejosData = {
  fitness: {
    id: 'fitness',
    titulo: 'Consejos Fitness',
    descripcion: 'Fundamentos esenciales para un estilo de vida activo y saludable',
    icono: <Dumbbell className="w-6 h-6" />,
    color: 'bg-emerald-500',
    consejos: [
      'Establece metas realistas y alcanzables a corto y largo plazo',
      'La consistencia vence a la intensidad: mejor entrenar 30 minutos diarios que 3 horas una vez',
      'Descansa al menos 1-2 días por semana para recuperación muscular',
      'Mantén un diario de entrenamiento para trackear tu progreso',
      'Varía tus rutinas cada 4-6 semanas para evitar estancamiento'
    ],
    nutricion: [
      'Consume proteína en cada comida (1.6-2.2g por kg de peso corporal)',
      'Hidratación: 35ml de agua por kg de peso corporal diario',
      'Come carbohidratos complejos 2-3 horas antes de entrenar',
      'Incluye grasas saludables: aguacate, nueces, aceite de oliva',
      'Ventana anabólica: consume proteína dentro de los 30-60 min post-entreno'
    ],
    ejercicios: [
      'Calentamiento dinámico: 5-10 min de movilidad articular',
      'Estiramientos estáticos post-entreno: 15-30 segundos por músculo',
      'Foam rolling para liberar fascia muscular',
      'Ejercicios compuestos primero, aislamiento después',
      'Enfriamiento gradual: reduce intensidad los últimos 5 minutos'
    ]
  },
  vida: {
    id: 'vida',
    titulo: 'Consejos de Vida',
    descripcion: 'Hábitos diarios que transforman tu bienestar general',
    icono: <Heart className="w-6 h-6" />,
    color: 'bg-rose-500',
    consejos: [
      'Duerme 7-9 horas: el sueño es cuando tu cuerpo realmente se recupera',
      'Gestiona el estrés con meditación o respiración profunda',
      'Mantén relaciones sociales positivas y de apoyo',
      'Desconecta de pantallas 1 hora antes de dormir',
      'Practica la gratitud diaria: mejora tu salud mental'
    ],
    nutricion: [
      'Come sin prisa: la digestión comienza en la boca con la masticación',
      'Incluye alimentos de todos los colores (fitonutrientes variados)',
      'Reduce el azúcar añadido y los ultraprocesados',
      'Planifica tus comidas semanalmente para evitar decisiones impulsivas',
      'El 80/20: 80% alimentación nutritiva, 20% placeres moderados'
    ],
    ejercicios: [
      'NEAT (Actividad No Ejercicio): camina, sube escaleras, mantente en movimiento',
      'Yoga o Pilates para flexibilidad y mente-cuerpo',
      'Estiramientos matutinos para activar el cuerpo',
      'Micro-pausas activas cada hora si trabajas sentado',
      'Actividades al aire libre para vitamina D y estado de ánimo'
    ]
  },
  obesidad: {
    id: 'obesidad',
    titulo: 'Obesidad',
    descripcion: 'Enfoque integral para la pérdida de peso saludable y sostenible',
    icono: <Scale className="w-6 h-6" />,
    color: 'bg-orange-500',
    consejos: [
      'Pierde peso gradualmente: 0.5-1kg por semana es saludable',
      'No te obsesiones con la báscula: mide progreso con fotos y medidas',
      'Busca apoyo profesional: nutricionista y psicólogo especializado',
      'Identifica tus desencadenantes emocionales de comida',
      'Celebra los hitos no relacionados con peso: más energía, mejor sueño'
    ],
    nutricion: [
      'Déficit calórico moderado: 300-500 kcal menos de tu gasto energético',
      'Prioriza alimentos de alta saciedad: proteínas, vegetales, fibra',
      'Bebe agua antes de las comidas para reducir apetito',
      'Elimina bebidas azucaradas: fuente vacía de calorías',
      'Proteína alta para preservar masa muscular durante déficit'
    ],
    ejercicios: [
      'Comienza con caminatas de bajo impacto 30 min diarios',
      'Entrenamiento de fuerza: músculo activo quema más calorías en reposo',
      'Ejercicios en agua: reduce impacto en articulaciones',
      'Aumenta intensidad gradualmente, no abras demasiado',
      'Actividad diaria consistente mejor que sesiones extremas esporádicas'
    ]
  },
  trabajadores: {
    id: 'trabajadores',
    titulo: 'Personas Trabajadoras',
    descripcion: 'Fitness y salud para quienes tienen poco tiempo',
    icono: <Briefcase className="w-6 h-6" />,
    color: 'bg-blue-500',
    consejos: [
      'Entrena temprano: antes de que surjan imprevistos laborales',
      'Prepara comidas el domingo para toda la semana (meal prep)',
      'Utiliza descansos activos: 5 min de movimiento cada hora',
      'HIIT: máximos resultados en mínimo tiempo (20-30 min)',
      'Combina actividades: reuniones caminando, bicicleta al trabajo'
    ],
    nutricion: [
      'Smoothies nutritivos: desayuno rápido y completo',
      'Snacks saludables en el escritorio: frutos secos, yogur, fruta',
      'Evita comer frente al computador: come consciente',
      'Hidratación programada: botella de agua visible en el escritorio',
      'Almuerzos ligeros para evitar somnolencia post-comida'
    ],
    ejercicios: [
      'Rutinas de 7 minutos en casa sin equipamiento',
      'Escaleras en lugar de ascensor siempre que sea posible',
      'Estiramientos en el escritorio: cuello, hombros, muñecas',
      'Entrenamiento de cuerpo completo 3 veces por semana',
      'Actividad física durante llamadas: camina mientras hablas'
    ]
  },
  definicion: {
    id: 'definicion',
    titulo: 'Definición Muscular',
    descripcion: 'Reduce grasa corporal manteniendo masa muscular',
    icono: <Target className="w-6 h-6" />,
    color: 'bg-cyan-500',
    consejos: [
      'El déficit calórico es clave, pero no extremo para no perder músculo',
      'Mantén alto el consumo de proteínas (2.2-2.4g/kg)',
      'Entrenamiento de fuerza esencial para preservar músculo',
      'Cardio moderado: no excederse para evitar catabolismo',
      'Paciencia: la definición toma más tiempo que la pérdida de peso'
    ],
    nutricion: [
      'Timing de carbohidratos: principalmente alrededor del entrenamiento',
      'Ciclos de carbohidratos: más en días de entreno, menos en descanso',
      'Grasas saludables moderadas: 0.8-1g/kg para hormonas',
      'Fibra alta para saciedad: 25-35g diarios mínimo',
      'Considera suplementos: cafeína, creatina, omega-3'
    ],
    ejercicios: [
      'Entrenamiento con pesas 4-5 veces semanales',
      'Cardio LISS (baja intensidad) o HIIT moderado 2-3 veces',
      'Entrenamiento en ayunas: opcional, no esencial',
      'Series de 8-12 repeticiones para hipertrofia muscular',
      'Descansos cortos (60-90 seg) para mantener frecuencia cardíaca'
    ]
  },
  volumen: {
    id: 'volumen',
    titulo: 'Volumen (Ganancia Muscular)',
    descripcion: 'Aumenta masa muscular de forma limpia y efectiva',
    icono: <TrendingUp className="w-6 h-6" />,
    color: 'bg-purple-500',
    consejos: [
      'Superávit calórico controlado: 200-300 kcal sobre mantenimiento',
      'Prioriza el progreso de carga: levanta más peso con el tiempo',
      'Duerme suficiente: el crecimiento muscular ocurre en reposo',
      'No busques ganar peso rápido: máximo 0.5% de peso corporal/semana',
      'Sé paciente: la hipertrofia natural lleva meses, no semanas'
    ],
    nutricion: [
      'Superávit proteico: 1.8-2.2g de proteína por kg de peso',
      'Carbohidratos altos: 4-6g/kg para energía y recuperación',
      'Comidas frecuentes: 4-5 veces al día para síntesis proteica',
      'Creatina monohidratada: 5g diarios probados científicamente',
      'Caseína antes de dormir: liberación lenta de aminoácidos'
    ],
    ejercicios: [
      'Enfócate en ejercicios compuestos: sentadilla, peso muerto, press',
      'Volumen de entrenamiento: 10-20 series por grupo muscular/semana',
      'Rango de repeticiones mixto: 6-12 para variedad de fibras',
      'Eccéntrico controlado: 2-3 segundos en la fase negativa',
      'Descansos de 2-3 minutos entre series para recuperación ATP'
    ]
  },
  ancianos: {
    id: 'ancianos',
    titulo: 'Personas Ancianas',
    descripcion: 'Mantén la movilidad, fuerza y calidad de vida en la tercera edad',
    icono: <Users className="w-6 h-6" />,
    color: 'bg-amber-500',
    consejos: [
      'La actividad física es anti-envejecimiento: nunca es tarde para empezar',
      'Equilibrio y prevención de caídas: prioridad absoluta',
      'Socialización mediante actividad física: grupos de caminata, tai chi',
      'Chequeos médicos regulares antes de iniciar nuevas actividades',
      'Adapta el ejercicio a tus capacidades actuales, no a las pasadas'
    ],
    nutricion: [
      'Proteína alta para combatir sarcopenia: 1.2-1.5g/kg',
      'Calcio y Vitamina D: esenciales para salud ósea',
      'Hidratación consciente: la sed disminuye con la edad',
      'Alimentos anti-inflamatorios: omega-3, frutas, vegetales',
      'Comidas pequeñas y frecuentes si el apetito disminuye'
    ],
    ejercicios: [
      'Entrenamiento de fuerza ligero: bandas elásticas, pesas livianas',
      'Ejercicios de equilibrio: pie de un solo pie, caminar en línea',
      'Movilidad articular diaria: mantener rango de movimiento',
      'Natación o aquagym: sin impacto, gran resistencia',
      'Tai Chi o yoga suave: equilibrio, flexibilidad y calma mental'
    ]
  },
  'bajo-peso': {
    id: 'bajo-peso',
    titulo: 'Bajo Peso',
    descripcion: 'Gana peso saludablemente con enfoque en masa magra',
    icono: <AlertTriangle className="w-6 h-6" />,
    color: 'bg-red-500',
    consejos: [
      'Consulta médica primero: descarta causas patológicas',
      'Aumento gradual: 0.25-0.5kg por semana es seguro',
      'No caigas en comida chatarra: busca nutrientes densos',
      'Come más frecuentemente si tienes poco apetito',
      'Seguimiento profesional: nutricionista especializado'
    ],
    nutricion: [
      'Superávit calórico de 300-500 kcal sobre mantenimiento',
      'Alimentos densos en calorías: frutos secos, aguacate, aceite de oliva',
      'Smoothies calóricos: fáciles de consumir, nutritivos',
      'Proteína adecuada: 1.6-2g/kg para ganar músculo, no solo grasa',
      'Carbohidratos complejos: avena, arroz integral, patatas'
    ],
    ejercicios: [
      'Entrenamiento de fuerza prioritario sobre cardio excesivo',
      'Ejercicios compuestos para estimular apetito hormonal',
      'Evita cardio de alta intensidad que quema muchas calorías',
      'Yoga o pilates para masa muscular y apetito',
      'Descanso adecuado: el crecimiento ocurre en recuperación'
    ]
  }
};

// Glosario de términos
const glosario = [
  { termino: 'Deficit Calórico', definicion: 'Consumir menos calorías de las que gastas, necesario para perder grasa.' },
  { termino: 'Superávit Calórico', definicion: 'Consumir más calorías de las que gastas, necesario para ganar músculo.' },
  { termino: 'Hipertrofia', definicion: 'Aumento del tamaño de las células musculares, es decir, crecimiento muscular.' },
  { termino: 'Sarcopenia', definicion: 'Pérdida de masa muscular relacionada con la edad.' },
  { termino: 'Catabolismo', definicion: 'Desgaste o pérdida de tejido muscular.' },
  { termino: 'Anabólico', definicion: 'Estado de construcción de tejidos, especialmente músculo.' },
  { termino: 'NEAT', definicion: 'Gasto energético por actividades no deportivas (caminar, limpiar, etc.).' },
  { termino: 'LISS', definicion: 'Cardio de baja intensidad y duración sostenida (caminata rápida, bicicleta suave).' },
  { termino: 'HIIT', definicion: 'Entrenamiento de alta intensidad en intervalos cortos y descansos.' },
  { termino: 'Eccéntrico', definicion: 'Fase negativa del ejercicio cuando el músculo se alarga bajo tensión.' },
  { termino: 'Concentrico', definicion: 'Fase positiva del ejercicio cuando el músculo se acorta.' },
  { termino: 'Isométrico', definicion: 'Contracción muscular sin movimiento de las articulaciones.' },
  { termino: 'Foam Rolling', definicion: 'Automasaje con rodillo para liberar tensiones musculares y fascia.' },
  { termino: 'Ventana Anabólica', definicion: 'Periodo post-entreno donde el cuerpo absorbe mejor nutrientes (30-60 min).' },
  { termino: 'Macros', definicion: 'Macronutrientes: proteínas, carbohidratos y grasas.' },
  { termino: 'Micronutrientes', definicion: 'Vitaminas y minerales necesarios en cantidades menores.' },
  { termino: 'Glicógeno', definicion: 'Almacén de carbohidratos en músculos e hígado para energía.' },
  { termino: 'ATP', definicion: 'Adenosín Trifosfato: molécula de energía celular inmediata.' },
  { termino: 'Tasa Metabólica Basal', definicion: 'Calorías que gastas en reposo absoluto para mantener funciones vitales.' },
  { termino: 'Densidad Nutricional', definicion: 'Cantidad de nutrientes por caloría de un alimento.' }
];

// Componente de tarjeta de consejo
const ConsejoCard = ({ consejo, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
        isActive 
          ? `${consejo.color} text-white border-transparent shadow-lg transform scale-[1.02]` 
          : 'bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-emerald-50 text-emerald-600'}`}>
          {consejo.icono}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {consejo.titulo}
          </h3>
          <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
            {consejo.descripcion}
          </p>
        </div>
        <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-white' : 'text-gray-400'}`} />
      </div>
    </button>
  );
};

// Componente de sección de contenido
const ContenidoSeccion = ({ titulo, items, icono, colorClass }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
    <div className="flex items-center gap-2 mb-4">
      <div className={`p-2 rounded-lg ${colorClass}`}>
        {icono}
      </div>
      <h4 className="font-semibold text-gray-800">{titulo}</h4>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colorClass.replace('bg-', 'bg-').replace('/10', '')}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Componente de glosario
const GlosarioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-gray-800">Glosario FitLife</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid gap-3">
            {glosario.map((item, idx) => (
              <div key={idx} className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-1">{item.termino}</h4>
                <p className="text-sm text-gray-600">{item.definicion}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
          >
            Cerrar Glosario
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Consejos() {
  const [categoriaActiva, setCategoriaActiva] = useState('fitness');
  const [glosarioAbierto, setGlosarioAbierto] = useState(false);
  
  const consejoActual = consejosData[categoriaActiva];

  return (
    <div className="min-h-screen mx-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <GlosarioModal isOpen={glosarioAbierto} onClose={() => setGlosarioAbierto(false)} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 rounded-xl shadow-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                  Consejos FitLife
                </h1>
                <p className="text-sm text-gray-500">Guía completa para cada etapa de tu vida</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGlosarioAbierto(true)}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Glosario
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Menú de categorías */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <ButtonExit dir={'/Home'} name={'Salir'} />
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-emerald-500" />
                Selecciona tu perfil
              </h2>
              
              <div className="space-y-3">
                {Object.keys(consejosData).map((key) => (
                  <ConsejoCard
                    key={key}
                    consejo={consejosData[key]}
                    isActive={categoriaActiva === key}
                    onClick={() => setCategoriaActiva(key)}
                  />
                ))}
              </div>
            </div>
            
            {/* Mini glosario preview */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
              <BookOpen className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="font-semibold text-lg mb-2">¿Términos confusos?</h3>
              <p className="text-sm text-emerald-100 mb-4">
                Consulta nuestro glosario con 20+ términos fitness explicados de forma sencilla.
              </p>
              <button 
                onClick={() => setGlosarioAbierto(true)}
                className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
              >
                Abrir Glosario
              </button>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header de categoría activa */}
            <div className={`${consejoActual.color} rounded-2xl p-8 text-white shadow-lg`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  {consejoActual.icono}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{consejoActual.titulo}</h2>
                  <p className="text-white/90 text-lg">{consejoActual.descripcion}</p>
                </div>
              </div>
            </div>

            {/* Grid de secciones */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Consejos Generales */}
              <ContenidoSeccion 
                titulo="Consejos Clave"
                items={consejoActual.consejos}
                icono={<Heart className="w-5 h-5 text-rose-600" />}
                colorClass="bg-rose-100"
              />
              
              {/* Nutrición */}
              <ContenidoSeccion 
                titulo="Nutrición Especializada"
                items={consejoActual.nutricion}
                icono={<Droplets className="w-5 h-5 text-blue-600" />}
                colorClass="bg-blue-100"
              />
              
              {/* Ejercicios */}
              <ContenidoSeccion 
                titulo="Ejercicios & Movimiento"
                items={consejoActual.ejercicios}
                icono={<Flame className="w-5 h-5 text-orange-600" />}
                colorClass="bg-orange-100"
              />
              
              {/* Card especial de hidratación */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="w-6 h-6" />
                  <h4 className="font-semibold text-lg">Hidratación Inteligente</h4>
                </div>
                <ul className="space-y-2 text-sm text-cyan-50">
                  <li>• 35ml de agua por kg de peso corporal</li>
                  <li>• +500ml por cada hora de ejercicio</li>
                  <li>• Electrolyitos en entrenos &gt;60 min</li>
                  <li>• Orina clara = buena hidratación</li>
                  <li>• Limita cafeína y alcohol deshidratantes</li>
                </ul>
              </div>
            </div>

            {/* Sección de estiramientos y calentamiento */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Flame className="w-6 h-6 text-orange-500" />
                Estiramientos y Calentamientos Esenciales
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-emerald-700 border-b border-emerald-100 pb-2">Calentamiento Dinámico (Pre-entreno)</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">1.</span>
                      <span><strong>Rotaciones articulares:</strong> 10 repeticiones por articulación (cuello, hombros, muñecas, caderas, rodillas, tobillos)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">2.</span>
                      <span><strong>Marcha en el lugar:</strong> 2 minutos elevando rodillas</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">3.</span>
                      <span><strong>Skipping suave:</strong> 30 segundos para activar sistema nervioso</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">4.</span>
                      <span><strong>Movilidad de cadera:</strong> 10 sentadillas profundas con peso corporal</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">5.</span>
                      <span><strong>Activación glútea:</strong> 15 puente de glúteos</span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-emerald-700 border-b border-emerald-100 pb-2">Estiramientos Estáticos (Post-entreno)</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">1.</span>
                      <span><strong>Isquiotibiales:</strong> 30 segundos por pierna, rodilla ligeramente flexionada</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">2.</span>
                      <span><strong>Cuádriceps:</strong> 30 segundos, agarrando tobillo hacia glúteo</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">3.</span>
                      <span><strong>Pectorales:</strong> 30 segundos, brazo contra pared, rotando torso</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">4.</span>
                      <span><strong>Dorsales:</strong> 30 segundos, brazos arriba inclinándote lateralmente</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">5.</span>
                      <span><strong>Posición del niño:</strong> 60 segundos para relajar espalda baja</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-orange-800 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Importante:</strong> Nunca estires "frío" (sin calentar antes). Los estiramientos estáticos previos al ejercicio pueden reducir la fuerza muscular. Usa estiramientos dinámicos antes y estáticos después.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}