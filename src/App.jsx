import React, { useState } from 'react';
import { Check, ChefHat, ShoppingCart, Calendar, Flame, Users, BookOpen } from 'lucide-react';

// Datos de recetas
const recetas = {
  desayunos: {
    avenaManzanaCanela: {
      nombre: "Avena con manzana y canela",
      ingredientes: [
        "1/2 taza avena",
        "1 taza agua o leche vegetal",
        "1 manzana picada",
        "1/2 cdta canela",
        "1 cda nueces picadas (B agrega 1 cda extra)"
      ],
      preparacion: [
        "Cocinar avena en agua o leche hasta espesar.",
        "Agregar manzana picada y canela.",
        "Servir con nueces encima."
      ],
      tiempo: "10 min",
      mealPrep: "Guardar en frascos y refrigerar 3 días.",
      tips: "Usar avena integral y manzana roja o verde. Evitar azúcar."
    },
    panPaltaHuevo: {
      nombre: "Pan integral con palta y huevo",
      ingredientes: [
        "1 o 2 rebanadas pan integral",
        "1/2 palta",
        "1 huevo duro o pochado",
        "Sal de mar y pimienta"
      ],
      preparacion: [
        "Tostar pan y untar palta.",
        "Agregar huevo duro o pochado encima.",
        "Condimentar y servir."
      ],
      tiempo: "10 min",
      mealPrep: "Hervir huevos para 3 días y guardar con cáscara.",
      tips: "Usar pan sin azúcar ni grasas hidrogenadas."
    },
    smoothieFrutosRojos: {
      nombre: "Smoothie de frutos rojos y avena",
      ingredientes: [
        "1/2 taza frutos rojos congelados",
        "1/2 plátano",
        "1/4 taza avena",
        "1 taza leche vegetal",
        "1 cda semillas de chía"
      ],
      preparacion: [
        "Mezclar todos los ingredientes en la licuadora.",
        "Servir frío inmediatamente."
      ],
      tiempo: "5 min",
      mealPrep: "Congelar porciones de frutas y avena para la semana.",
      tips: "Agregar cúrcuma o jengibre para efecto antiinflamatorio."
    },
    chiaFrutilla: {
      nombre: "Chía pudding con frutilla",
      ingredientes: [
        "3 cdas semillas de chía",
        "1 taza leche vegetal",
        "1 cdta miel opcional",
        "1/2 taza frutillas picadas"
      ],
      preparacion: [
        "Mezclar chía y leche en frasco, dejar reposar 8h.",
        "Agregar frutillas antes de servir."
      ],
      tiempo: "5 min (más reposo)",
      mealPrep: "Preparar 3 frascos y refrigerar hasta 4 días.",
      tips: "Usar frutillas frescas o congeladas sin azúcar."
    },
    tortillaAvenaPlatano: {
      nombre: "Tortilla de avena con plátano",
      ingredientes: [
        "1/2 plátano maduro",
        "1/4 taza avena",
        "1 huevo",
        "Canela al gusto"
      ],
      preparacion: [
        "Triturar plátano con avena, huevo y canela.",
        "Cocinar en sartén antiadherente 2-3 min por lado."
      ],
      tiempo: "10 min",
      mealPrep: "Guardar en refrigerador hasta 2 días.",
      tips: "Agregar chía o nueces para más saciedad."
    }
  },
  colaciones: {
    almendras: {
      nombre: "Puñado de almendras",
      ingredientes: ["20–30g almendras naturales"],
      preparacion: ["Porcionar y guardar en bolsitas individuales."],
      tiempo: "1 min",
      mealPrep: "Preparar 7 porciones semanales.",
      tips: "Tostar ligeramente para mejor digestión."
    },
    manzanaMantequillaMani: {
      nombre: "Manzana con mantequilla de maní",
      ingredientes: ["1 manzana", "1 cda mantequilla de maní natural"],
      preparacion: [
        "Cortar la manzana en gajos.",
        "Servir con mantequilla de maní para untar."
      ],
      tiempo: "3 min",
      mealPrep: "Mantener manzana entera hasta el momento de comer.",
      tips: "Usar mantequilla sin azúcar ni aceite añadido."
    },
    yogurtAvenaSemillas: {
      nombre: "Yogurt natural con avena y semillas",
      ingredientes: [
        "1/2 taza yogurt natural sin azúcar",
        "2 cdas avena",
        "1 cdta semillas (chía o linaza)"
      ],
      preparacion: ["Mezclar todo en un bowl o frasco.", "Dejar reposar 10 min."],
      tiempo: "5 min",
      mealPrep: "Preparar 2 porciones y refrigerar hasta 3 días.",
      tips: "Agregar canela o frutos secos si se desea."
    },
    hummusVerduras: {
      nombre: "Palitos de verduras con hummus",
      ingredientes: [
        "1 zanahoria y 1/2 pepino en bastones",
        "3 cdas hummus"
      ],
      preparacion: ["Cortar verduras y servir con hummus para untar."],
      tiempo: "5 min",
      mealPrep: "Cortar verduras para 3 días y guardar en agua fría.",
      tips: "Usar hummus casero con aceite de oliva y limón."
    },
    mixFrutosSecos: {
      nombre: "Mix de frutos secos y pasas",
      ingredientes: ["Almendras, nueces, pasas, semillas (40g aprox.)"],
      preparacion: ["Mezclar y dividir en bolsitas individuales."],
      tiempo: "2 min",
      mealPrep: "Porcionar para 1 semana.",
      tips: "Evitar versiones saladas o azucaradas."
    }
  },
  almuerzos: {
    charquicanVegetal: {
      nombre: "Charquicán vegetal con huevo",
      ingredientes: [
        "2 tazas zapallo camote picado",
        "1 papa chica",
        "1 zanahoria",
        "1/2 cebolla",
        "1 taza porotos verdes",
        "2 huevos"
      ],
      preparacion: [
        "Saltear cebolla y zanahoria, agregar zapallo y papa.",
        "Cocinar hasta ablandar y moler parcialmente.",
        "Agregar porotos verdes y servir con huevo encima."
      ],
      tiempo: "30 min",
      mealPrep: "Guardar 2 porciones refrigeradas o congelar.",
      tips: "Usar zapallo y papa cocidos al vapor para menos grasa."
    },
    polloPureZapallo: {
      nombre: "Pollo al horno con puré de zapallo",
      ingredientes: [
        "2 filetes de pollo (150g c/u)",
        "2 tazas zapallo pelado",
        "1 cda aceite de oliva",
        "Ensalada verde al gusto"
      ],
      preparacion: [
        "Asar el pollo 20-25 min con aceite y condimentos.",
        "Hervir zapallo y moler con sal de mar.",
        "Servir con ensalada."
      ],
      tiempo: "40 min",
      mealPrep: "Guardar pollo y puré por separado hasta 3 días.",
      tips: "Agregar cúrcuma al puré para efecto antiinflamatorio."
    },
    porotosZapallo: {
      nombre: "Porotos con zapallo",
      ingredientes: [
        "1 taza porotos cocidos",
        "1 taza zapallo en cubos",
        "1/2 cebolla picada",
        "1 cda aceite oliva"
      ],
      preparacion: [
        "Sofreír cebolla, agregar zapallo y porotos cocidos.",
        "Cocinar hasta que el zapallo se deshaga.",
        "Condimentar al gusto."
      ],
      tiempo: "35 min",
      mealPrep: "Refrigerar hasta 4 días o congelar.",
      tips: "Agregar cúrcuma o merkén suave para sabor."
    },
    cazuelaVacuno: {
      nombre: "Cazuela de vacuno magro con verduras",
      ingredientes: [
        "100g carne magra (posta rosada)",
        "1 papa chica",
        "1 trozo zapallo",
        "1 zanahoria",
        "1 trozo choclo",
        "1L agua, sal de mar"
      ],
      preparacion: [
        "Cocinar la carne en agua 30 min.",
        "Agregar verduras y cocinar hasta tiernas.",
        "Servir con perejil fresco."
      ],
      tiempo: "45 min",
      mealPrep: "Refrigerar hasta 3 días.",
      tips: "Usar carne magra y retirar grasa visible."
    },
    lentejas: {
      nombre: "Lentejas con arroz y ensalada",
      ingredientes: [
        "1 taza lentejas cocidas",
        "1/2 taza arroz integral",
        "Verduras salteadas (zanahoria, cebolla, pimentón)"
      ],
      preparacion: [
        "Mezclar lentejas cocidas con arroz y verduras.",
        "Condimentar con aceite de oliva y comino."
      ],
      tiempo: "30 min",
      mealPrep: "Guardar hasta 4 días refrigerado.",
      tips: "Agregar hojas verdes para más fibra."
    },
    ensaladaAtunPalta: {
      nombre: "Ensalada de atún con arroz integral y palta",
      ingredientes: [
        "1 lata atún en agua",
        "1/2 taza arroz integral",
        "1/2 palta",
        "1 tomate, lechuga"
      ],
      preparacion: [
        "Cocinar arroz y enfriar.",
        "Mezclar con atún, palta y tomate.",
        "Aliñar con limón y aceite de oliva."
      ],
      tiempo: "15 min",
      mealPrep: "Preparar al momento de comer.",
      tips: "Usar atún bajo en sodio y arroz integral cocido al dente."
    }
  },
  cenas: {
    pescadoEnsaladaChilena: {
      nombre: "Merluza con ensalada chilena",
      ingredientes: [
        "1 filete merluza (150g)",
        "1 tomate, 1/4 cebolla, cilantro",
        "1 cda aceite de oliva, limón"
      ],
      preparacion: [
        "Cocinar merluza a la plancha o al horno 10-15 min.",
        "Preparar ensalada chilena y servir junto."
      ],
      tiempo: "20 min",
      mealPrep: "Cocinar pescado fresco, ensalada al momento.",
      tips: "Agregar quinoa si se necesita más energía."
    },
    tortillaVerduras: {
      nombre: "Tortilla de verduras",
      ingredientes: [
        "2 huevos",
        "1 taza zapallo italiano rallado",
        "1/4 cebolla, sal de mar, pimienta"
      ],
      preparacion: [
        "Batir huevos, agregar verduras y cocinar 3-4 min por lado."
      ],
      tiempo: "10 min",
      mealPrep: "Guardar hasta 2 días.",
      tips: "Agregar avena molida para textura firme."
    },
    sopaVerduras: {
      nombre: "Sopa de verduras con huevo pochado",
      ingredientes: [
        "1 taza zapallo, zanahoria, cebolla y apio picados",
        "1 huevo",
        "1 cda aceite de oliva"
      ],
      preparacion: [
        "Hervir verduras hasta tiernas.",
        "Pochear el huevo dentro del caldo y servir."
      ],
      tiempo: "25 min",
      mealPrep: "Guardar sin el huevo y agregar al recalentar.",
      tips: "Ideal como cena liviana antiinflamatoria."
    },
    budinVerduras: {
      nombre: "Budín de verduras con quinoa",
      ingredientes: [
        "1 taza quinoa cocida",
        "1 taza verduras cocidas (brócoli, zanahoria, zapallo italiano)",
        "2 huevos, sal y pimienta"
      ],
      preparacion: [
        "Mezclar todo y hornear 25 min a 180°C.",
        "Dejar enfriar antes de cortar."
      ],
      tiempo: "35 min",
      mealPrep: "Guardar porciones refrigeradas hasta 4 días.",
      tips: "Usar moldes individuales para freezer."
    },
    salmonEnsaladaVerde: {
      nombre: "Salmón al horno con ensalada verde",
      ingredientes: [
        "1 filete salmón (150g)",
        "Ensalada de hojas verdes y tomate",
        "1 cda aceite de oliva, limón"
      ],
      preparacion: [
        "Hornear salmón 20 min a 180°C.",
        "Servir con ensalada fresca y aderezo de limón."
      ],
      tiempo: "25 min",
      mealPrep: "Cocinar el día anterior y guardar refrigerado.",
      tips: "Agregar cúrcuma o jengibre al salmón."
    }
  }
};

