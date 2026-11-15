// Crime Families: word families and the "jobs" (sentences with a gap), by level.
//
// A family line:   root | n nouns | v verbs | adj adjectives | adv adverbs      (n = noun, v = verb…)
// A job (indented): answer: the sentence (answer/other: when two words both fit), with ___ where the word goes
// The game shows the root (or another member of the family) as the clue, and puts each job in a district of
// the city by its answer: -tion/-ment… nouns, other nouns, verbs, adjectives, adverbs, or opposites (un-, dis-…).

const FAMILY_TEXT = {
A2: `
care | n care | v care | adj careful careless | adv carefully carelessly
  careful: Be ___ with that suitcase. It's full of money.
  carefully: The Don counted the money very ___.
  careless: A ___ driver crashed the boss's car.
drive | v drive | n driver
  driver: Vinnie is the family's ___. He takes the boss everywhere.
  drive: Can you ___ me to the airport tonight?
sing | v sing | n singer song
  singer: The ___ at the club sings every Friday night.
help | v help | n help helper | adj helpful helpless | adv helpfully
  helpful: Thanks, Tony. You were very ___ today.
quick | adj quick | adv quickly
  quickly: The police are coming! Leave ___!
quiet | adj quiet | adv quietly
  quietly: Talk ___. The walls have ears.
happy | adj happy unhappy | n happiness unhappiness | adv happily unhappily
  unhappy: The boss is very ___. Someone ate his cannoli.
  happiness: Money can't buy ___, but it helps.
  happily: The family ate dinner ___ together.
danger | n danger | adj dangerous | adv dangerously | v endanger
  dangerous: The docks are ___ at night.
  dangerously: He drives ___ fast.
luck | n luck | adj lucky unlucky | adv luckily unluckily
  lucky: Seven is my ___ number.
  luckily: ___, the police didn't see us.
  unlucky: Thirteen is an ___ number for the family.
teach | v teach | n teacher
  teacher: Before he joined the family, Sal was a maths ___.
friend | n friend friendship | adj friendly unfriendly
  friendly: The new waiter is very ___. He smiles at everyone.
  unfriendly: The rival family is very ___. They never say hello.
  friendship: Their ___ started at school, forty years ago.
paint | v paint | n painter painting
  painting: Someone stole a famous ___ from the museum.
  painter: The ___ painted a huge portrait of the Don.
  paint: The boss wants us to ___ the restaurant red.
kind | adj kind unkind | n kindness | adv kindly
  kindness: The Don never forgets an act of ___.
  kindly: The old lady ___ gave us a cup of coffee.
  unkind: Don't be ___ to Mamma. She made you dinner.
slow | adj slow | adv slowly
  slowly: The black car drove ___ past the restaurant.
dark | adj dark | n darkness
  darkness: They met in the ___ of the old warehouse.
win | v win | n winner
  winner: The ___ of the card game takes all the money.
bake | v bake | n baker bakery
  bakery: The family owns a small ___. They make the best bread in town.
  bake: Mamma is going to ___ a cake for the wedding.
honest | adj honest dishonest | n honesty | adv honestly
  dishonest: Never trust him. He's completely ___.
  honestly: Tell me ___: where is the money?
  honesty: In this family, ___ is everything. Never lie to the Don.
possible | adj possible impossible | adv possibly | n possibility
  impossible: Escaping from this prison is ___.
tidy | adj tidy untidy | v tidy
  untidy: The boss's office is so ___! There are papers everywhere.
decide | v decide | n decision
  decision: The boss made an important ___.
  decide: You have five minutes to ___. Yes or no?
invite | v invite | n invitation
  invitation: We got an ___ to the Don's daughter's wedding.
  invite: Let's ___ the Rossi family to dinner.
agree | v agree disagree | n agreement disagreement
  agreement: The two families signed an ___.
  disagree: I ___ with you, boss. That's a bad idea.
enjoy | v enjoy | n enjoyment | adj enjoyable
  enjoyable: The dinner was very ___. Thank you, Mamma.
inform | v inform | n information
  information: The police want ___ about the family.
collect | v collect | n collection collector
  collection: The boss has a big ___ of old cars.
  collect: Go and ___ the money from the restaurant.
celebrate | v celebrate | n celebration
  celebration: There's a big ___ for the Don's birthday.
  celebrate: Let's ___! We're rich!
noise | n noise | adj noisy | adv noisily
  noisy: The club is too ___. I can't hear you.
fame | n fame | adj famous
  famous: The Don is ___ in the whole city.
easy | adj easy | adv easily
  easily: He opened the safe ___. It wasn't even locked.
`,
B1: `
explain | v explain | n explanation
  explanation: The boss wants a good ___ for the missing money.
  explain: You have to ___ where the money went.
arrive | v arrive | n arrival
  arrival: Nobody expected the ___ of the police.
protect | v protect | n protection | adj protective
  protection: The shop owners pay the family for ___.
  protect: The family will always ___ you.
  protective: Mamma is very ___ of her sons.
permit | v permit | n permission
  permission: You need the Don's ___ to enter his office.
appear | v appear disappear | n appearance disappearance
  appearance: He changed his ___: new hair, new glasses, new name.
  disappear: The money didn't just ___! Somebody took it.
pay | v pay | n payment
  payment: The ___ is late. The boss is not happy.
  pay: You have until Friday to ___.
organise | v organise | n organisation organiser | adj organised disorganised
  organisation: The police think the family is a criminal ___.
  organise: Can you ___ a meeting for Friday?
  disorganised: The new accountant is totally ___. He loses everything.
free | adj free | n freedom | adv freely
  freedom: After ten years in prison, he finally got his ___.
real | adj real | n reality | v realise | adv really
  reality: The ___ is that we have no money left.
  realise: Did you ___ the money was fake?
secure | adj secure insecure | n security | adv securely
  security: There's a lot of ___ at the bank: cameras, guards and alarms.
own | v own | n owner
  owner: Mr Rossi is the ___ of three restaurants.
lie | v lie | n liar
  liar: Don't believe him. He's a ___.
rob | v rob | n robbery robber
  robbery: There was a ___ at the jewellery shop last night.
  robber: The ___ escaped through the back door.
weak | adj weak | n weakness | v weaken | adv weakly
  weakness: Cannoli are the Don's only ___.
  weaken: The arrests will ___ the family.
apology | n apology | v apologise
  apologise: You must ___ to the Don. Now!
short | adj short | v shorten
  shorten: The judge decided to ___ his prison sentence.
success | n success | adj successful unsuccessful | adv successfully unsuccessfully | v succeed
  successful: The family runs a very ___ business.
  successfully: They ___ opened the safe.
  succeed: If we work together, we will ___.
nerve | n nerve | adj nervous | adv nervously
  nervous: Why are you so ___? Do you have something to hide?
  nervously: He looked ___ at the door.
use | v use | n use user | adj useful useless | adv usefully
  useful: This information is very ___. Thank you.
  useless: This old phone is ___. It doesn't work.
attract | v attract | n attraction | adj attractive unattractive
  attractive: The Don made him an ___ offer.
comfort | n comfort | adj comfortable uncomfortable | adv comfortably
  comfortable: The boss's chair is big and ___.
  uncomfortable: The questions made him feel very ___.
profession | n profession | adj professional | adv professionally
  professional: He's a ___ thief. He never makes mistakes.
secret | n secret | adv secretly
  secretly: The two families met ___ in the park.
sudden | adj sudden | adv suddenly
  suddenly: ___, the lights went out.
fortune | n fortune | adj fortunate unfortunate | adv fortunately unfortunately
  fortunately: ___, the boss was in a good mood.
  unfortunately: ___, the police found the money.
anger | n anger | adj angry | adv angrily
  angrily: "Who ate my cannoli?" the Don shouted ___.
legal | adj legal illegal | adv legally illegally
  illegal: Selling fake watches is ___.
patient | adj patient impatient | n patience impatience | adv patiently impatiently
  impatient: Don't be so ___. The boss will see you soon.
  patiently: He waited ___ outside the Don's office.
understand | v understand misunderstand | n understanding misunderstanding
  misunderstand: I think you ___ me. I said Tuesday, not Thursday.
usual | adj usual unusual | adv usually unusually
  unusual: It's ___ for the boss to be late.
  usually: The boss ___ eats at Luigi's on Sundays.
`,
B2: `
investigate | v investigate | n investigation investigator
  investigation: The police started an ___ into the family.
  investigate: The police are going to ___ the restaurant.
compete | v compete | n competition competitor | adj competitive | adv competitively
  competition: There's a lot of ___ between the two families.
  competitive: The pizza business in this city is very ___.
describe | v describe | n description | adj descriptive
  description: The witness gave the police a ___ of the robber.
  describe: Can you ___ the man you saw?
confident | adj confident | n confidence | adv confidently
  confidence: The boss has total ___ in his lawyer.
  confidently: He walked ___ into the courtroom.
involve | v involve | n involvement
  involvement: His ___ in the family business is a secret.
excite | v excite | n excitement | adj exciting excited | adv excitedly
  excitement: There was a lot of ___ about the new casino.
cooperate | v cooperate | n cooperation | adj cooperative uncooperative
  cooperation: Thank you for your ___. Close the door on your way out.
  uncooperative: The witness was ___. He refused to answer any questions.
prove | v prove | n proof
  proof: The police have no ___. They can't arrest him.
  prove: Can you ___ that you were at home that night?
loyal | adj loyal disloyal | n loyalty disloyalty | adv loyally
  loyalty: In this family, ___ is everything.
  loyally: He served the family ___ for thirty years.
  disloyal: A ___ soldier is the family's worst enemy.
strong | adj strong | n strength | v strengthen | adv strongly
  strength: The family's ___ comes from sticking together.
  strengthen: We need to ___ our position in the city.
grow | v grow | n growth
  growth: The business had incredible ___ last year.
threat | n threat | v threaten | adj threatening
  threaten: Are you trying to ___ me?
responsible | adj responsible irresponsible | n responsibility irresponsibility | adv responsibly irresponsibly
  responsibility: Who takes ___ for this mess?
  irresponsible: Leaving the money in the car was totally ___!
  responsibly: Spend the money ___. Don't buy anything stupid.
fail | v fail | n failure
  failure: The plan was a complete ___.
jealous | adj jealous | n jealousy | adv jealously
  jealousy: The brothers' ___ ended in disaster.
  jealous: He's ___ of his brother's success.
persuade | v persuade | n persuasion | adj persuasive | adv persuasively
  persuasive: The lawyer was very ___. The judge believed every word.
  persuade: Try to ___ the judge that you're innocent.
simple | adj simple | v simplify | n simplicity | adv simply
  simplify: Let me ___ the plan for you.
critic | n critic criticism | v criticise | adj critical | adv critically
  criticise: Never ___ the Don in front of other people.
suspect | v suspect | n suspicion | adj suspicious | adv suspiciously
  suspicious: The police are ___ of the new restaurant.
  suspiciously: The new waiter is acting very ___.
anxiety | n anxiety | adj anxious | adv anxiously
  anxious: The boss is ___ about tonight's meeting.
  anxiously: They waited ___ for the phone to ring.
rely | v rely | adj reliable unreliable | n reliability | adv reliably
  reliable: We need a ___ driver. Someone who's never late.
  unreliable: Don't hire him. He's totally ___.
deliberate | adj deliberate | adv deliberately
  deliberately: He broke the window ___. It wasn't an accident.
agree | v agree disagree | n agreement disagreement | adj agreeable
  disagreement: There was a ___ about how to split the money.
honest | adj honest dishonest | n honesty dishonesty | adv honestly dishonestly
  dishonesty: His ___ cost him his place in the family.
polite | adj polite impolite | n politeness | adv politely
  impolite: It's ___ to arrive late for the Don's dinner.
  politely: He ___ refused the Don's offer. Big mistake.
understand | v understand misunderstand | n understanding misunderstanding
  misunderstanding: It was all a big ___. Nobody wanted to start a war.
`,
C1: `
justify | v justify | n justification | adj justified unjustified | adv justifiably
  justification: There's no ___ for what you did.
  justify: How can you ___ spending all that money?
  unjustified: The attack on the restaurant was completely ___.
commit | v commit | n commitment | adj committed
  commitment: The judge doubted his ___ to telling the truth.
dominate | v dominate | n dominance domination | adj dominant
  dominance/domination: The family's ___ of the city grew every year.
  dominate: The family wants to ___ the whole city.
  dominant: The Morettis are now the ___ family in the city.
reduce | v reduce | n reduction
  reduction: There was a huge ___ in the price of olive oil. Suspicious…
devote | v devote | n devotion | adj devoted
  devotion: His ___ to the family was never questioned.
  devoted: He's a ___ father and a ruthless businessman.
discreet | adj discreet indiscreet | n discretion | adv discreetly
  discretion: We need complete ___. Tell no one.
  discreet: Be ___. Nobody can know about this meeting.
  discreetly: He ___ passed the envelope under the table.
  indiscreet: It was ___ of you to talk about the deal on the phone.
wise | adj wise unwise | n wisdom | adv wisely
  wisdom: The old Don's ___ is legendary.
thick | adj thick | n thickness | v thicken
  thickness: The ___ of the vault door is impressive: two metres of steel.
hostile | adj hostile | n hostility
  hostility: The ___ between the families lasted for years.
  hostile: The meeting was tense and ___.
brave | adj brave | n bravery | adv bravely
  bravery: Nobody doubted his ___.
simple | adj simple | n simplicity | v simplify | adv simply
  simplicity: The ___ of the plan was its genius.
rival | n rival rivalry
  rivalry: The ___ between the two families goes back fifty years.
intense | adj intense | n intensity | v intensify | adv intensely
  intensify: The police decided to ___ the investigation.
  intensely: The two men stared at each other ___.
rich | adj rich | v enrich | n riches
  enrich: The deal will ___ the whole family.
minimum | n minimum | adj minimal | v minimise | adv minimally
  minimise: We must ___ the risks.
clear | adj clear unclear | v clarify | n clarity clarification | adv clearly
  clarify: Let me ___ something: I am the boss here.
danger | n danger | adj dangerous | adv dangerously | v endanger
  endanger: Your mistake could ___ the whole family.
mercy | n mercy | adj merciful merciless | adv mercifully mercilessly
  merciless: The new boss is ___. He never forgives.
  mercilessly: The rival family was ___ pushed out of the city.
persist | v persist | n persistence | adj persistent | adv persistently
  persistent: The detective was very ___. He never gave up.
  persistently: The detective called ___, every single day.
allege | v allege | n allegation | adj alleged | adv allegedly
  allegedly: The Don ___ owns half the city.
  allegation: He denied every ___ against him.
reluctant | adj reluctant | n reluctance | adv reluctantly
  reluctantly: He ___ agreed to testify.
sufficient | adj sufficient insufficient | adv sufficiently | v suffice
  insufficient: The judge said the evidence was ___.
appear | v appear disappear | n appearance disappearance
  disappearance: His sudden ___ worried the whole family.
relevant | adj relevant irrelevant | n relevance | adv relevantly
  irrelevant: That detail is ___. Get to the point.
legible | adj legible illegible | adv legibly
  illegible: The note was ___. Nobody could read it.
honour | n honour | adj honourable dishonourable | adv honourably
  dishonourable: Betraying the family is ___.
interpret | v interpret misinterpret | n interpretation interpreter misinterpretation
  misinterpret: Don't ___ my silence.
`,
};

