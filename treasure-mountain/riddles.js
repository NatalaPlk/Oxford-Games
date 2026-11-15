// Treasure Mountain: what the goblins ask (the vocabulary comes from shared/words.js).
// GRAMMAR: one line per question:  sentence with ___|right answer|wrong|wrong   (the right answer is FIRST)
// RIDDLES: one line per riddle:    riddle|answer    (several accepted answers: answer/other answer)
// To add a question, add a line.
const TM_GRAMMAR = {
sms: `
I ___ six years old.|am|is|are
It ___ a cat.|is|am|are
This is ___ apple.|an|a|two
I can ___.|jump|jumps|jumping
Look! Two ___.|dogs|dog|a dog
What colour is it? It's ___.|blue|five|dog
How many books? ___ books.|Three|Red|Big
I ___ like spiders.|don't|not|no
`,
sm1: `
She ___ got a doll.|has|have|is
There ___ two cats.|are|is|am
He ___ swim.|can|cans|is
I ___ pizza.|like|likes|am like
The ball is ___ the table.|under|at|to
___ are my shoes.|These|This|It
Do you like milk? Yes, I ___.|do|am|like
___ you got a pet?|Have|Do|Are
`,
sm2: `
He ___ to school at eight.|goes|go|going
I'm ___ a book now.|reading|read|reads
Are there ___ apples?|any|some|a
She ___ like fish.|doesn't|don't|isn't
What ___ you doing?|are|do|is
We get up ___ seven o'clock.|at|in|on
I'd ___ some juice, please.|like|likes|want
Whose bag is this? It's ___.|mine|my|me
`,
sm3: `
Yesterday I ___ to the park.|went|go|goed
A horse is ___ than a dog.|bigger|big|more big
We ___ at home last night.|were|was|are
You ___ be quiet in the library.|must|can't|are
She ___ TV yesterday.|watched|watches|watch
This is the ___ film in the world.|best|goodest|better
___ you see the lion? Yes, I did.|Did|Do|Were
I like ___ football.|playing|play|plays
`,
sm4: `
I'm ___ to visit my aunt tomorrow.|going|go|will
We ___ go to school on Sunday.|don't have to|mustn't to|haven't
He was ___ when the phone rang.|sleeping|sleep|slept
She runs very ___.|quickly|quick|quicker
I ___ swim when I was four.|could|can|am able
It's the ___ expensive toy in the shop.|most|more|much
They ___ like the film. It was boring.|didn't|don't|weren't
There isn't ___ milk.|much|many|a
`,
sm5: `
I've ___ been to London.|never|ever|yet
Have you finished ___?|yet|never|ago
If it rains, we ___ stay at home.|will|would|are
You ___ see a doctor.|should|shall to|must to
That's the man ___ lives next door.|who|which|what
I ___ to have a bike, but now I've got a scooter.|used|use|was
She has lived here ___ 2020.|since|for|from
I think it ___ snow tomorrow.|will|is|going
`,
sm6: `
The pyramids ___ built a long time ago.|were|was|did
If I ___ a bird, I would fly.|were|am|will be
She said she ___ tired.|was|is|be
You like pizza, ___ you?|don't|do|aren't
I've been ___ for an hour.|waiting|wait|waited
This song ___ by a famous singer.|was written|wrote|is writing
I wish I ___ a dragon!|had|have|will have
He asked me where I ___.|lived|do live|living
`
};
const TM_RIDDLES = {
// Starter, 1 and 2
easy: `
I am yellow. Monkeys love me. What am I?|banana
I say "woof". What am I?|dog
I have four legs and a tail. I say "meow". What am I?|cat
I am in the sky. I am hot and yellow. What am I?|sun
You wear us on your feet. What are we?|shoes
I am white. You drink me. I come from a cow. What am I?|milk
I am big and grey. I have a very long nose. What am I?|elephant
You read me. I have pages. What am I?|book
I am red and round. I am a fruit. What am I?|apple
You sleep in me. What am I?|bed
I have two wheels. You ride me. What am I?|bike/bicycle
I can fly. I have wings and I sing. What am I?|bird
`,
// 3 and 4
mid: `
I have hands but I can't clap. What am I?|clock
I have teeth but I can't eat. What am I?|comb
I'm full of holes but I hold water. What am I?|sponge
I have a neck but no head. What am I?|bottle
What has four legs but can't walk?|table/chair
I go up when the rain comes down. What am I?|umbrella
What has keys but can't open doors?|piano/keyboard
I'm tall when I'm young and short when I'm old. What am I?|candle
What gets wet while it dries?|towel
What has one eye but can't see?|needle
You can catch me but you can't throw me. What am I?|cold
What comes down but never goes up?|rain
`,
// 5 and 6
hard: `
What belongs to you, but other people use it more than you do?|name/your name/my name
The more of me there is, the less you see. What am I?|darkness/dark/fog
What can travel around the world while staying in a corner?|stamp
What has cities but no houses, forests but no trees, and water but no fish?|map
What gets bigger the more you take away?|hole
I speak without a mouth and hear without ears. What am I?|echo
What can you break without touching it?|promise
What has to be broken before you can use it?|egg
What goes up but never comes down?|age/your age
What begins with T, ends with T and has T in it?|teapot
What is always in front of you but can't be seen?|future/the future
`
};
