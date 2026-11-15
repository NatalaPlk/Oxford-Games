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
doctor 👨‍⚕️🩺
teacher 👩‍🏫
farmer 👨‍🌾
cook 👨‍🍳
pilot 👨‍✈️
nurse 👩‍⚕️💉
vet 👩‍⚕️🐶
firefighter 👨‍🚒

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
blue 🔵
green 🟢
yellow 🟡
orange 🟠
red 🔴
purple 🟣
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

## Unit 1: At School
ruler 📏
pen 🖊️
book 📕
rubber 🧽
pencil case 👝
pencil ✏️
desk 🪑
notebook 📓
bag 🎒
paper 📄

## Unit 2: Let's Play
train 🚂
plane ✈️
monster 👾
kite 🪁
bike 🚲
ball ⚽
doll 🪆
car 🚗
computer game 🎮
go-kart 🏎️
big 🐘
small 🐭
long 📏
short ✂️
old 🧸
new 🆕
beautiful 🌸
ugly 👹
black ⚫
white ⚪
pink 🎀

## Unit 3: Pet Show
donkey 🐴
elephant 🐘
spider 🕷️
cat 🐱
rat 🐀
frog 🐸
duck 🦆
lizard 🦎
dog 🐶
in 📥
on 🔛
under ⬇️

## Unit 4: Lunchtime
apple 🍎
banana 🍌
cake 🍰
pizza 🍕
sausage 🌭
cheese sandwich 🥪
fish 🐟
chicken 🍗
peas 🥣
steak 🥩
carrots 🥕
eleven 1️⃣1️⃣
twelve 1️⃣2️⃣
thirteen 1️⃣3️⃣
fourteen 1️⃣4️⃣
fifteen 1️⃣5️⃣
sixteen 1️⃣6️⃣
seventeen 1️⃣7️⃣
eighteen 1️⃣8️⃣
nineteen 1️⃣9️⃣
twenty 2️⃣0️⃣

## Unit 5: Free Time
Monday 📅
Tuesday 📅
Wednesday 📅
Thursday 📅
Friday 📅
Saturday 📅
Sunday 📅

## Unit 6: The Old House
bedroom 🛏️
bathroom 🛁
living room 🛋️
kitchen 🍳
hall 🚪
stairs 🪜
cellar 🕯️
dining room 🍽️

## Unit 7: Get Dressed
sweater 🧶
skirt 👗
shorts 🩳
trousers 👖
jacket 🧥
socks 🧦
jeans 👖
shoes 👟
baseball cap 🧢
T-shirt 👕

## Unit 8: The Robot
arm 💪
hand ✋
knee 🦵
fingers 🖐️
leg 🦵
foot 🦶
toes 🦶
head 🙂

## Unit 9: At The Beach
paint a picture 🎨
listen to music 🎧
catch a fish 🎣
take a photo 📷
eat ice cream 🍦
play the guitar 🎸
read a book 📖
make a sandcastle 🏰
look for shells 🐚
`},
  sm2: { name: "Super Minds 2", text: `
## Welcome: Back To School
bookcase 📚
wall 🧱
board 👩‍🏫
clock 🕰️
door 🚪
cupboard 🗄️
window 🪟
chair 🪑
crayon 🖍️
floor 🟫
ten 🔟
twenty 2️⃣0️⃣
thirty 3️⃣0️⃣
forty 4️⃣0️⃣
fifty 5️⃣0️⃣
sixty 6️⃣0️⃣
seventy 7️⃣0️⃣
eighty 8️⃣0️⃣
ninety 9️⃣0️⃣
one hundred 💯

## Unit 1: My Day
get up 🛌
get dressed 👕
have breakfast 🥣
brush your teeth 🪥
go to school 🏫
have lunch 🥪
play in the park 🛝
have dinner 🍽️
go to bed 🛏️
one o'clock 🕐
two o'clock 🕑
three o'clock 🕒
four o'clock 🕓
five o'clock 🕔
six o'clock 🕕
seven o'clock 🕖
eight o'clock 🕗
nine o'clock 🕘
ten o'clock 🕙
eleven o'clock 🕚
twelve o'clock 🕛

## Unit 2: The Zoo
polar bear 🐻‍❄️
bear 🐻
zebra 🦓
crocodile 🐊
hippo 🦛
tiger 🐯
parrot 🦜
monkey 🐒
snake 🐍

## Unit 3: Where We Live
train station 🚉
hospital 🏥
cinema 🎬
playground 🛝
cafe ☕
shop 🏪
street 🛣️
bus stop 🚏
park 🌳
school 🏫
swimming pool 🏊

