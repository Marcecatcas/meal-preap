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
      desayuno: { nombre: 'Overnight Oats con Arándanos', caloriaA: 280, caloriaB: 400, ajusteB: '+50g avena, +1 cda mantequilla almendra', prep: 'Preparar la noche anterior' },
      colacion1: { nombre: 'Almendras', caloriaA: 130, caloriaB: 180, ajusteB: '30g en vez de 23g', prep: 'Porcionar en bolsitas' },
      almuerzo: { nombre: 'Bowl de Salmón con Quinoa', caloriaA: 380, caloriaB: 520, ajusteB: '+50g salmón, +1/2 taza quinoa', prep: 'Meal prep domingo' },
      colacion2: { nombre: 'Palitos de Zanahoria con Hummus', caloriaA: 90, caloriaB: 150, ajusteB: '+2 cdas hummus, +1 pan integral', prep: 'Cortar y guardar' },
      cena: { nombre: 'Pechuga de Pollo con Brócoli al Vapor', caloriaA: 290, caloriaB: 450, ajusteB: '+80g pollo, +1 cdta aceite oliva, +1/2 taza arroz integral', prep: 'Meal prep domingo' }
    },
    martes: {
      desayuno: { nombre: 'Smoothie Verde con Espinaca y Mango', caloriaA: 270, caloriaB: 390, ajusteB: '+1 plátano, +1 cda semillas chía', prep: 'Congelar porciones' },
      colacion1: { nombre: 'Manzana con Mantequilla de Almendra', caloriaA: 140, caloriaB: 200, ajusteB: '+1 cda mantequilla almendra', prep: 'Porcionar mantequilla' },
      almuerzo: { nombre: 'Ensalada de Garbanzos y Vegetales', caloriaA: 370, caloriaB: 530, ajusteB: '+1/2 taza garbanzos, +1/2 aguacate', prep: 'Meal prep domingo' },
      colacion2: { nombre: 'Rodajas de Pepino con Guacamole', caloriaA: 100, caloriaB: 170, ajusteB: '+1/2 aguacate extra, +10 almendras', prep: 'Cortar pepino' },
      cena: { nombre: 'Filete de Pescado Blanco con Espárragos', caloriaA: 300, caloriaB: 410, ajusteB: '+50g pescado, +1/2 taza quinoa', prep: 'Cocinar fresco 15min' }
    },
    miércoles: {
      desayuno: { nombre: 'Tostada de Aguacate con Huevo Pochado', caloriaA: 290, caloriaB: 420, ajusteB: '+1 huevo, +1/4 aguacate', prep: 'Hacer por la mañana' },
      colacion1: { nombre: 'Mix de Nueces y Arándanos', caloriaA: 120, caloriaB: 170, ajusteB: '40g en vez de 30g', prep: 'Porcionar en bolsitas' },
      almuerzo: { nombre: 'Bowl de Quinoa con Pollo y Kale', caloriaA: 390, caloriaB: 560, ajusteB: '+80g pollo, +1/2 taza quinoa', prep: 'Meal prep domingo' },
      colacion2: { nombre: 'Apio con Mantequilla de Nuez', caloriaA: 80, caloriaB: 140, ajusteB: '+1.5 cdas mantequilla nuez', prep: 'Cortar y guardar' },
      cena: { nombre: 'Salmón al Horno con Col Rizada', caloriaA: 300, caloriaB: 410, ajusteB: '+50g salmón, +1/2 batata asada', prep: 'Cocinar fresco 20min' }
    },
    jueves: {
      desayuno: { nombre: 'Chia Pudding con Frutos Rojos', caloriaA: 275, caloriaB: 395, ajusteB: '+2 cdas semillas chía, +1/4 taza granola', prep: 'Preparar la noche anterior' },
      colacion1: { nombre: 'Nueces de Nogal', caloriaA: 130, caloriaB: 185, ajusteB: '20 mitades en vez de 14', prep: 'Porcionar en bolsitas' },
      almuerzo: { nombre: 'Wrap de Pavo con Vegetales', caloriaA: 370, caloriaB: 540, ajusteB: '+60g pavo, +1 tortilla extra, +1/4 aguacate', prep: 'Meal prep domingo' },
      colacion2: { nombre: 'Tomates Cherry con Aceite de Oliva', caloriaA: 95, caloriaB: 155, ajusteB: '+15 almendras', prep: 'Lavar y guardar' },
      cena: { nombre: 'Pechuga de Pavo con Calabacín Asado', caloriaA: 300, caloriaB: 425, ajusteB: '+70g pavo, +1/2 taza arroz integral', prep: 'Meal prep miércoles' }
    },
    viernes: {
      desayuno: { nombre: 'Bowl de Yogurt de Coco con Granola', caloriaA: 285, caloriaB: 410, ajusteB: '+1/3 taza yogurt, +1/4 taza granola', prep: 'Ensamblar por la mañana' },
      colacion1: { nombre: 'Pera con Almendras Fileteadas', caloriaA: 125, caloriaB: 180, ajusteB: '+15g almendras', prep: 'Simple y fresco' },
      almuerzo: { nombre: 'Ensalada de Atún con Aguacate', caloriaA: 380, caloriaB: 550, ajusteB: '+1 lata atún, +1/2 aguacate, +1 cda aceite oliva', prep: 'Meal prep miércoles' },
      colacion2: { nombre: 'Edamame al Vapor', caloriaA: 100, caloriaB: 160, ajusteB: '3/4 taza en vez de 1/2', prep: 'Porcionar' },
      cena: { nombre: 'Curry de Garbanzos con Espinaca', caloriaA: 300, caloriaB: 400, ajusteB: '+1/2 taza garbanzos, +1/2 taza arroz integral', prep: 'Meal prep miércoles' }
    },
    sábado: {
      desayuno: { nombre: 'Tortilla de Vegetales con Champiñones', caloriaA: 280, caloriaB: 400, ajusteB: '+1 huevo, +1 rebanada pan integral', prep: 'Hacer por la mañana' },
      colacion1: { nombre: 'Smoothie de Frutos Rojos', caloriaA: 135, caloriaB: 195, ajusteB: '+1 cda mantequilla almendra', prep: 'Congelar porciones' },
      almuerzo: { nombre: 'Bowl de Lentejas con Vegetales Asados', caloriaA: 375, caloriaB: 540, ajusteB: '+1/2 taza lentejas, +1 cda aceite oliva', prep: 'Meal prep miércoles' },
      colacion2: { nombre: 'Bastones de Zanahoria y Apio', caloriaA: 90, caloriaB: 155, ajusteB: '+3 cdas hummus', prep: 'Cortar y guardar' },
      cena: { nombre: 'Salmón con Ensalada Mediterránea', caloriaA: 310, caloriaB: 410, ajusteB: '+50g salmón, +1/2 taza quinoa', prep: 'Cocinar fresco 20min' }
    },
    domingo: {
      desayuno: { nombre: 'Tazón de Avena con Manzana Canela', caloriaA: 275, caloriaB: 395, ajusteB: '+40g avena, +1 cda nueces', prep: 'Cocinar en la mañana' },
      colacion1: { nombre: 'Mix de Frutos Secos', caloriaA: 140, caloriaB: 200, ajusteB: '40g en vez de 28g', prep: 'Porcionar' },
      almuerzo: { nombre: 'Pollo al Limón con Arroz Integral', caloriaA: 380, caloriaB: 550, ajusteB: '+80g pollo, +1/2 taza arroz', prep: 'Día de meal prep' },
      colacion2: { nombre: 'Pepino con Limón y Sal del Himalaya', caloriaA: 85, caloriaB: 145, ajusteB: '+2 cdas mantequilla almendra', prep: 'Cortar fresco' },
      cena: { nombre: 'Bowl Vegetariano de Quinoa y Falafel', caloriaA: 310, caloriaB: 410, ajusteB: '+2 falafels, +1/3 taza quinoa', prep: 'Preparar para semana' }
    }
  };

  const mealPrepSchedule = {
    domingo: {
      titulo: 'Día Principal de Meal Prep',
      tiempo: '2.5-3.5 horas',
      tareas: [
        'Cocinar quinoa: 600g para Persona A, 900g para Persona B',
        'Asar pechugas de pollo: 4 para A (150g c/u), 4 para B (200g c/u)',
        'Cocinar salmón: 4 filetes de 150g para A, 4 de 200g para B',
        'Preparar hummus casero (doble porción para ambas personas)',
        'Lavar y cortar vegetales: brócoli, kale, zanahorias, apio',
        'Preparar ensalada de garbanzos: 3 porciones A, 3 porciones B',
        'Porcionar frutos secos: 7 bolsitas A (23-30g), 7 bolsitas B (35-40g)',
        'Preparar base de curry de garbanzos (doble cantidad)',
        'Cocinar arroz integral: 2 tazas A, 3.5 tazas B'
      ]
    },
    miércoles: {
      titulo: 'Mini Meal Prep de Mitad de Semana',
      tiempo: '60-75 minutos',
      tareas: [
        'Cocinar pavo: 2 pechugas A (150g c/u), 2 pechugas B (220g c/u)',
        'Preparar wraps de pavo (armar sin mojar)',
        'Hacer ensalada de atún: A con 1 lata, B con 2 latas',
        'Asar vegetales para bowl de lentejas',
        'Preparar curry de garbanzos con cantidades ajustadas',
        'Cocinar lentejas: 2 tazas A, 3 tazas B'
      ]
    }
  };

  const shoppingList = {
    proteinas: [
      'Salmón A: 600g (4x150g) / B: 1kg (5x200g)',
      'Pollo A: 600g / B: 1.2kg',
      'Pavo A: 300g / B: 500g',
      'Pescado blanco A: 200g / B: 300g',
      'Atún A: 2 latas / B: 4 latas',
      'Huevos A: 12 unidades / B: 18 unidades'
    ],
    granos: [
      'Quinoa A: 500g / B: 900g',
      'Avena A: 500g / B: 750g',
      'Arroz integral A: 500g / B: 900g',
      'Pan integral sin gluten: 2 paquetes',
      'Tortillas integrales: 10 unidades'
    ],
    legumbres: [
      'Garbanzos A: 700g secos / B: 1.2kg secos',
      'Lentejas A: 300g / B: 500g',
      'Edamame A: 200g / B: 350g'
    ],
    vegetales: [
      'Espinaca fresca: 3 manojos grandes',
      'Kale: 3 manojos grandes',
      'Brócoli: 4 cabezas',
      'Espárragos: 2 manojos',
      'Calabacín: 5 unidades',
      'Zanahorias: 1.5kg',
      'Apio: 2 manojos',
      'Pepino: 6 unidades',
      'Tomates cherry: 700g',
      'Champiñones: 500g',
      'Aguacate A: 6 unidades / B: 10 unidades',
      'Batata: 3 unidades (para B)'
    ],
    frutas: [
      'Arándanos frescos: 500g',
      'Mango: 3 unidades',
      'Manzana: 6 unidades',
      'Pera: 5 unidades',
      'Plátano: 5 unidades (para B)',
      'Frutos rojos mixtos: 600g',
      'Limones: 8 unidades'
    ],
    frutosSecos: [
      'Almendras A: 500g / B: 850g',
      'Nueces A: 300g / B: 500g',
      'Mix frutos secos A: 400g / B: 650g',
      'Mantequilla de almendra: 2 frascos',
      'Mantequilla de nuez: 1 frasco'
    ],
    otros: [
      'Yogurt de coco A: 1L / B: 1.5L',
      'Leche de almendra: 2L',
      'Aceite de oliva extra virgen: 750ml',
      'Cúrcuma en polvo',
      'Jengibre fresco',
      'Ajo',
      'Tahini',
      'Semillas de chía A: 200g / B: 350g',
      'Granola sin azúcar A: 300g / B: 500g',
      'Curry en polvo',
      'Sal del Himalaya',
      'Pimienta negra'
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