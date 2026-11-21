// Words that must never be accepted in the classroom word games: slurs, insults and vulgar or sexual words.
// The ENABLE dictionary is a general Scrabble list, so it still contains them. Removed from DICT after it is built.
const BLOCKED_WORDS = ("spic spics spick spicks spik spiks kikes chink chinks chinky coon coons gook gooks gooky wop wops dago dagos dagoes " +
  "niggers wetback wetbacks gringo gringos honky honkey honkeys honkie honkies kraut krauts redskin redskins darkie darkies yid yids hebe hebes " +
  "gyp gyps gypped gypping gypper gyppers retard retards retarded retarder retarders spazzes queer queers queered queerer queerest queering queerish queerly queerness " +
  "homos homosex homosexes cripple crippled crippler cripplers cripples faggot faggots faggoted faggoting faggotry faggoty faggy fagged fagging dyke dykes dyked dykey " +
  "cunt cunts twats twattle twattled twattles twattling fuckers fuckup fuckups shit shitted shitting shitty shittier shittiest shithead shitheads " +
  "bitched bitchery bitchier bitchiest bitchily bitching bitchy bastard bastards bastardly bastardy bugger buggered buggeries buggering buggers buggery " +
  "whored whoredom whoredoms whoreson whoresons whoring whorish slut sluts sluttier sluttiest sluttish slutty pussy pussies prick pricks tosser tossers " +
  "pisser pissers pisses pissing pissant pissants dildo dildos dildoe dildoes penises scrotum scrotums scrotal scrota vagina vaginas vaginae vaginal vaginally " +
  "clitoris clitoral clitoric testicle testicles porn porns porny pornos pornier porniest rapist rapists molest molested molester molesters molesting molests " +
  "crap craps crapped crapper crappers crappy crappier crappiest crapping jizz cumshaw cumshaws snatch snatcher snatchers sexpot sexpots sexy sexier sexiest sexily sexiness " +
  "damn damned damns damning damnit nazi nazis").split(" ");
