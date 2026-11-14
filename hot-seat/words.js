// Hot Seat word bank, by CEFR level (A1–C1).
// One card per line:  word to guess|forbidden word|forbidden word|…
// The team must explain the first word WITHOUT saying any of the forbidden ones (or the word itself).
// To add a card, add a line. You can use 1 to 5 forbidden words.
const HOT_WORDS = {
A1: `
pizza|cheese|Italy
dog|animal|bark
school|teacher|learn
banana|fruit|yellow
car|drive|road
mother|mum|father
bed|sleep|night
football|ball|goal
water|drink|sea
teacher|school|lesson
cat|animal|mouse
book|read|pages
sun|hot|sky
phone|call|mobile
birthday|cake|party
apple|fruit|red
house|live|home
milk|cow|white
chair|sit|table
bus|drive|school
rain|water|umbrella
shoes|feet|wear
baby|small|cry
kitchen|cook|food
doctor|hospital|ill
winter|cold|snow
breakfast|morning|eat
friend|like|play
window|glass|open
fish|swim|sea
ice cream|cold|summer
bike|ride|wheels
door|open|close
egg|chicken|breakfast
bedroom|sleep|bed
chocolate|sweet|brown
hat|head|wear
elephant|big|animal
Monday|day|week
orange|fruit|colour
`,
A2: `
beach|sand|sea
homework|school|teacher
airport|plane|fly
dentist|teeth|doctor
supermarket|shop|food
umbrella|rain|wet
holiday|summer|travel
weekend|Saturday|Sunday
library|books|quiet
restaurant|eat|waiter
museum|old|paintings
mountain|high|climb
passport|travel|country
shower|water|wash
sandwich|bread|lunch
guitar|music|play
neighbour|next|house
laptop|computer|screen
fridge|cold|kitchen
farmer|animals|field
headache|pain|head
ticket|buy|cinema
uniform|school|clothes
waiter|restaurant|food
exam|test|pass
snowman|winter|carrot
pocket|trousers|money
bridge|river|cross
dinosaur|animal|old
tourist|visit|holiday
recipe|cook|food
swimming pool|water|swim
kangaroo|Australia|jump
lunch|eat|school
cousin|uncle|aunt
password|computer|secret
vegetarian|meat|eat
queue|wait|line
storm|rain|thunder
diary|write|day
`,
B1: `
deadline|time|finish|late
volunteer|help|free|work
traffic jam|cars|road|slow
selfie|photo|phone|yourself
recycling|rubbish|bin|plastic
nightmare|dream|bad|sleep
influencer|social media|followers|famous
souvenir|buy|holiday|remember
jealous|want|angry|envy
earthquake|ground|shake|disaster
subtitles|film|read|language
pocket money|parents|week|give
embarrassed|red|face|shy
headphones|music|ears|listen
vending machine|drinks|coins|snacks
allergy|sneeze|nuts|react
flatmate|live|share|flat
to borrow|lend|give back|take
to complain|unhappy|problem|say
stranger|know|person|unknown
scholarship|money|study|university
homesick|miss|family|away
bargain|cheap|price|buy
part-time job|work|hours|money
sunburn|skin|red|beach
suitcase|travel|clothes|pack
to oversleep|late|bed|alarm
wedding|marry|bride|ring
referee|football|whistle|rules
generous|give|kind|money
environment|nature|pollution|planet
fast food|burger|quick|chips
gap year|travel|university|before
hairdresser|cut|hair|scissors
to cheat|exam|copy|rules
lifeguard|beach|swim|save
podcast|listen|episode|audio
sleepover|night|friend|house
roller coaster|theme park|ride|fast
charger|phone|battery|plug
to gossip|talk|people|secret
stepmother|father|wife|second
`,
B2: `
peer pressure|friends|influence|group
to procrastinate|later|delay|homework
breakthrough|discovery|science|important
bias|opinion|unfair|prejudice
sustainable|environment|future|green
to commute|work|travel|every day
stereotype|group|idea|typical
side effect|medicine|drug|bad
fake news|false|internet|information
burnout|tired|work|stress
to bribe|money|illegal|pay
loophole|law|gap|avoid
whistleblower|secret|company|reveal
hindsight|after|looking back|past
overrated|good|think|too
drawback|disadvantage|negative|problem
to binge-watch|series|episodes|Netflix
carbon footprint|CO2|environment|pollution
role model|admire|example|copy
scapegoat|blame|fault|other
gender gap|men|women|pay
couch potato|TV|lazy|sofa
white lie|truth|small|feelings
red tape|bureaucracy|paperwork|rules
to take for granted|appreciate|value|have
culture shock|country|different|abroad
comfort zone|safe|leave|new
jet lag|flight|tired|time zone
to back down|argument|give up|admit
wake-up call|warning|realise|change
brain drain|talent|country|leave
cliffhanger|episode|end|suspense
spoiler|film|ending|tell
plagiarism|copy|work|cheat
tip of the iceberg|small|problem|bigger
rule of thumb|general|guide|rough
to ghost someone|message|reply|disappear
word of mouth|recommend|tell|people
dead end|street|way|no
second-hand|used|new|buy
`,
C1: `
to gaslight|manipulate|crazy|doubt|reality
gentrification|neighbourhood|rich|rent|poor
catch-22|situation|no-win|paradox|rule
to play devil's advocate|argue|opposite|opinion|debate
silver lining|cloud|positive|bad|good
echo chamber|opinions|same|social media|agree
to sit on the fence|decide|side|neutral|choose
confirmation bias|believe|evidence|agree|already
a blessing in disguise|bad|good|luck|turn out
status quo|change|situation|current|same
to cut corners|cheap|quick|quality|save
imposter syndrome|fraud|deserve|success|doubt
red herring|mislead|clue|distract|false
the elephant in the room|obvious|problem|nobody|talk
to jump on the bandwagon|popular|trend|follow|join
tipping point|change|moment|critical|after
double-edged sword|advantage|disadvantage|both|good
to bite the bullet|difficult|brave|unpleasant|do
nepotism|family|job|relative|favour
greenwashing|company|environment|pretend|eco
to move the goalposts|rules|change|unfair|target
a storm in a teacup|small|big|fuss|problem
virtue signalling|moral|show|good|public
collateral damage|war|unintended|civilians|harm
steep learning curve|difficult|quickly|new|skill
to beat around the bush|direct|avoid|say|point
ivory tower|academic|real world|university|isolated
a wild goose chase|search|useless|find|pointless
backlash|reaction|negative|angry|against
to turn a blind eye|ignore|see|pretend|wrong
slippery slope|lead|worse|step|consequences
the benefit of the doubt|trust|believe|proof|innocent
Achilles heel|weakness|weak|point|Greek
paradigm shift|change|thinking|fundamental|way
to throw in the towel|give up|quit|boxing|surrender
a vicious circle|problem|worse|repeat|cause
clickbait|headline|link|attention|internet
wishful thinking|hope|unrealistic|want|true
to pull strings|influence|connections|secretly|power
cognitive dissonance|beliefs|conflict|uncomfortable|contradict
`,
// Famous people and characters that Spanish teenagers know. Add your own: one line per card.
FAME: `
SpongeBob|sponge|sea|yellow
Spider-Man|web|spider|Marvel
Harry Potter|wizard|magic|glasses
Shrek|ogre|green|donkey
Batman|bat|Gotham|dark
Pikachu|Pokémon|yellow|electric
Super Mario|plumber|Nintendo|moustache
Homer Simpson|yellow|doughnuts|Bart
Bart Simpson|Homer|skateboard|yellow
Elsa|Frozen|ice|queen
Mickey Mouse|Disney|ears|Minnie
Darth Vader|Star Wars|black|father
Wednesday Addams|family|black|plaits
Iron Man|suit|Marvel|Tony Stark
Sonic|blue|fast|hedgehog
Goku|Dragon Ball|hair|fight
Naruto|ninja|anime|orange
Doraemon|cat|blue|pocket
Shin-chan|Japan|boy|cartoon
the Minions|yellow|banana|Gru
Hulk|green|angry|strong
Barbie|doll|pink|Ken
the Joker|Batman|clown|smile
Hermione Granger|Harry Potter|clever|witch
Yoda|Star Wars|green|small
Simba|lion|king|Africa
Buzz Lightyear|Toy Story|space|Woody
Nemo|fish|orange|find
Captain America|shield|Marvel|flag
Thor|hammer|god|Marvel
Luffy|One Piece|pirate|hat
Peppa Pig|pink|mud|George
Scooby-Doo|dog|mystery|ghosts
Stitch|Lilo|blue|alien
Sherlock Holmes|detective|London|Watson
Dracula|vampire|blood|teeth
Superman|fly|cape|Clark Kent
Eleven|Stranger Things|powers|number
Lionel Messi|football|Argentina|Barcelona
Cristiano Ronaldo|football|Portugal|Real Madrid
Lamine Yamal|football|Barcelona|young
Kylian Mbappé|football|France|Real Madrid
Alexia Putellas|football|Barcelona|woman
Rafa Nadal|tennis|Mallorca|Roland Garros
Carlos Alcaraz|tennis|Murcia|young
Fernando Alonso|Formula 1|car|Asturias
LeBron James|basketball|NBA|Lakers
Rosalía|singer|flamenco|Motomami
Aitana|singer|Operación Triunfo|pop
Quevedo|singer|Canary Islands|Bizarrap
Shakira|singer|Colombia|hips
Bad Bunny|singer|Puerto Rico|reggaeton
Taylor Swift|singer|American|Eras
Billie Eilish|singer|American|green hair
Dua Lipa|singer|pop|British
Harry Styles|singer|One Direction|British
Ariana Grande|singer|ponytail|Wicked
Ed Sheeran|singer|guitar|ginger
Zendaya|actress|Spider-Man|Euphoria
Tom Holland|actor|Spider-Man|British
Ibai|streamer|Twitch|Bilbao
MrBeast|YouTube|money|challenges
Elon Musk|Tesla|rich|rockets
Albert Einstein|scientist|genius|hair
Pablo Picasso|painter|Málaga|Guernica
`
};
