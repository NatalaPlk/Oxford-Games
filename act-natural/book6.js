// Act Natural!: The Oxford Method, Book 6 (B2). One conversation for each unit of the book,
// made from the unit's model questions and answers (the vocabulary and structures of the unit).
// The tasks are in Spanish, so they don't give away the English words: the student has to find them.
// The situations are invented, as in the other books.
//
// Same format as book5.js: each unit has the two roles of the game.
//   turns + end   the other person speaks first and the student answers (same format as T in scenes.js)
//   staff + bye   the student starts and says the other person's lines (same format as W in staff.js),
//                 and the other person answers with the model answers.

const BOOK6 = [];
function UNIT6(o){
  BOOK6.push({ id: "b6u" + o.unit, unit: o.unit, book: true, label: "Book 6", name: o.name, icon: o.icon, who: o.who, face: o.face,
    color: BOOK_COLORS[(o.unit - 1) % BOOK_COLORS.length], leave: o.leave || "Sorry, I have to go now. Bye!",
    levels: { B2: { turns: o.turns, end: o.end } } });
  STAFF["b6u" + o.unit] = { client: o.client, face: o.cface, leave: o.cleave || "Never mind. I'll ask someone else.",
    bye: { B2: o.bye }, B2: o.staff };
}

/* ===================== MODULE 1 ===================== */
UNIT6({ unit: 1, name: "Is it likely?", icon: "👨‍👩‍👧", who: "Cousin", face: "🧑", client: "Aunt", cface: "👩",
  turns: [
    T("Hi! Are you anxious about the family reunion on Sunday?", "Di que sí, un poco ansioso por la reunión.", "Yes, I'm a little anxious about it.|Yes, I'm a bit anxious about it.", "yes ; anxious ; little/bit",
      "Yes, I'm a little anxiety about it. :: 'Anxious' is the adjective; 'anxiety' is the noun.", "Yes, I'm a little anxious for it. :: We say anxious ABOUT something."),
    T("Why? Is it because of your in-laws?", "Di que sí: es relativamente difícil tener buena relación con ellos porque intentan influir en tus decisiones.", "Yes. It's relatively difficult to have a good relationship with them because they try to influence my decisions.|Yes. It's relatively difficult to have a good relationship with my in-laws because they try to influence my decisions.", "relatively ; difficult ; relationship ; influence ; decisions",
      "Yes. It's relative difficult to have a good relationship with them because they try to influence my decisions. :: Use the adverb: relatively difficult.", "Yes. It's relatively difficult to have a good relationship with them because they try to influence to my decisions. :: 'Influence' has a direct object: influence my decisions."),
    T("I see. Do you think stress is related to health problems?", "Responde que sí: un ataque al corazón puede estar relacionado con el estrés.", "Yes, a heart attack can be related to stress.|Yes, I think a heart attack can be related to stress.", "yes ; heart attack ; related ; stress",
      "Yes, a heart attack can be relate to stress. :: After 'be' use the past participle: related.", "Yes, a heart attack can be related with stress. :: We say related TO."),
    T("True. Anyway, how likely is it that you'll come on Sunday?", "Di que es bastante probable que vayas, pero que no estás seguro.", "It's quite likely that I'll come, but I'm not sure.|It's very likely that I'll come, but I'm not sure.", "likely ; come ; not sure",
      "It's quite probably that I'll come, but I'm not sure. :: After 'It's quite' use the adjective: likely.", "It's quite likely that I come, but I'm not sure. :: For the future use 'will': that I'll come."),
  ], end: "Great. See you on Sunday!",
  staff: [
    W("Pregunta a tu tía si está ansiosa por la reunión familiar del domingo.", "Are you anxious about the family reunion on Sunday?|Are you a little anxious about the family reunion on Sunday?", "anxious ; reunion ; sunday",
      "Are you anxiety about the family reunion on Sunday? :: 'Anxious' is the adjective; 'anxiety' is the noun.", "Are you anxious for the family reunion on Sunday? :: We say anxious ABOUT something.", "q"),
    W("Pregunta si es por culpa de sus suegros.", "Is it because of your in-laws?|Is it because of your in-laws, perhaps?", "because ; in-laws",
      "Is because of your in-laws? :: A question needs 'it': Is it because…?", "Is it because for your in-laws? :: We say 'because OF'.", "q"),
    W("Di que es relativamente difícil tener buena relación con ellos porque intentan influir en tus decisiones.", "It's relatively difficult to have a good relationship with them because they try to influence my decisions.|It's relatively difficult to have a good relationship with in-laws because they try to influence my decisions.", "relatively ; difficult ; relationship ; influence ; decisions",
      "It's relative difficult to have a good relationship with them because they try to influence my decisions. :: Use the adverb: relatively difficult.", "It's relatively difficult to have a good relation with them because they try to influence my decisions. :: The word is 'relationship'."),
    W("Pregunta si cree que el estrés está relacionado con los problemas de salud.", "Do you think stress is related to health problems?|Do you think that stress is related to health problems?", "think ; stress ; related ; health",
      "Do you think stress is relate to health problems? :: After 'is' use the past participle: related.", "Do you think stress is related with health problems? :: We say related TO.", "q"),
    W("Pregunta cómo de probable es que venga el domingo.", "How likely is it that you'll come on Sunday?|How likely is it that you will come on Sunday?", "how ; likely ; come ; sunday",
      "How is likely that you come on Sunday? :: Question order: How likely is it…?", "How likely it is that you'll come on Sunday? :: Question order: How likely is it…?", "q"),
  ], bye: "Of course. Bye! See you on Sunday." });