## Unit 4: The Market
tomatoes 🍅
beans 🫘
greens 🥬
potatoes 🥔
kiwis 🥝
lemons 🍋
bread 🍞
mangoes 🥭
grapes 🍇
eggs 🥚
watermelons 🍉

## Unit 5: My Bedroom
poster 🖼️
wardrobe 🚪
mirror 🪞
armchair 💺
lamp 💡
bed 🛏️
table 🍽️
sofa 🛋️
rug 🟥

## Unit 6: People
eyes 👀
face 🙂
glasses 👓
hair 💇
cheeks 😊
ears 👂
nose 👃
tears 😢
chin 🧔
mouth 👄
happy 😀
sad 😞
angry 😠
tired 😴
scared 😱
excited 🤩
January 🗓️
February 🗓️
March 🗓️
April 🗓️
May 🗓️
June 🗓️
July 🗓️
August 🗓️
September 🗓️
October 🗓️
November 🗓️
December 🗓️

## Unit 7: Off We Go!
helicopter 🚁
ship 🚢
lorry 🚚
boat ⛵
scooter 🛴
skateboard 🛹
motorbike 🏍️
taxi 🚕
bus 🚌

## Unit 8: Sports Club
badminton 🏸
table tennis 🏓
tennis 🎾
basketball 🏀
baseball ⚾
volleyball 🏐
swimming 🏊
football ⚽
hockey 🏑
athletics 🏃

## Unit 9: Holiday Plans
read a comic 📖
go hiking 🥾
visit cousins 👫
help in the garden 🌻
take riding lessons 🐴
build a tree house 🌳
keep a scrapbook 📒
learn to swim 🏊
go camping ⛺
`},
  sm3: { name: "Super Minds 3", text: `
## Welcome: Meet The Explorers
upstairs ⬆️
downstairs ⬇️
cellar 🕯️
twenty-one 2️⃣1️⃣
twenty-two 2️⃣2️⃣
twenty-three 2️⃣3️⃣
twenty-four 2️⃣4️⃣
twenty-five 2️⃣5️⃣
twenty-six 2️⃣6️⃣
twenty-seven 2️⃣7️⃣
twenty-eight 2️⃣8️⃣
twenty-nine 2️⃣9️⃣
thirty 3️⃣0️⃣
thirty-one 3️⃣1️⃣
thirty-two 3️⃣2️⃣
thirty-three 3️⃣3️⃣
thirty-four 3️⃣4️⃣
thirty-five 3️⃣5️⃣
thirty-six 3️⃣6️⃣
thirty-seven 3️⃣7️⃣
thirty-eight 3️⃣8️⃣
thirty-nine 3️⃣9️⃣
forty 4️⃣0️⃣
forty-one 4️⃣1️⃣
forty-two 4️⃣2️⃣
forty-three 4️⃣3️⃣
forty-four 4️⃣4️⃣
forty-five 4️⃣5️⃣
forty-six 4️⃣6️⃣
forty-seven 4️⃣7️⃣
forty-eight 4️⃣8️⃣
forty-nine 4️⃣9️⃣
fifty 5️⃣0️⃣
fifty-one 5️⃣1️⃣
fifty-two 5️⃣2️⃣
fifty-three 5️⃣3️⃣
fifty-four 5️⃣4️⃣
fifty-five 5️⃣5️⃣
fifty-six 5️⃣6️⃣
fifty-seven 5️⃣7️⃣
fifty-eight 5️⃣8️⃣
fifty-nine 5️⃣9️⃣
sixty 6️⃣0️⃣
sixty-one 6️⃣1️⃣
sixty-two 6️⃣2️⃣
sixty-three 6️⃣3️⃣
sixty-four 6️⃣4️⃣
sixty-five 6️⃣5️⃣
sixty-six 6️⃣6️⃣
sixty-seven 6️⃣7️⃣
sixty-eight 6️⃣8️⃣
sixty-nine 6️⃣9️⃣
seventy 7️⃣0️⃣
seventy-one 7️⃣1️⃣
seventy-two 7️⃣2️⃣
seventy-three 7️⃣3️⃣
seventy-four 7️⃣4️⃣
seventy-five 7️⃣5️⃣
seventy-six 7️⃣6️⃣
seventy-seven 7️⃣7️⃣
seventy-eight 7️⃣8️⃣
seventy-nine 7️⃣9️⃣
eighty 8️⃣0️⃣
eighty-one 8️⃣1️⃣
eighty-two 8️⃣2️⃣
eighty-three 8️⃣3️⃣
eighty-four 8️⃣4️⃣
eighty-five 8️⃣5️⃣
eighty-six 8️⃣6️⃣
eighty-seven 8️⃣7️⃣
eighty-eight 8️⃣8️⃣
eighty-nine 8️⃣9️⃣
ninety 9️⃣0️⃣
ninety-one 9️⃣1️⃣
ninety-two 9️⃣2️⃣
ninety-three 9️⃣3️⃣
ninety-four 9️⃣4️⃣
ninety-five 9️⃣5️⃣
ninety-six 9️⃣6️⃣
ninety-seven 9️⃣7️⃣
ninety-eight 9️⃣8️⃣
ninety-nine 9️⃣9️⃣
one hundred 💯

