import React, { useState } from 'react';
import { Check, ChefHat, ShoppingCart, Calendar, Flame, Users } from 'lucide-react';

function App() {
  const [activeDay, setActiveDay] = useState('lunes');
  const [activeView, setActiveView] = useState('semana');
  const [activePerson, setActivePerson] = useState('A');
  const [prepChecklist, setPrepChecklist] = useState({});

  const days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

 const weeklyPlan = {
  lunes: {
    desayuno: { nombre: 'Avena con manzana y canela', caloriaA: 270, caloriaB: 390, ajusteB: '+40g avena, +1 cda nueces picadas', prep: 'Cocinar con agua o leche vegetal' },
    colacion1: { nombre: 'Puñado de almendras', caloriaA: 130, caloriaB: 180, ajusteB: '30g en vez de 20g', prep: 'Porcionar en bolsitas' },
    almuerzo: { nombre: 'Charquicán vegetal con huevo', caloriaA: 380, caloriaB: 530, ajusteB: '+1 huevo extra, +1/2 taza zapallo', prep: 'Preparar en olla el domingo' },
    colacion2: { nombre: 'Palitos de pepino y zanahoria con hummus', caloriaA: 90, caloriaB: 150, ajusteB: '+2 cdas hummus, +1 pan pita integral', prep: 'Cortar y guardar' },
    cena: { nombre: 'Filete de merluza con ensalada chilena', caloriaA: 300, caloriaB: 450, ajusteB: '+50g merluza, +1 cda aceite oliva, +1/2 taza arroz integral', prep: 'Cocinar fresco' }
  },
  martes: {
    desayuno: { nombre: 'Pan integral con palta y huevo duro', caloriaA: 280, caloriaB: 400, ajusteB: '+1 rebanada pan y +1 huevo', prep: 'Preparar por la mañana' },
    colacion1: { nombre: 'Manzana con mantequilla de maní', caloriaA: 150, caloriaB: 210, ajusteB: '+1 cda mantequilla extra', prep: 'Porcionar' },
    almuerzo: { nombre: 'Pollo al horno con puré de zapallo y ensalada verde', caloriaA: 390, caloriaB: 540, ajusteB: '+80g pollo, +1/2 taza puré', prep: 'Meal prep domingo' },
    colacion2: { nombre: 'Yogurt natural con avena y semillas', caloriaA: 110, caloriaB: 170, ajusteB: '+1/4 taza avena, +1 cda semillas', prep: 'Porcionar' },
    cena: { nombre: 'Tortilla de verduras con porotos verdes', caloriaA: 270, caloriaB: 400, ajusteB: '+1 huevo, +1/2 taza porotos verdes', prep: 'Cocinar fresco' }
  },
  miércoles: {
    desayuno: { nombre: 'Smoothie de frutos rojos y avena', caloriaA: 260, caloriaB: 380, ajusteB: '+1 plátano, +1 cda chía', prep: 'Congelar porciones' },
    colacion1: { nombre: 'Mix de nueces y pasas', caloriaA: 120, caloriaB: 170, ajusteB: '40g en vez de 30g', prep: 'Porcionar en bolsitas' },
    almuerzo: { nombre: 'Porotos con zapallo y ensalada de repollo', caloriaA: 390, caloriaB: 560, ajusteB: '+1/2 taza porotos, +1 cda aceite', prep: 'Meal prep martes' },
    colacion2: { nombre: 'Apio con hummus', caloriaA: 80, caloriaB: 130, ajusteB: '+2 cdas hummus', prep: 'Cortar y guardar' },
    cena: { nombre: 'Pescado al vapor con ensalada de betarraga', caloriaA: 290, caloriaB: 420, ajusteB: '+60g pescado, +1/2 taza arroz integral', prep: 'Cocinar fresco' }
  },
  jueves: {
    desayuno: { nombre: 'Chía pudding con frutilla y avena', caloriaA: 275, caloriaB: 395, ajusteB: '+2 cdas chía, +1/4 taza avena extra', prep: 'Preparar la noche anterior' },
    colacion1: { nombre: 'Puñado de nueces', caloriaA: 130, caloriaB: 185, ajusteB: '20 mitades en vez de 14', prep: 'Porcionar' },
    almuerzo: { nombre: 'Ensalada de atún con arroz integral y palta', caloriaA: 370, caloriaB: 540, ajusteB: '+1 lata atún, +1/2 palta, +1/2 taza arroz', prep: 'Meal prep miércoles' },
    colacion2: { nombre: 'Tomates cherry con aceite de oliva', caloriaA: 90, caloriaB: 150, ajusteB: '+1 pan pita integral', prep: 'Lavar y guardar' },
    cena: { nombre: 'Sopa de verduras con huevo pochado', caloriaA: 280, caloriaB: 400, ajusteB: '+1 huevo, +1/2 taza lentejas', prep: 'Hacer por la tarde' }
  },
  viernes: {
    desayuno: { nombre: 'Pan integral con palta y tomate', caloriaA: 270, caloriaB: 390, ajusteB: '+1 rebanada extra de pan y +1/4 palta', prep: 'Preparar por la mañana' },
    colacion1: { nombre: 'Pera con almendras', caloriaA: 130, caloriaB: 180, ajusteB: '+10g almendras', prep: 'Simple y fresco' },
    almuerzo: { nombre: 'Cazuela de vacuno magro con verduras', caloriaA: 400, caloriaB: 560, ajusteB: '+1 papa chica, +50g carne', prep: 'Preparar en olla' },
    colacion2: { nombre: 'Yogurt con avena y canela', caloriaA: 100, caloriaB: 160, ajusteB: '+1/4 taza avena', prep: 'Porcionar' },
    cena: { nombre: 'Revuelto de zapallo italiano con pollo', caloriaA: 300, caloriaB: 430, ajusteB: '+80g pollo, +1 huevo', prep: 'Cocinar fresco' }
  },
  sábado: {
    desayuno: { nombre: 'Tortilla de avena con plátano', caloriaA: 280, caloriaB: 400, ajusteB: '+1 huevo y +1/2 plátano', prep: 'Cocinar por la mañana' },
    colacion1: { nombre: 'Smoothie de frutilla y yogurt', caloriaA: 135, caloriaB: 195, ajusteB: '+1 cda mantequilla almendra', prep: 'Congelar porciones' },
    almuerzo: { nombre: 'Lentejas con arroz y ensalada', caloriaA: 380, caloriaB: 540, ajusteB: '+1/2 taza lentejas, +1/2 taza arroz', prep: 'Meal prep viernes' },
    colacion2: { nombre: 'Bastones de zanahoria con hummus', caloriaA: 90, caloriaB: 150, ajusteB: '+2 cdas hummus', prep: 'Cortar y guardar' },
    cena: { nombre: 'Salmón al horno con ensalada verde', caloriaA: 310, caloriaB: 430, ajusteB: '+60g salmón, +1 cda aceite oliva', prep: 'Cocinar fresco' }
  },
  domingo: {
    desayuno: { nombre: 'Avena con pera y canela', caloriaA: 275, caloriaB: 395, ajusteB: '+40g avena, +1 cda nueces', prep: 'Cocinar en la mañana' },
    colacion1: { nombre: 'Mix de frutos secos', caloriaA: 140, caloriaB: 200, ajusteB: '40g en vez de 28g', prep: 'Porcionar' },
    almuerzo: { nombre: 'Pollo a la plancha con ensalada chilena', caloriaA: 380, caloriaB: 540, ajusteB: '+80g pollo, +1/2 taza arroz', prep: 'Cocinar domingo' },
    colacion2: { nombre: 'Pepino con limón y sal de mar', caloriaA: 80, caloriaB: 140, ajusteB: '+1 cda aceite oliva', prep: 'Cortar fresco' },
    cena: { nombre: 'Budín de verduras con quinoa', caloriaA: 310, caloriaB: 410, ajusteB: '+1/2 taza quinoa', prep: 'Preparar para la semana' }
  }
};

const mealPrepSchedule = {
  domingo: {
    titulo: 'Día principal de preparación',
    tiempo: '2.5 horas',
    tareas: [
      'Cocinar arroz integral (4 tazas crudas)',
      'Hervir porotos y lentejas (1kg total)',
      'Preparar charquicán vegetal y puré de zapallo (guardar porciones)',
      'Cocinar pollo y pescado (porcionar y congelar)',
      'Cortar verduras para ensaladas (zanahoria, repollo, lechuga, pepino)',
      'Preparar hummus y aderezos caseros',
      'Porcionar frutos secos y avena para la semana'
    ]
  },
  miércoles: {
    titulo: 'Refuerzo de mitad de semana',
    tiempo: '1 hora',
    tareas: [
      'Reponer verduras frescas (tomate, lechuga, palta)',
      'Cocinar cazuela o sopa de verduras',
      'Hacer tortillas de verduras y budín de quinoa',
      'Preparar ensalada de atún o pollo'
    ]
  }
};

const shoppingList = {
  proteinas: [
    'Pollo: 2kg (pechuga o truto corto desgrasado)',
    'Pescado blanco (merluza): 1kg',
    'Salmón: 600g',
    'Atún en agua: 6 latas',
    'Huevos: 30 unidades',
    'Carne magra (posta rosada o asiento): 800g'
  ],
  granos: [
    'Arroz integral: 2kg',
    'Avena integral: 1.5kg',
    'Pan integral: 4 paquetes (8 rebanadas c/u)',
    'Quinoa: 1kg',
    'Tortillas integrales: 10 unidades'
  ],
  legumbres: [
    'Porotos: 1kg',
    'Lentejas: 1kg',
    'Garbanzos: 500g'
  ],
  vegetales: [
    'Zapallo camote: 2kg',
    'Zanahorias: 1.5kg',
    'Lechuga: 4 unidades',
    'Tomate: 2kg',
    'Pepino: 1kg',
    'Repollo: 1 unidad',
    'Betarraga: 1kg',
    'Zapallo italiano: 1kg',
    'Cebolla: 1kg',
    'Ajo: 1 cabeza',
    'Papas: 1kg',
    'Pimentón: 500g'
  ],
  frutas: [
    'Manzanas: 10 unidades',
    'Peras: 8 unidades',
    'Plátanos: 6 unidades',
    'Frutillas: 500g',
    'Frutos rojos congelados: 500g',
    'Limones: 6 unidades'
  ],
  frutosSecos: [
    'Almendras: 400g',
    'Nueces: 300g',
    'Mix frutos secos: 400g',
    'Mantequilla de maní natural: 1 frasco'
  ],
  otros: [
    'Aceite de oliva extra virgen: 500ml',
    'Semillas de chía: 200g',
    'Tahini o garbanzos para hummus: 500g',
    'Yogurt natural sin azúcar: 2L',
    'Leche vegetal o descremada: 2L',
    'Cúrcuma, canela, pimienta negra, sal de mar'
  ]
};


  const toggleCheck = (category, item) => {
    const key = `${category}-${item}`;
    setPrepChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <ChefHat className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-800">Plan Antiinflamatorio Meal Prep</h1>
        </div>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActivePerson('A')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activePerson === 'A' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300'
            }`}
          >
            <Users className="w-5 h-5" />
            Persona A - 1170 cal
          </button>
          <button
            onClick={() => setActivePerson('B')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              activePerson === 'B' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300'
            }`}
          >
            <Users className="w-5 h-5" />
            Persona B - 1700 cal
          </button>
        </div>

        <div className={`border-l-4 p-4 rounded ${activePerson === 'A' ? 'bg-blue-100 border-blue-600' : 'bg-purple-100 border-purple-600'}`}>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">
              {activePerson === 'A' ? '1170 calorías/día' : '1700 calorías/día'}
            </span> • Sin lactosa • Sin amapola • 
            Enfoque antiinflamatorio con omega-3, antioxidantes y especias
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveView('semana')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            activeView === 'semana' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Calendar className="w-5 h-5" />
          Plan Semanal
        </button>
        <button
          onClick={() => setActiveView('mealprep')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            activeView === 'mealprep' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChefHat className="w-5 h-5" />
          Guía Meal Prep
        </button>
        <button
          onClick={() => setActiveView('compras')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            activeView === 'compras' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          Lista de Compras
        </button>
      </div>

      {activeView === 'semana' && (
        <div>
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                  activeDay === day
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">{activeDay}</h2>
            
            <div className="space-y-4">
              {Object.entries(weeklyPlan[activeDay]).map(([mealType, meal]) => {
                const mealNames = {
                  desayuno: '🌅 Desayuno',
                  colacion1: '🥜 Colación 1',
                  almuerzo: '🍽️ Almuerzo',
                  colacion2: '🍎 Colación 2',
                  cena: '🌙 Cena'
                };

                const calories = activePerson === 'A' ? meal.caloriaA : meal.caloriaB;
                
                return (
                  <div key={mealType} className={`border-l-4 p-4 rounded-r-lg ${activePerson === 'A' ? 'border-blue-500 bg-blue-50' : 'border-purple-500 bg-purple-50'}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{mealNames[mealType]}</h3>
                        <p className="text-lg text-gray-900">{meal.nombre}</p>
                        {activePerson === 'B' && meal.ajusteB && (
                          <p className="text-sm text-purple-700 mt-1 font-medium">➕ {meal.ajusteB}</p>
                        )}
                        <p className="text-sm text-gray-600 mt-1">📝 {meal.prep}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span className="font-bold text-gray-800">{calories} cal</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Total del día:</span>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  <span className={`text-2xl font-bold ${activePerson === 'A' ? 'text-blue-600' : 'text-purple-600'}`}>
                    {Object.values(weeklyPlan[activeDay]).reduce((sum, meal) => 
                      sum + (activePerson === 'A' ? meal.caloriaA : meal.caloriaB), 0
                    )} cal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'mealprep' && (
        <div className="space-y-6">
          {Object.entries(mealPrepSchedule).map(([day, schedule]) => (
            <div key={day} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">{day}</h2>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  ⏱️ {schedule.tiempo}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">{schedule.titulo}</h3>
              <div className="space-y-3">
                {schedule.tareas.map((tarea, index) => (
                  <div
                    key={index}
                    onClick={() => toggleCheck(day, index)}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                  >
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        prepChecklist[`${day}-${index}`]
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {prepChecklist[`${day}-${index}`] && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`text-gray-700 ${prepChecklist[`${day}-${index}`] ? 'line-through' : ''}`}>
                      {tarea}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-gray-800 mb-2">💡 Tips para Meal Prep con 2 Personas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Usa contenedores de colores diferentes para cada persona</li>
              <li>• Etiqueta claramente con Persona A o B y día de la semana</li>
              <li>• Cocina las proteínas juntas pero sepáralas según las porciones</li>
              <li>• Los granos se pueden cocinar en mayor cantidad y dividir</li>
              <li>• Congela porciones extras si preparas demasiado</li>
            </ul>
          </div>
        </div>
      )}

      {activeView === 'compras' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 Lista de Compras Semanal</h2>
          
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              Las cantidades están especificadas para ambas personas (A = 1170 cal / B = 1700 cal)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(shoppingList).map(([category, items]) => {
              const categoryNames = {
                proteinas: '🥩 Proteínas',
                granos: '🌾 Granos y Cereales',
                legumbres: '🫘 Legumbres',
                vegetales: '🥬 Vegetales',
                frutas: '🍎 Frutas',
                frutosSecos: '🥜 Frutos Secos',
                otros: '🧂 Otros'
              };

              return (
                <div key={category} className="border-2 border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">{categoryNames[category]}</h3>
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => toggleCheck(category, item)}
                        className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer transition"
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            prepChecklist[`${category}-${item}`]
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300'
                          }`}
                        >
                          {prepChecklist[`${category}-${item}`] && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span
                          className={`text-gray-700 text-sm ${
                            prepChecklist[`${category}-${item}`] ? 'line-through' : ''
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-gray-800 mb-2">🌟 Alimentos Antiinflamatorios Clave</h4>
            <p className="text-sm text-gray-700">
              Este plan incluye: salmón (omega-3), cúrcuma, jengibre, vegetales de hoja verde, 
              frutos rojos (antioxidantes), frutos secos (grasas saludables), aceite de oliva virgen extra, 
              y especias antiinflamatorias. Todo sin lactosa ni amapola.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;