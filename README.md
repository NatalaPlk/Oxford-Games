# Oxford Games

Classroom games for English lessons. Home page: https://natalaplk.github.io/Oxford-Games/

## Bid War

A classroom team game for English lessons based on the grammar of the **Prepare** levels 1–8.

Teams start with coins and bid on sentences they think are correct:

- **Correct sentence** → the team wins 1 ⭐ and pays its bid.
- **Incorrect sentence** → the team loses its bid and wins no point (the correction is shown).
- The game ends when a team reaches the winning points (default 5) or a team runs out of money. There are always at least 3 lots: a team that spends everything on lot 1 or 2 is out, and the other teams keep playing.

Features: 1–4 teams (renameable, default colour names), choose the Prepare level and grammar topics, 3 correct : 4 incorrect sentences in random order, undo, and an editor to add your own sentences (saved in the browser).

Play: open `bid-war/index.html` in any browser, or use the GitHub Pages link: https://natalaplk.github.io/Oxford-Games/bid-war/

## Spelling Bee

A team spelling game for children aged 6–12 using vocabulary from **Super Minds** Starter to 6 (by unit).

- The app says the word aloud (🔊 Listen / 🐢 Slowly) and shows a picture and one tile per letter.
- The team spells it out loud while the teacher types the letters (❓ = a letter you didn't hear); the app checks it. Or the teacher clicks ✔ Correct / ✘ Wrong.
- Correct = 🍯🍯 2 points (🍯 1 if the team used the first-letter hint). If a team gets it wrong, another team can steal it for 🍯 1.
- Pictures are real photos (shared with Monster Rush) and each word shows its type (noun, verb, adjective…).
- Each team plays as a Monster Rush monster (click it to change); it jumps for joy when the team gets a word right and gets sad when they get it wrong.
- Options: words per team, timer, show picture, show number of letters, stealing on/off, word length (e.g. only 3-letter words) and only words with a picture. Words can be edited in the app.

Play: https://natalaplk.github.io/Oxford-Games/spelling-bee/

## Monster Rush

A picture-and-word race for children aged 6–12 with the **Super Minds** Starter–6 vocabulary.

- Flashcards use real photos (free licences from Wikimedia Commons / Wikipedia, see `shared/photos/credits.json`); words without a clear photo use a drawing.
- 1–4 teams, each with its own monster: green Olly, blue Fran, purple Xia, orange Roo, yellow Sunny or grey Didi (pixel-art pictures in `monster-rush/monsters/`).
- Choose the number of rounds, pictures per turn and the time per turn (e.g. 20–30 s).
- On each turn a picture appears with three similar words (same unit and same kind of word, e.g. *leg · hand · hair*); the team clicks the right one (or keys 1 / 2 / 3).
- Right: the monster jumps forward one square. Wrong: the monster is sad and the right word lights up green.
- The monster furthest along the track at the end wins.

Play: https://natalaplk.github.io/Oxford-Games/monster-rush/

## Word Express

A word-building race for all levels. Teams get a set of letters (6–9) and make as many English words as they can before the time runs out.

- Every set of letters can make at least 20 words that students know (Super Minds and Prepare vocabulary first, then everyday English). Words are checked against the ENABLE word list (public domain); the teacher can accept a real word that isn't in it.
- 1–4 teams, each driving a train with a monster driver in a train cap. Choose turns per team (default 2) and time per turn (default 30 s).
- Right word: it turns into coal, flies into the furnace and the team's train moves forward. Wrong word: it crumbles into steam.
- After each turn the game shows other words the team could have made. The train furthest along wins.

Play: https://natalaplk.github.io/Oxford-Games/word-express/

## Hungry Hungry Caterpillar

A word-chain game for all levels. The caterpillar starts very small, with one letter. Each team feeds it a word that starts with the last letter of the word before (wolf → family → yellow…), and it grows one segment per letter.

- 1–4 teams (or the whole class together, trying to beat the record). Points = letters in the word.
- Hard letter such as X or Q? The teacher presses **New letter** to get a random one.
- Words are checked against the ENABLE word list (public domain). If a word isn't in it, the teacher decides: real word or wrong.
- The game ends when a team gives a wrong word or one that was already used: the caterpillar eats it, gets sick and… makes a stinky poop. That team also loses double the points of the bad word (a 4-letter word costs 8 points), so a mistake can cost the win.

Play: https://natalaplk.github.io/Oxford-Games/hungry-caterpillar/

## Word Heist

A competitive quiz for teenagers (12–18), levels A1 to C1. Crews crack vaults by answering grammar and vocabulary questions, then pick a briefcase of loot. The richest crew wins.

- 2–4 crews on one screen, each with its own character (fox, wolf, owl, raccoon or lynx). The teacher sets the class level, the questions per crew and the time to answer.
- Each turn the crew chooses its vault: one level down (small loot), the class level, or one level up (big loot).
- A right answer opens the vault and the crew picks one of three briefcases: cash, a jackpot, double your loot, steal 25% from a rival, swap loot with a rival, or an alarm that costs 25%.
- A wrong answer (or no answer in time) means no loot; the right answer is shown.
- Three right answers in a row give ×1.5 on cash prizes. In the final round all loot is doubled.
- 160 questions (32 per level): grammar, vocabulary, phrasal verbs and idioms, and word formation. They are in `word-heist/questions.js`, one line per question, so you can add your own.

Play: https://natalaplk.github.io/Oxford-Games/word-heist/

## Hot Seat

A speaking game for teenagers (12–18), levels A1 to C1. One player sits in the "hot seat" with their back to the screen. Their team explains the word in English without saying the forbidden words, and the player guesses as many as possible before the clock stops.

- 2–4 teams on one screen. The teacher sets the level, the cards, the turns per team and the seconds per turn.
- Three packs of cards: the level's vocabulary, famous people and characters that Spanish teenagers know (SpongeBob, Messi, Rosalía, Spider-Man…), or both mixed.
- The teacher (or a student) presses **Got it!** (+1), **Pass** (up to 3 per turn) or **Forbidden!** (−1, when somebody says a forbidden word). The other teams act as judges.
- **Pause** hides the word and stops the clock. **Undo** takes back the last button.
- About 200 vocabulary cards (40 per level) and 65 famous cards. They are in `hot-seat/words.js`, one line per card, so you can add your own.

Play: https://natalaplk.github.io/Oxford-Games/hot-seat/

## Treasure Mountain

An adventure game for one or two heroes (players or teams), with levels from Super Minds Starter to 6. The heroes climb a mountain, answer the goblins, choose the right path and fight a dragon to win the treasure.

- Each hero chooses a monster and has 3 lives.
- The teacher chooses how many goblins guard the path (3 to 8: a shorter or longer game). They are chosen from six (Grimble, Tally, Madame Quill, Brutus, Winky and Zorbo) and placed in a random order every game. Their pictures are in `treasure-mountain/goblins/` (g = whole goblin, a = face for the map).
- Each goblin asks something: a word from the level (with its picture), a spelling puzzle, grammar, a riddle, or maths with the answer written in letters ("two times two minus two" → "two").
- Right answer: the goblin lets the hero pass. Wrong answer: the hero loses a life.
- Then the hero chooses left or right. It is a lottery: nothing says which path is safe. The wrong path is a rockslide, back to the start. Each hero has its own paths (another hero can't copy them), and they stay the same for the whole game, so the heroes can remember them.
- At the top, the dragon: a flashcard shows a picture and ten words float around the screen. Click the right word to throw the flashcard at the dragon. A wrong click changes that word for a new one and heats up the fire bar; when the bar is full, the dragon burns the hero (one life).
- The dragon needs 8 hits. With two heroes it keeps its wounds, so they take turns to finish it.
- Starter and level 1 need no writing: the heroes choose from three answers. From level 2 they type.
- The vocabulary comes from `shared/words.js`; grammar questions and riddles are in `treasure-mountain/riddles.js`.

Play: https://natalaplk.github.io/Oxford-Games/treasure-mountain/

## Adding words to the word games

Word Express and Hungry Hungry Caterpillar check words against the ENABLE list plus `shared/extra-words.js` (British spellings, modern words, days, months, countries). To accept a new word, add it to that file.