## Unit 1: Our School
English 🇬🇧
Maths ➗
Geography 🌍
Science 🔬
I.T. 💻
Music 🎵
Art 🎨
P.E. 🤸
History 🏛️

## Unit 2: The Picnic
apple juice 🧃
cheese 🧀
lemonade 🍋
salad 🥗
rolls 🥖
soup 🍲
vegetables 🥦
water 💧

## Unit 3: Daily Tasks
wash up 🍽️
tidy up 🧹
sweep 🧹
cook 🍳
feed the dog 🐕
dry the dishes 🍽️
do the shopping 🛒
take the dog for a walk 🦮
one o'clock 🕐
two o'clock 🕑
three o'clock 🕒
four o'clock 🕓
five o'clock 🕔
six o'clock 🕕
seven o'clock 🕖
eight o'clock 🕗
nine o'clock 🕘
ten o'clock 🕙
eleven o'clock 🕚
twelve o'clock 🕛
quarter past one 🕐
half past one 🕜
quarter to two 🕑
quarter past two 🕑
half past two 🕝
quarter to three 🕒
quarter past three 🕒
half past three 🕞
quarter to four 🕓
quarter past four 🕓
half past four 🕟
quarter to five 🕔
quarter past five 🕔
half past five 🕠
quarter to six 🕕
quarter past six 🕕
half past six 🕡
quarter to seven 🕖
quarter past seven 🕖
half past seven 🕢
quarter to eight 🕗
quarter past eight 🕗
half past eight 🕣
quarter to nine 🕘
quarter past nine 🕘
half past nine 🕤
quarter to ten 🕙
quarter past ten 🕙
half past ten 🕥
quarter to eleven 🕚
quarter past eleven 🕚
half past eleven 🕦
quarter to twelve 🕛
quarter past twelve 🕛
half past twelve 🕧
quarter to one 🕐

## Unit 4: Around Town
map 🗺️
bank 🏦
bus station 🚏
tower 🗼
library 📚
market square 🏬
sports centre 🏟️
supermarket 🛒
funfair 🎡
car park 🅿️

## Unit 5: Under The Sea
seahorse 🐠
dolphin 🐬
seal 🦭
shell 🐚
octopus 🐙
anchor ⚓
starfish ⭐
turtle 🐢

## Unit 6: Gadgets
games console 🎮
electric fan 🌀
walkie-talkie 📻
electric toothbrush 🪥
tablet 📱
torch 🔦
mobile phone 📱
lift 🛗
laptop 💻

## Unit 7: In The Hospital
doctor 👨‍⚕️
nurse 👩‍⚕️
cold 🤧
cough 😷
headache 🤕
toothache 🦷
earache 👂
stomach-ache 🤢

## Unit 8: Around The World
Mexico 🇲🇽
Spain 🇪🇸
Argentina 🇦🇷
Egypt 🇪🇬
Chile 🇨🇱
China 🇨🇳
Turkey 🇹🇷
Brazil 🇧🇷
Australia 🇦🇺
India 🇮🇳

## Unit 9: Holiday Plans
thunderstorm ⛈️
lightning ⚡
rain 🌧️
wind 💨
cloud ☁️
fog 🌫️
umbrella ☂️
raincoat 🧥
boots 🥾
`},
  sm4: { name: "Super Minds 4", text: `
## Welcome: Well Done, Ben And Lucy!
big wheel 🎡
rollercoaster 🎢
roundabout 🎠
mayor 🎩
dodgem cars 🚗
microphone 🎤
band 🎸
photographer 📸
journalist 📰

## Unit 1: In The Museum
queen 👸
knight 🛡️
crown 👑
helmet ⛑️
necklace 📿
bracelet 💍
belt 👖
shield 🛡️
bow and arrow 🏹
sword ⚔️

## Unit 2: The World Around Us
mountain ⛰️
forest 🌲
village 🏘️
lake 🏞️
island 🏝️
field 🌾
river 🏞️
path 🥾

## Unit 3: Danger!
fire 🔥
flood 🌊
emergency services 🚨
police car 🚓
police officer 👮
fire engine 🚒
firefighter 👨‍🚒
ambulance 🚑
paramedic 🧑‍⚕️

