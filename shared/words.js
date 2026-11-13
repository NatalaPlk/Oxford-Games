// Super Minds (Starter–6) vocabulary, shared by Spelling Bee and Monster Rush.
// Format: one word per line, optional emoji picture after it; '## Unit name' starts a unit.
const BOOKS = {
  sms: { name: "Super Minds Starter", text: `
## Welcome: Say Hello
red 🔴
blue 🔵
green 🟢
yellow 🟡
orange 🟠
purple 🟣
black ⚫
white ⚪
brown 🟤
one 1️⃣
two 2️⃣
three 3️⃣
four 4️⃣
five 5️⃣
six 6️⃣
seven 7️⃣
eight 8️⃣
nine 9️⃣
ten 🔟

## Unit 1: My Classroom
pen 🖊️
pencil ✏️
book 📕
bag 🎒
ruler 📏
crayon 🖍️
chair 🪑
table 🪑
door 🚪
window 🪟

## Unit 2: My Body
head 🙂
arm 💪
leg 🦵
foot 🦶
hand ✋
eye 👁️
ear 👂
nose 👃
mouth 👄
hair 💇

## Unit 3: My Family
mum 👩
dad 👨
brother 👦
sister 👧
grandma 👵
grandpa 👴
baby 👶
family 👪

## Unit 4: At The Zoo
lion 🦁
tiger 🐯
monkey 🐒
elephant 🐘
giraffe 🦒
snake 🐍
bear 🐻
zebra 🦓
crocodile 🐊
hippo 🦛

## Unit 5: My Food
apple 🍎
banana 🍌
bread 🍞
cheese 🧀
milk 🥛
egg 🥚
cake 🍰
pizza 🍕
carrot 🥕
juice 🧃

## Unit 6: My Town
shop 🏪
park 🌳
school 🏫
house 🏠
hospital 🏥
cafe ☕
street 🛣️
bus 🚌

## Unit 7: Jobs
doctor 🧑‍⚕️
teacher 🧑‍🏫
farmer 🧑‍🌾
cook 🧑‍🍳
pilot 🧑‍✈️
nurse 👩‍⚕️
vet 🐶
firefighter 🧑‍🚒

## Unit 8: My Clothes
hat 👒
dress 👗
socks 🧦
shoes 👟
coat 🧥
skirt 👗
trousers 👖
shirt 👔

## Unit 9: My Hobbies
dance 💃
sing 🎤
swim 🏊
run 🏃
paint 🎨
read 📖
jump 🦘
football ⚽
`},
  sm1: { name: "Super Minds 1", text: `
## Welcome: Friends
hello 👋
goodbye 👋
friend 🧑‍🤝‍🧑
eleven 1️⃣1️⃣
twelve 🕛
thirteen 1️⃣3️⃣
fourteen 1️⃣4️⃣
fifteen 1️⃣5️⃣
sixteen 1️⃣6️⃣
seventeen 1️⃣7️⃣
eighteen 1️⃣8️⃣
nineteen 1️⃣9️⃣
twenty 2️⃣0️⃣

## Unit 1: At School
pencil ✏️
rubber 🧽
ruler 📏
book 📕
bag 🎒
crayon 🖍️
desk 🖥️
board 🧑‍🏫
chair 🪑
computer 💻

## Unit 2: Let's Play
ball ⚽
doll 🪆
kite 🪁
train 🚂
bike 🚲
robot 🤖
teddy 🧸
plane ✈️
car 🚗
big 🐘
small 🐭
new 🆕
old 👴

## Unit 3: Pet Show
dog 🐶
cat 🐱
rabbit 🐰
mouse 🐭
fish 🐟
bird 🐦
horse 🐴
frog 🐸
spider 🕷️
tortoise 🐢

## Unit 4: Lunchtime
sandwich 🥪
rice 🍚
chicken 🍗
salad 🥗
water 💧
orange 🍊
tomato 🍅
potato 🥔
chocolate 🍫
sausage 🌭

## Unit 5: Free Time
Monday 📅
Tuesday 📅
Wednesday 📅
Thursday 📅
Friday 📅
Saturday 📅
Sunday 📅
week 📅

## Unit 6: The Old House
kitchen 🍳
bedroom 🛏️
bathroom 🛁
garden 🌻
stairs 🪜
sofa 🛋️
bed 🛏️
lamp 💡
house 🏠

## Unit 7: Get Dressed
shirt 👔
jeans 👖
jumper 🧶
shorts 🩳
boots 🥾
scarf 🧣
gloves 🧤
cap 🧢
trousers 👖
socks 🧦

## Unit 8: The Robot
head 🙂
shoulders 🤷
knees 🦵
toes 🦶
fingers 🖐️
arms 💪
legs 🦵
feet 🦶
neck 🦒
body 🧍

## Unit 9: At The Beach
sea 🌊
sand 🏖️
shell 🐚
sun ☀️
boat ⛵
beach 🏖️
holiday 🧳
sandcastle 🏰
crab 🦀
towel 🛁
`},
  sm2: { name: "Super Minds 2", text: `
## Welcome: Back To School
classroom 🏫
scissors ✂️
glue 🧴
notebook 📓
calculator 🧮
dictionary 📖
poster 🖼️
pencil ✏️

## Unit 1: My Day
breakfast 🥣
lunch 🍽️
dinner 🍝
shower 🚿
teeth 🦷
morning 🌅
afternoon 🌤️
evening 🌆
clock ⏰
quarter 🕒
half 🌓

## Unit 2: The Zoo
kangaroo 🦘
penguin 🐧
parrot 🦜
camel 🐫
gorilla 🦍
dolphin 🐬
shark 🦈
lizard 🦎
whale 🐳
bat 🦇

## Unit 3: Where We Live
library 📚
cinema 🎬
supermarket 🛒
park 🌳
bank 🏦
hospital 🏥
station 🚉
museum 🏛️
pool 🏊
cafe ☕

## Unit 4: The Market
lemon 🍋
pear 🍐
grapes 🍇
watermelon 🍉
onion 🧅
mango 🥭
pineapple 🍍
strawberry 🍓
beans 🫘
pepper 🫑

## Unit 5: My Bedroom
wardrobe 🚪
shelf 📚
cupboard 🗄️
mirror 🪞
rug 🟥
curtains 🪟
clock ⏰
lamp 💡
bed 🛏️
desk 🖥️

## Unit 6: People
face 😀
eyes 👀
nose 👃
mouth 👄
ears 👂
beard 🧔
glasses 👓
January 📅
February 📅
March 📅
April 📅
May 📅
June 📅
July 📅
August 📅
September 📅
October 📅
November 📅
December 📅

## Unit 7: Off We Go!
bus 🚌
train 🚆
plane ✈️
bike 🚲
boat ⛵
helicopter 🚁
motorbike 🏍️
taxi 🚕
lorry 🚚
tram 🚊

## Unit 8: Sports Club
football ⚽
basketball 🏀
tennis 🎾
volleyball 🏐
baseball ⚾
hockey 🏒
swimming 🏊
skating ⛸️
badminton 🏸
golf ⛳

## Unit 9: Holiday Plans
mountain ⛰️
lake 🏞️
river 🏞️
forest 🌲
island 🏝️
camping ⛺
tent ⛺
suitcase 🧳
passport 🛂
beach 🏖️
`},
  sm3: { name: "Super Minds 3", text: `
## Unit 1: Our School
English 🇬🇧
maths ➗
science 🔬
history 🏛️
geography 🌍
art 🎨
music 🎵
subject
timetable 🗓️
before
after

## Unit 2: The Picnic
picnic 🧺
biscuits 🍪
crisps 🥔
lemonade 🍋
blanket 🛏️
strawberries 🍓
sausages 🌭
yoghurt 🥛
cucumber 🥒
sandwiches 🥪

## Unit 3: Daily Tasks
wash 🧼
clean 🧹
tidy 🧹
sweep 🧹
dishes 🍽️
rubbish 🗑️
shopping 🛒
ironing 👕
homework 📝
minutes 🕒

## Unit 4: Around Town
bridge 🌉
square ⬛
statue 🗽
castle 🏰
church ⛪
theatre 🎭
factory 🏭
restaurant 🍽️
hotel 🏨
market 🛒

## Unit 5: Under The Sea
octopus 🐙
shark 🦈
whale 🐳
dolphin 🐬
jellyfish 🪼
crab 🦀
starfish ⭐
seahorse 🐠
turtle 🐢
squid 🦑

## Unit 6: Gadgets
camera 📷
laptop 💻
phone 📱
tablet 📱
headphones 🎧
keyboard ⌨️
printer 🖨️
battery 🔋
television 📺
remote 📺

## Unit 7: In The Hospital
headache 🤕
cough 😷
cold 🤧
temperature 🌡️
toothache 🦷
earache 👂
nurse 👩‍⚕️
medicine 💊
ambulance 🚑
plaster 🩹

## Unit 8: Around The World
Spain 🌍
France 🌍
Italy 🌍
Germany 🌍
Brazil 🌍
China 🌍
Japan 🌍
Mexico 🌍
Australia 🌍
Egypt 🌍

## Unit 9: Holiday Plans
sunny ☀️
cloudy ☁️
rainy 🌧️
windy 💨
snowy ❄️
foggy 🌫️
stormy ⛈️
umbrella ☂️
sunglasses 🕶️
weather 🌦️
`},
  sm4: { name: "Super Minds 4", text: `
## Welcome: At Town Events
parade 🎉
fireworks 🎆
festival 🎪
band 🎺
balloon 🎈
costume 🦸
crowd 👥
stage 🎭
flag 🚩
prize 🏆

## Unit 1: In The Museum
knight 🛡️
queen 👸
king 🤴
castle 🏰
sword 🗡️
shield 🛡️
crown 👑
armour 🛡️
princess 👸
museum 🏛️

## Unit 2: The World Around Us
hill ⛰️
valley 🏞️
field 🌾
waterfall 💦
cave 🕳️
path 🥾
village 🏘️
countryside 🌳
river 🏞️
forest 🌲

## Unit 3: Danger
fire 🔥
ambulance 🚑
police 🚓
emergency 🚨
accident 💥
helmet ⛑️
rescue 🚁
danger ⚠️
alarm 🚨
firefighter 🧑‍🚒

## Unit 4: Two Return Tickets
ticket 🎫
platform 🚉
timetable 🗓️
luggage 🧳
journey 🧳
passenger 🧳
carriage 🚃
station 🚉
single 🎫
return 🔁

## Unit 5: Police
curly 👩‍🦱
straight 👩
blond 👱
moustache 🥸
beard 🧔
freckles 🧒
fringe 💇
ponytail 👧
bald 👨‍🦲
glasses 👓

## Unit 6: Mythical Beasts
wings 🪽
tail 🐒
claws 🐾
horns 🦏
beak 🦜
scales 🐟
feathers 🪶
fur 🐻
dragon 🐉
unicorn 🦄

## Unit 7: Orchestra Practice
violin 🎻
trumpet 🎺
drums 🥁
guitar 🎸
piano 🎹
flute 🎶
saxophone 🎷
recorder 🎶
orchestra 🎻
triangle 🔺

## Unit 8: In The Planetarium
planet 🪐
star ⭐
moon 🌙
rocket 🚀
astronaut 🧑‍🚀
Earth 🌍
comet ☄️
telescope 🔭
galaxy 🌌
space 🌌

## Unit 9: At The Campsite
tent ⛺
torch 🔦
campfire 🔥
canoe 🛶
fishing 🎣
compass 🧭
map 🗺️
rucksack 🎒
climbing 🧗
campsite 🏕️
`},
  sm5: { name: "Super Minds 5", text: `
## Welcome: The Science Lesson
experiment 🧪
scientist 🧑‍🔬
magnet 🧲
microscope 🔬
liquid 💧
solid 🧊
gas 💨
temperature 🌡️
result
measure 📏

## Unit 1: Disaster
volcano 🌋
earthquake 🌍
flood 🌊
ash 🌋
lava 🌋
eruption 🌋
disaster 🌪️
tsunami 🌊
damage 🏚️
survive 💪

## Unit 2: In The Rainforest
rainforest 🌳
jaguar 🐆
sloth 🦥
butterfly 🦋
leaves 🍃
insect 🐜
poisonous ☠️
hundred 💯
thousand 🔢
million 💰

## Unit 3: The Rock And Roll Show
concert 🎤
singer 🎤
audience 👏
guitarist 🎸
drummer 🥁
microphone 🎤
stage 🎭
speakers 🔊
fans 📣
ticket 🎫

## Unit 4: Space Restaurant
menu 📋
waiter 🍽️
starter 🥗
dessert 🍨
bill 🧾
order 📝
delicious 😋
first 🥇
second 🥈
third 🥉

## Unit 5: The Wild West
cowboy 🤠
horse 🐴
sheriff ⭐
saloon 🤠
desert 🏜️
cactus 🌵
gold 🪙
ranch 🐴
wagon 🛒
lasso 🤠

## Unit 6: In Istanbul
souvenir 🎁
carpet 🟥
bracelet 💍
necklace 📿
postcard 📮
keyring 🔑
jewellery 💍
pottery 🏺
scarf 🧣
spices 🌶️

## Unit 7: The Story Teller
theatre 🎭
actor 🎭
audience 👏
costume 🦸
script 📜
scene 🎬
curtain 🎭
playwright ✍️
applause 👏
story 📖

## Unit 8: Museum Of The Future
engineer 👷
architect 📐
scientist 🧑‍🔬
journalist 📰
designer ✏️
photographer 📸
programmer 💻
mechanic 🔧
inventor 💡
future 🔮

## Unit 9: Mystery At Sea
captain 👨‍✈️
deck 🚢
cabin 🛏️
anchor ⚓
sailor ⚓
island 🏝️
lighthouse 🗼
storm ⛈️
wave 🌊
lifeboat 🛟
`},
  sm6: { name: "Super Minds 6", text: `
## Welcome: Outside At School
playground 🛝
bench 🪑
fence 🚧
gate 🚪
slide 🛝
swings 🎢
path 🥾
field 🌾
bin 🗑️
tree 🌳

## Unit 1: The Treasure
pirate 🏴‍☠️
treasure 💰
chest 💎
parrot 🦜
island 🏝️
map 🗺️
diamond 💎
silver 🥈
gold 🪙
jewels 💍

## Unit 2: Future Transport
hovercraft 🛥️
spaceship 🚀
submarine 🌊
electric ⚡
engine ⚙️
passenger 🧳
journey 🧳
drone 🚁
helicopter 🚁
motorway 🛣️

## Unit 3: Ancient Egypt
pyramid 🔺
pharaoh 👑
mummy 🧟
tomb ⚱️
desert 🏜️
camel 🐫
temple 🛕
Nile 🏜️
statue 🗿
hieroglyphs 📜

## Unit 4: Olympic Sports
athletics 🏃
gymnastics 🤸
cycling 🚴
rowing 🚣
sailing ⛵
boxing 🥊
fencing 🤺
archery 🏹
medal 🏅
champion 🏆

## Unit 5: In London
bakery 🥐
butcher 🥩
chemist 💊
newsagent 📰
greengrocer 🥦
florist 💐
jeweller 💍
bookshop 📚
customer 🛍️
souvenir 🎁

## Unit 6: Crazy Inventions
hammer 🔨
screwdriver 🪛
saw 🪚
drill 🔩
scissors ✂️
ladder 🪜
machine ⚙️
invention 💡
button 🔘
wheel 🛞

## Unit 7: This Is Houston
astronaut 🧑‍🚀
rocket 🚀
spacesuit 👩‍🚀
launch 🚀
orbit 🛰️
gravity 🍎
satellite 🛰️
crater 🌑
mission 🚀
landing 🛬

## Unit 8: A Cold Place
iceberg 🧊
glacier 🏔️
walrus 🦭
seal 🦭
penguin 🐧
igloo ⛄
sledge 🛷
Arctic 🐻‍❄️
blizzard 🌨️
reindeer 🦌

## Unit 9: The Jurassic Age
dinosaur 🦕
fossil 🦴
skeleton 💀
volcano 🌋
swamp 🐊
cliff ⛰️
jungle 🌴
extinct 🦕
footprint 🐾
prehistoric 🦖
`}
};