UNIT6({ unit: 2, name: "What's it made out of?", icon: "🍰", who: "Baker", face: "🧑‍🍳", client: "Friend", cface: "🧔",
  turns: [
    T("Hi! What's your favourite cake made out of?", "Di que tu tarta favorita está hecha de harina, agua, levadura y azúcar glas.", "My favourite cake is made out of flour, water, yeast and icing sugar.|My favourite cake's made out of flour, water, yeast and sugar.", "favourite/favorite ; made ; out of ; flour",
      "My favourite cake is make out of flour, water, yeast and icing sugar. :: Passive: is made.", "My favourite cake is made with of flour, water, yeast and icing sugar. :: For a mixture we say 'made out of'."),
    T("Sounds good. And what's wine made from?", "Di que el vino se hace de uvas y pregunta cómo se hace el yogur.", "Wine is made from grapes. How's yoghurt made?|Wine's made from grapes. How is yoghurt made?", "wine ; grapes ; how ; yoghurt/yogurt",
      "Wine is made by grapes. How's yoghurt made? :: A material uses 'made from': made from grapes.", "Wine is made from grapes. How yoghurt is made? :: Question order: How is yoghurt made?", "q"),
    T("By adding bacteria to milk, I think. By the way, what ingredients do you use to add flavour to a dish?", "Di que usas ingredientes como sal y pimienta para dar sabor a un plato.", "I use such ingredients as salt and pepper to add flavour to a dish.|I use salt and pepper to add flavour to a dish.", "salt ; pepper ; flavour/flavor ; dish",
      "I use salt and pepper for add flavour to a dish. :: Purpose: to add (not 'for add').", "I use salt and pepper to add flavour of a dish. :: We add flavour TO a dish."),
    T("Nice. And in what proportions do you mix the ingredients for a strawberry milkshake?", "Di que mezclas tres partes de yogur por dos de fresas.", "I mix three parts of yoghurt to two parts of strawberries.|You mix three parts of yoghurt to two parts of strawberries.", "three ; parts ; yoghurt/yogurt ; two ; strawberries",
      "I mix three part of yoghurt to two part of strawberries. :: Plural: three parts, two parts.", "I mix three parts of yoghurt and two parts from strawberries. :: Two parts OF strawberries."),
  ], end: "Delicious! Send me the recipe.",
  staff: [
    W("Pregunta de qué está hecha su tarta favorita.", "What's your favourite cake made out of?|What is your favourite cake made out of?", "favourite/favorite ; cake ; made ; out of",
      "What your favourite cake is made out of? :: Question order: What's your favourite cake made out of?", "What's your favourite cake made out? :: Don't forget 'of': made out of.", "q"),
    W("Di que tu tarta favorita está hecha de harina, agua, levadura y azúcar glas.", "My favourite cake is made out of flour, water, yeast and icing sugar.|My favourite cake's made out of flour, water, yeast and sugar.", "made ; out of ; flour ; water ; yeast",
      "My favourite cake is make out of flour, water, yeast and icing sugar. :: Passive: is made.", "My favourite cake is made with of flour, water, yeast and icing sugar. :: For a mixture we say 'made out of'."),
    W("Pregunta de qué se hace el vino.", "What's wine made from?|What is wine made from?", "wine ; made ; from",
      "What wine is made from? :: Question order: What is wine made from?", "What's wine made by? :: A material uses 'made from'.", "q"),
    W("Pregunta qué ingredientes usa para dar sabor a un plato.", "What ingredients do you use to add flavour to a dish?|What ingredients do you use to add flavor to a dish?", "ingredients ; add ; flavour/flavor ; dish",
      "What ingredients you use to add flavour to a dish? :: Questions need 'do': What ingredients do you use…?", "What ingredients do you use for add flavour to a dish? :: Purpose: to add.", "q"),
    W("Pregunta en qué proporciones mezcla los ingredientes para un batido de fresa.", "In what proportions do you mix the ingredients to get a strawberry milkshake?|In what proportions do you mix the ingredients for a strawberry milkshake?", "proportions ; mix ; strawberry ; milkshake/shake",
      "In what proportion you mix the ingredients to get a strawberry milkshake? :: Questions need 'do' and the plural: proportions.", "In what proportions do you mix the ingredients to get a milkshake of strawberry? :: Say 'a strawberry milkshake'.", "q"),
  ], bye: "Thanks for the tips. Bye!" });