const WORD_TYPES = { n: "noun", v: "verb", adj: "adjective", adv: "adverb" };
const OPP_PREFIX = /^(un|in|im|ir|il|dis|mis)/;

// Parse the text above into { A2: [family, …], … }. A family: { root, forms: { n: [], v: [], adj: [], adv: [] }, jobs: [] }
const FAMILIES = (() => {
  const out = {};
  for (const [lv, txt] of Object.entries(FAMILY_TEXT)){
    const fams = []; let cur = null;
    txt.split("\n").forEach(line => {
      if (!line.trim() || line.trim().startsWith("#")) return;
      if (/^\s/.test(line)){
        const m = line.trim().match(/^([a-z/]+):\s*(.+)$/i);   // answer/other: when two words both fit
        if (m && cur){ const answers = m[1].toLowerCase().split("/"); cur.jobs.push({ answer: answers[0], answers, text: m[2].trim() }); }
        return;
      }
      const parts = line.split("|").map(s => s.trim());
      const forms = { n: [], v: [], adj: [], adv: [] };
      parts.slice(1).forEach(p => { const [t, ...ws] = p.split(/\s+/); if (forms[t]) forms[t].push(...ws.map(w => w.toLowerCase())); });
      const root = parts[0].toLowerCase();
      // the root's own type: the first one it is listed in (use | v use | n use user → a verb)
      const rootType = parts.slice(1).map(p => p.split(/\s+/)).find(([t, ...ws]) => ws.map(w => w.toLowerCase()).includes(root));
      cur = { root, rootType: rootType ? rootType[0] : null, forms, jobs: [], level: lv };
      fams.push(cur);
    });
    out[lv] = fams;
  }
  return out;
})();

const allForms = fam => Object.values(fam.forms).flat();
const typeOf = (fam, w) => Object.keys(fam.forms).find(t => fam.forms[t].includes(w));
// An "opposite": un-/in-/dis-… + another word of the same family (unhappy ← happy). Not "information" or "invite".
const isOpp = (fam, w) => { const m = w.match(OPP_PREFIX); return !!m && allForms(fam).includes(w.slice(m[1].length)); };