// What kind of word each one is, so children know what to say (e.g. "paint": the action, not the thing).
// Anything not listed here is a noun.
const WORD_TYPE_LISTS = {
  verb: "dance sing swim run paint read jump wash clean tidy sweep measure survive ironing shopping camping swimming skating climbing fishing cycling rowing sailing boxing fencing",
  adj: "big small new old curly straight blond bald sunny cloudy rainy windy snowy foggy stormy delicious poisonous extinct prehistoric electric",
  colour: "red blue green yellow orange purple black white brown",
  number: "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty hundred thousand million first second third",
  day: "Monday Tuesday Wednesday Thursday Friday Saturday Sunday",
  month: "January February March April May June July August September October November December",
  greeting: "hello goodbye",
  country: "Spain France Italy Germany Brazil China Japan Mexico Australia Egypt",
};
const WORD_TYPE_LABELS = {
  noun: "🧸 Noun · thing, person or place", verb: "🏃 Verb · action", adj: "🎨 Adjective · describing word",
  colour: "🌈 Colour", number: "🔢 Number", day: "📅 Day of the week", month: "🗓️ Month", greeting: "👋 Greeting", country: "🌍 Country",
};
const WORD_TYPES = {};
Object.entries(WORD_TYPE_LISTS).forEach(([t, s]) => s.split(" ").forEach(w => { WORD_TYPES[w] = t; }));
// "orange" is a colour in Starter (🟠) but the fruit in the food unit (🍊)
function wordType(word, pic){ if (word === "orange" && pic && pic.includes("🍊")) return "noun"; return WORD_TYPES[word] || "noun"; }
function wordTypeLabel(word, pic){ return WORD_TYPE_LABELS[wordType(word, pic)]; }