UNIT6({ unit: 3, name: "Just in case", icon: "🔑", who: "Neighbour", face: "🧑", client: "Friend", cface: "👩",
  turns: [
    T("Hi! Why is it better to wear bright colours on a hot day?", "Di que los colores claros no absorben tanto calor.", "Because bright colours don't absorb so much heat.|Bright colours don't absorb so much heat.", "bright ; absorb ; heat",
      "Because bright colours not absorb so much heat. :: Negative present: don't absorb.", "Because bright colours don't absorb so many heat. :: 'Heat' is uncountable: so much heat."),
    T("Of course. By the way, there was a robbery near here. Have any flats been robbed in your neighbourhood recently?", "Di que sí, algunos pisos han sido robados recientemente.", "Yes, some flats have recently been robbed in my neighbourhood.|Yes, some flats have been robbed recently.", "yes ; flats ; robbed ; recently",
      "Yes, some flats have been rob recently. :: Passive: have been robbed.", "Yes, some flats are robbed recently. :: Present perfect passive: have been robbed."),
    T("How awful. Do you have spare keys, in case you lose the original one?", "Di que sí, tienes llaves de repuesto por si pierdes la original.", "Yes, I have spare keys in case I lose the original one.|Yes, I do. I have spare keys in case I lose the original.", "spare ; keys ; in case ; lose",
      "Yes, I have spare keys in case I will lose the original one. :: After 'in case' use the present: in case I lose.", "Yes, I have spare keys in case of I lose the original one. :: 'In case' + a clause (no 'of')."),
    T("Good idea. Sorry to interrupt, but are you driving to the party tonight?", "Di que no pasa nada y ofrece llevarle en coche: pasarás por su casa de todos modos.", "Don't worry, I'll give you a lift as I'll be driving past your house in any case.|No problem. I'll give you a lift. I'll be driving past your house in any case.", "lift ; driving ; house ; in any case",
      "Don't worry, I give you a lift as I'll be driving past your house in any case. :: An offer uses 'will': I'll give you a lift.", "Don't worry, I'll give you a lift as I'll be driving past your house in any cases. :: 'In any case' is singular."),
  ], end: "Thanks a lot!",
  staff: [
    W("Pregunta por qué es mejor llevar colores claros en un día de calor.", "Why is it better to wear bright colours on a hot day?|Why is it better to wear bright colours when it's hot?", "why ; better ; bright ; hot",
      "Why it is better to wear bright colours on a hot day? :: Question order: Why is it better…?", "Why is better to wear bright colours on a hot day? :: You need 'it': Why is it better…?", "q"),
    W("Pregunta si han robado algún piso recientemente en su barrio.", "Have any flats recently been robbed in your neighbourhood?|Have any flats been robbed in your neighbourhood recently?", "flats ; robbed ; neighbourhood/neighborhood",
      "Have any flats recently been rob in your neighbourhood? :: Passive: been robbed.", "Are any flats robbed recently in your neighbourhood? :: Present perfect passive: Have any flats been robbed…?", "q"),
    W("Pregunta si tiene llaves de repuesto por si pierde la original.", "Do you have spare keys in case you lose the original one?|Do you have spare keys in case you lose the original?", "spare ; keys ; in case ; lose",
      "Do you have spare keys in case you will lose the original one? :: After 'in case' use the present: in case you lose.", "Do you have spare keys in case of you lose the original one? :: 'In case' + a clause (no 'of').", "q"),
    W("Pide perdón por interrumpir y pregunta si va en coche a la fiesta esta noche.", "Sorry to interrupt, but are you driving to the party tonight?|Sorry to interrupt. Are you driving to the party tonight?", "interrupt ; driving ; party",
      "Sorry for interrupt, but are you driving to the party tonight? :: After 'sorry to' use the base verb: Sorry to interrupt.", "Sorry to disturb, but you are driving to the party tonight? :: Use 'interrupt' for stopping what someone is saying, and a question: are you driving…?", "q"),
    W("Ofrece llevarle en coche: pasarás por su casa de todos modos.", "I'll give you a lift as I'll be driving past your house in any case.|I'll give you a lift. I'll be driving past your house in any case.", "lift ; driving ; house ; in any case",
      "I give you a lift as I'll be driving past your house in any case. :: An offer uses 'will': I'll give you a lift.", "I'll give you a lift as I'll be driving past your house in any cases. :: 'In any case' is singular."),
  ], bye: "Thank you! See you later." });