function App() {
  const [activeDay, setActiveDay] = useState('lunes');
  const [activeView, setActiveView] = useState('semana');
  const [activePerson, setActivePerson] = useState('A');
  const [activeRecipeCategory, setActiveRecipeCategory] = useState('desayunos');
  const [prepChecklist, setPrepChecklist] = useState({});

  const days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

  const weeklyPlan = {
    lunes: {
      desayuno: { nombre: 'Avena con manzana y canela', caloriaA: 270, caloriaB: 390, gramosA: '50g avena, 1 manzana, nueces 10g', gramosB: '90g avena, 1 manzana, nueces 20g', ajusteB: '+40g avena, +1 cda nueces picadas', prep: 'Cocinar con agua o leche vegetal' },
      colacion1: { nombre: 'Puñado de almendras', caloriaA: 130, caloriaB: 180, gramosA: '20g almendras', gramosB: '30g almendras', ajusteB: '30g en vez de 20g', prep: 'Porcionar en bolsitas' },
      almuerzo: { nombre: 'Charquicán vegetal con huevo', caloriaA: 380, caloriaB: 530, gramosA: '200g zapallo, 1 papa, 1 huevo', gramosB: '300g zapallo, 1 papa, 2 huevos', ajusteB: '+1 huevo extra, +1/2 taza zapallo', prep: 'Preparar en olla el domingo' },
      colacion2: { nombre: 'Palitos de pepino y zanahoria con hummus', caloriaA: 90, caloriaB: 150, gramosA: '100g verduras, 30g hummus', gramosB: '150g verduras, 50g hummus, 1 pan pita', ajusteB: '+2 cdas hummus, +1 pan pita integral', prep: 'Cortar y guardar' },
      cena: { nombre: 'Filete de merluza con ensalada chilena', caloriaA: 300, caloriaB: 450, gramosA: '150g merluza, ensalada', gramosB: '200g merluza, ensalada, 1/2 taza arroz', ajusteB: '+50g merluza, +1 cda aceite oliva, +1/2 taza arroz integral', prep: 'Cocinar fresco' }
    },
    martes: {
      desayuno: { nombre: 'Pan integral con palta y huevo duro', caloriaA: 280, caloriaB: 400, gramosA: '2 rebanadas pan, 1/2 palta, 1 huevo', gramosB: '3 rebanadas pan, 1/2 palta, 2 huevos', ajusteB: '+1 rebanada pan y +1 huevo', prep: 'Preparar por la mañana' },
      colacion1: { nombre: 'Manzana con mantequilla de maní', caloriaA: 150, caloriaB: 210, gramosA: '1 manzana, 15g mantequilla', gramosB: '1 manzana, 30g mantequilla', ajusteB: '+1 cda mantequilla extra', prep: 'Porcionar' },
      almuerzo: { nombre: 'Pollo al horno con puré de zapallo y ensalada verde', caloriaA: 390, caloriaB: 540, gramosA: '150g pollo, 150g puré zapallo', gramosB: '230g pollo, 200g puré zapallo', ajusteB: '+80g pollo, +1/2 taza puré', prep: 'Meal prep domingo' },
      colacion2: { nombre: 'Yogurt natural con avena y semillas', caloriaA: 110, caloriaB: 170, gramosA: '100g yogurt, 20g avena, 5g semillas', gramosB: '150g yogurt, 40g avena, 10g semillas', ajusteB: '+1/4 taza avena, +1 cda semillas', prep: 'Porcionar' },
      cena: { nombre: 'Tortilla de verduras con porotos verdes', caloriaA: 270, caloriaB: 400, gramosA: '2 huevos, 100g verduras, 100g porotos', gramosB: '3 huevos, 150g verduras, 150g porotos', ajusteB: '+1 huevo, +1/2 taza porotos verdes', prep: 'Cocinar fresco' }
    },
    miércoles: {
      desayuno: { nombre: 'Smoothie de frutos rojos y avena', caloriaA: 260, caloriaB: 380, gramosA: '100g frutos rojos, 30g avena, 200ml leche', gramosB: '150g frutos rojos, 50g avena, 1 plátano, 250ml leche', ajusteB: '+1 plátano, +1 cda chía', prep: 'Congelar porciones' },
      colacion1: { nombre: 'Mix de nueces y pasas', caloriaA: 120, caloriaB: 170, gramosA: '30g mix', gramosB: '40g mix', ajusteB: '40g en vez de 30g', prep: 'Porcionar en bolsitas' },
      almuerzo: { nombre: 'Porotos con zapallo y ensalada de repollo', caloriaA: 390, caloriaB: 560, gramosA: '150g porotos, 150g zapallo', gramosB: '200g porotos, 200g zapallo', ajusteB: '+1/2 taza porotos, +1 cda aceite', prep: 'Meal prep martes' },
      colacion2: { nombre: 'Apio con hummus', caloriaA: 80, caloriaB: 130, gramosA: '100g apio, 30g hummus', gramosB: '100g apio, 50g hummus', ajusteB: '+2 cdas hummus', prep: 'Cortar y guardar' },
      cena: { nombre: 'Pescado al vapor con ensalada de betarraga', caloriaA: 290, caloriaB: 420, gramosA: '150g pescado, ensalada', gramosB: '210g pescado, ensalada, 1/2 taza arroz', ajusteB: '+60g pescado, +1/2 taza arroz integral', prep: 'Cocinar fresco' }
    },
    jueves: {
      desayuno: { nombre: 'Chía pudding con frutilla y avena', caloriaA: 275, caloriaB: 395, gramosA: '30g chía, 100g frutillas, 20g avena', gramosB: '50g chía, 150g frutillas, 40g avena', ajusteB: '+2 cdas chía, +1/4 taza avena extra', prep: 'Preparar la noche anterior' },
      colacion1: { nombre: 'Puñado de nueces', caloriaA: 130, caloriaB: 185, gramosA: '20g nueces (14 mitades)', gramosB: '30g nueces (20 mitades)', ajusteB: '20 mitades en vez de 14', prep: 'Porcionar' },
      almuerzo: { nombre: 'Ensalada de atún con arroz integral y palta', caloriaA: 370, caloriaB: 540, gramosA: '1 lata atún, 80g arroz, 1/2 palta', gramosB: '2 latas atún, 120g arroz, 1 palta', ajusteB: '+1 lata atún, +1/2 palta, +1/2 taza arroz', prep: 'Meal prep miércoles' },
      colacion2: { nombre: 'Tomates cherry con aceite de oliva', caloriaA: 90, caloriaB: 150, gramosA: '150g tomates, 1 cdta aceite', gramosB: '200g tomates, 1 pan pita', ajusteB: '+1 pan pita integral', prep: 'Lavar y guardar' },
      cena: { nombre: 'Sopa de verduras con huevo pochado', caloriaA: 280, caloriaB: 400, gramosA: '300ml sopa, 1 huevo', gramosB: '400ml sopa, 2 huevos, 50g lentejas', ajusteB: '+1 huevo, +1/2 taza lentejas', prep: 'Hacer por la tarde' }
    },
    viernes: {
      desayuno: { nombre: 'Pan integral con palta y tomate', caloriaA: 270, caloriaB: 390, gramosA: '2 rebanadas pan, 1/2 palta, 1 tomate', gramosB: '3 rebanadas pan, 3/4 palta, 1 tomate', ajusteB: '+1 rebanada extra de pan y +1/4 palta', prep: 'Preparar por la mañana' },
      colacion1: { nombre: 'Pera con almendras', caloriaA: 130, caloriaB: 180, gramosA: '1 pera, 15g almendras', gramosB: '1 pera, 25g almendras', ajusteB: '+10g almendras', prep: 'Simple y fresco' },
      almuerzo: { nombre: 'Cazuela de vacuno magro con verduras', caloriaA: 400, caloriaB: 560, gramosA: '100g carne, 1 papa, verduras', gramosB: '150g carne, 2 papas, verduras', ajusteB: '+1 papa chica, +50g carne', prep: 'Preparar en olla' },
      colacion2: { nombre: 'Yogurt con avena y canela', caloriaA: 100, caloriaB: 160, gramosA: '100g yogurt, 20g avena', gramosB: '150g yogurt, 40g avena', ajusteB: '+1/4 taza avena', prep: 'Porcionar' },
      cena: { nombre: 'Revuelto de zapallo italiano con pollo', caloriaA: 300, caloriaB: 430, gramosA: '120g pollo, 150g zapallo, 1 huevo', gramosB: '200g pollo, 200g zapallo, 2 huevos', ajusteB: '+80g pollo, +1 huevo', prep: 'Cocinar fresco' }
    },
    sábado: {
      desayuno: { nombre: 'Tortilla de avena con plátano', caloriaA: 280, caloriaB: 400, gramosA: '40g avena, 1/2 plátano, 1 huevo', gramosB: '60g avena, 1 plátano, 2 huevos', ajusteB: '+1 huevo y +1/2 plátano', prep: 'Cocinar por la mañana' },
      colacion1: { nombre: 'Smoothie de frutilla y yogurt', caloriaA: 135, caloriaB: 195, gramosA: '100g frutillas, 100g yogurt', gramosB: '150g frutillas, 150g yogurt, 15g mantequilla almendra', ajusteB: '+1 cda mantequilla almendra', prep: 'Congelar porciones' },
      almuerzo: { nombre: 'Lentejas con arroz y ensalada', caloriaA: 380, caloriaB: 540, gramosA: '150g lentejas, 80g arroz', gramosB: '200g lentejas, 120g arroz', ajusteB: '+1/2 taza lentejas, +1/2 taza arroz', prep: 'Meal prep viernes' },
      colacion2: { nombre: 'Bastones de zanahoria con hummus', caloriaA: 90, caloriaB: 150, gramosA: '100g zanahoria, 30g hummus', gramosB: '150g zanahoria, 50g hummus', ajusteB: '+2 cdas hummus', prep: 'Cortar y guardar' },
      cena: { nombre: 'Salmón al horno con ensalada verde', caloriaA: 310, caloriaB: 430, gramosA: '150g salmón, ensalada', gramosB: '210g salmón, ensalada', ajusteB: '+60g salmón, +1 cda aceite oliva', prep: 'Cocinar fresco' }
    },
    domingo: {
      desayuno: { nombre: 'Avena con pera y canela', caloriaA: 275, caloriaB: 395, gramosA: '50g avena, 1 pera, 10g nueces', gramosB: '90g avena, 1 pera, 20g nueces', ajusteB: '+40g avena, +1 cda nueces', prep: 'Cocinar en la mañana' },
      colacion1: { nombre: 'Mix de frutos secos', caloriaA: 140, caloriaB: 200, gramosA: '28g mix', gramosB: '40g mix', ajusteB: '40g en vez de 28g', prep: 'Porcionar' },
      almuerzo: { nombre: 'Pollo a la plancha con ensalada chilena', caloriaA: 380, caloriaB: 540, gramosA: '150g pollo, ensalada', gramosB: '230g pollo, ensalada, 80g arroz', ajusteB: '+80g pollo, +1/2 taza arroz', prep: 'Cocinar domingo' },
      colacion2: { nombre: 'Pepino con limón y sal de mar', caloriaA: 80, caloriaB: 140, gramosA: '150g pepino', gramosB: '200g pepino, 1 cda aceite', ajusteB: '+1 cda aceite oliva', prep: 'Cortar fresco' },
      cena: { nombre: 'Budín de verduras con quinoa', caloriaA: 310, caloriaB: 410, gramosA: '150g budín, 80g quinoa', gramosB: '200g budín, 120g quinoa', ajusteB: '+1/2 taza quinoa', prep: 'Preparar para la semana' }
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
        <button
          onClick={() => setActiveView('recetas')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            activeView === 'recetas' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Recetas
        </button>
        <button
          onClick={() => setActiveView('macros')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            activeView === 'macros' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Flame className="w-5 h-5" />
          Macros
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
                const macros = activePerson === 'A' ? meal.macrosA : meal.macrosB;
                // <-- nuevo: safeMacros con fallback si macros es undefined
                const safeMacros = {
                  proteina: macros?.proteina ?? 0,
                  carbs: macros?.carbs ?? 0,
                  grasas: macros?.grasas ?? 0,
                };
                
                return (
                  <div key={mealType} className={`border-l-4 p-4 rounded-r-lg ${activePerson === 'A' ? 'border-blue-500 bg-blue-50' : 'border-purple-500 bg-purple-50'}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{mealNames[mealType]}</h3>
                        <p className="text-lg text-gray-900 mb-2">{meal.nombre}</p>
                        <div className={`${activePerson === 'A' ? 'bg-blue-100 border-blue-300' : 'bg-purple-100 border-purple-300'} border-l-2 pl-2 py-1 mb-2`}>
                          <p className="text-sm font-medium text-gray-700">
                            📊 Porciones: {activePerson === 'A' ? meal.gramosA : meal.gramosB}
                          </p>
                        </div>
                        <div className="flex gap-4 mb-2 text-xs">
                          <span className="bg-red-100 px-2 py-1 rounded font-semibold">🥩 P: {safeMacros.proteina}g</span>
                          <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">🌾 C: {safeMacros.carbs}g</span>
                          <span className="bg-green-100 px-2 py-1 rounded font-semibold">🥑 G: {safeMacros.grasas}g</span>
                        </div>
                        {activePerson === 'B' && meal.ajusteB && (
                          <p className="text-sm text-purple-700 mb-1 font-medium">➕ {meal.ajusteB}</p>
                        )}
                        <p className="text-sm text-gray-600">📝 {meal.prep}</p>
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

      {activeView === 'recetas' && (
        <div>
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {['desayunos', 'colaciones', 'almuerzos', 'cenas'].map(category => (
              <button
                key={category}
                onClick={() => setActiveRecipeCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                  activeRecipeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(recetas[activeRecipeCategory]).map(([key, receta]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{receta.nombre}</h3>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-green-600">⏱️ {receta.tiempo}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">📝 Ingredientes:</h4>
                  <ul className="space-y-1">
                    {receta.ingredientes.map((ing, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">👨‍🍳 Preparación:</h4>
                  <ol className="space-y-1">
                    {receta.preparacion.map((paso, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{idx + 1}. {paso}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r mb-3">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Meal Prep:</span> {receta.mealPrep}
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">💡 Tip:</span> {receta.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeView === 'macros' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Persona A - Bariátrica */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Persona A - Bariátrica</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r mb-4">
                <p className="text-lg font-bold text-blue-900">1170 calorías/día</p>
                <p className="text-sm text-gray-700 mt-1">100g de proteína diaria</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🥩 Proteína: 100g</span>
                    <span className="text-sm text-gray-600">400 cal (34%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{width: '34%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🌾 Carbohidratos: 69g</span>
                    <span className="text-sm text-gray-600">275 cal (24%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{width: '24%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🥑 Grasas: 55g</span>
                    <span className="text-sm text-gray-600">495 cal (42%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">📊 Distribución del Plato</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-6 bg-red-400 rounded"></div>
                    <span>50% Proteína</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-yellow-400 rounded"></div>
                    <span>20% Carbohidratos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-6 bg-green-400 rounded"></div>
                    <span>30% Verduras</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold">Nota:</span> Prioridad en proteína por cirugía bariátrica. 
                  Hidratación constante entre comidas.
                </p>
              </div>
            </div>

            {/* Persona B - Estándar */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Persona B - Estándar</h2>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r mb-4">
                <p className="text-lg font-bold text-purple-900">1700 calorías/día</p>
                <p className="text-sm text-gray-700 mt-1">120g de proteína diaria</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🥩 Proteína: 120g</span>
                    <span className="text-sm text-gray-600">480 cal (28%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{width: '28%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🌾 Carbohidratos: 155g</span>
                    <span className="text-sm text-gray-600">620 cal (37%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{width: '37%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700">🥑 Grasas: 67g</span>
                    <span className="text-sm text-gray-600">600 cal (35%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">📊 Distribución del Plato</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-6 bg-green-400 rounded"></div>
                    <span>50% Verduras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-red-400 rounded"></div>
                    <span>25% Proteína</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-yellow-400 rounded"></div>
                    <span>25% Carbohidratos</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold">Nota:</span> Énfasis en verduras para mayor saciedad 
                  y aporte de fibra antiinflamatoria.
                </p>
              </div>
            </div>
          </div>

          {/* Resumen Diario */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Resumen Diario de Macros</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Comida</th>
                    <th className="px-4 py-2 text-center">Persona A (P/C/G)</th>
                    <th className="px-4 py-2 text-center">Persona B (P/C/G)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(weeklyPlan.lunes).map(([key, meal]) => {
                    const names = {
                      desayuno: 'Desayuno',
                      colacion1: 'Colación 1',
                      almuerzo: 'Almuerzo',
                      colacion2: 'Colación 2',
                      cena: 'Cena'
                    };
                    return (
                      <tr key={key} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{names[key]}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-red-600 font-semibold">{meal.macrosA?.proteina ?? 0}</span>/
                          <span className="text-yellow-600 font-semibold">{meal.macrosA?.carbs ?? 0}</span>/
                          <span className="text-green-600 font-semibold">{meal.macrosA?.grasas ?? 0}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-red-600 font-semibold">{meal.macrosB?.proteina ?? 0}</span>/
                          <span className="text-yellow-600 font-semibold">{meal.macrosB?.carbs ?? 0}</span>/
                          <span className="text-green-600 font-semibold">{meal.macrosB?.grasas ?? 0}</span>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-green-50 font-bold">
                    <td className="px-4 py-3">TOTAL LUNES</td>
                    <td className="px-4 py-3 text-center">
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosA?.proteina ?? 0), 0)}/
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosA?.carbs ?? 0), 0)}/
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosA?.grasas ?? 0), 0)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosB?.proteina ?? 0), 0)}/
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosB?.carbs ?? 0), 0)}/
                      {Object.values(weeklyPlan.lunes).reduce((sum, m) => sum + (m.macrosB?.grasas ?? 0), 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-3">💡 Tips para alcanzar tus macros</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Para Persona A:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Priorizar proteína en cada comida</li>
                  <li>✓ Suplementar con proteína en polvo si es necesario</li>
                  <li>✓ Comer despacio y masticar bien</li>
                  <li>✓ Evitar líquidos 30 min antes/después de comer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Para Persona B:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Llenar la mitad del plato con verduras</li>
                  <li>✓ Variar fuentes de proteína (animal y vegetal)</li>
                  <li>✓ Preferir carbohidratos complejos e integrales</li>
                  <li>✓ Incluir grasas saludables (aceite oliva, palta, frutos secos)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;