## Unit 4: Two Return Tickets
station 🚉
platform 🚉
escalator 🛗
ticket office 🎫
train driver 🚆
stairs 🪜
rucksack 🎒
suitcase 🧳
a cup of coffee ☕
a cup of tea 🍵

## Unit 5: Police!
dark 🟫
blonde 👱
fair 👱‍♀️
moustache 👨
curly 👩‍🦱
beard 🧔
scar 🩹
straight 💇

## Unit 6: Mythical Beasts
tail 🐒
horn 🦄
back 🐉
scales 🐉
wing 🪽
neck 🦒
feathers 🪶
tongue 👅

## Unit 7: Orchestra Practice
tambourine 🪘
triangle 🔺
trumpet 🎺
trombone 🎺
drums 🥁
harp 🎵
saxophone 🎷
keyboard 🎹
violin 🎻

## Unit 8: In The Planetarium
planet 🪐
rocket 🚀
UFO 🛸
star ⭐
comet ☄️
telescope 🔭
astronaut 👩‍🚀
moon 🌙
space station 🛰️

## Unit 9: At The Campsite
sail a boat ⛵
swing on a rope 🪢
dive into the water 🤿
row a boat 🚣
dry your clothes 👕
make a raft 🪵
put up a tent ⛺
make a fire 🔥
collect wood 🪵
`},
  sm5: { name: "Super Minds 5", text: `
## Welcome: The Science Lesson
experiment 🧪
scientist 👩‍🔬
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
scientist 👩‍🔬
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
astronaut 👨‍🚀
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
Arctic 🧊
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
  adj: "big small new old long short beautiful ugly happy sad angry tired scared excited curly straight blond blonde dark fair bald sunny cloudy rainy windy snowy foggy stormy delicious poisonous extinct prehistoric electric",
  colour: "red blue green yellow orange purple black white brown pink",
  prep: "in on under upstairs downstairs",
  number: "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million first second third",
  day: "Monday Tuesday Wednesday Thursday Friday Saturday Sunday",
  month: "January February March April May June July August September October November December",
  greeting: "hello goodbye",
  country: "Spain France Italy Germany Brazil China Japan Mexico Australia Egypt Argentina Chile Turkey India",
};
const WORD_TYPE_LABELS = {
  noun: "🧸 Noun · thing, person or place", verb: "🏃 Verb · action", adj: "🎨 Adjective · describing word",
  colour: "🌈 Colour", time: "🕐 Time", prep: "📍 Preposition · where it is", number: "🔢 Number", day: "📅 Day of the week", month: "🗓️ Month", greeting: "👋 Greeting", country: "🌍 Country",
};
const WORD_TYPES = {};
Object.entries(WORD_TYPE_LISTS).forEach(([t, s]) => s.split(" ").forEach(w => { WORD_TYPES[w] = t; }));
// actions of more than one word
("paint a picture|listen to music|catch a fish|take a photo|eat ice cream|play the guitar|read a book|make a sandcastle|look for shells|" +
 "get up|get dressed|have breakfast|brush your teeth|go to school|have lunch|play in the park|have dinner|go to bed|" +
 "read a comic|go hiking|visit cousins|help in the garden|take riding lessons|build a tree house|keep a scrapbook|learn to swim|go camping").split("|").forEach(w => { WORD_TYPES[w] = "verb"; });
WORD_TYPES["one hundred"] = "number";
"wash up|tidy up|feed the dog|dry the dishes|do the shopping|take the dog for a walk|sail a boat|swing on a rope|dive into the water|row a boat|dry your clothes|make a raft|put up a tent|make a fire|collect wood".split("|").forEach(w => { WORD_TYPES[w] = "verb"; });
// twenty-one … ninety-nine, and the times (quarter past one, half past one, quarter to two…)
"twenty thirty forty fifty sixty seventy eighty ninety".split(" ").forEach(t => "one two three four five six seven eight nine".split(" ").forEach(o => { WORD_TYPES[t + "-" + o] = "number"; }));
"one two three four five six seven eight nine ten eleven twelve".split(" ").forEach(n => ["quarter past ", "half past ", "quarter to "].forEach(p => { WORD_TYPES[p + n] = "time"; }));
"one two three four five six seven eight nine ten eleven twelve".split(" ").forEach(n => { WORD_TYPES[n + " o'clock"] = "time"; });
// "orange" is a colour in Starter (🟠) but the fruit in the food unit (🍊)
function wordType(word, pic){ if (word === "orange" && pic && pic.includes("🍊")) return "noun"; if (word === "cook" && pic === "🍳") return "verb"; return WORD_TYPES[word] || "noun"; }
function wordTypeLabel(word, pic){ return WORD_TYPE_LABELS[wordType(word, pic)]; }
