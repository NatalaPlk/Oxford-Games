// The Monster Rush monsters (pixel-art pictures in ./monsters/).
// monsterSVG(type, mood) returns the HTML for a monster — mood: happy | joy | sad
const MONSTERS = {
  gobo:   { name: "Olly",  img: "olly",  color: "#4caf2f" },
  blinky: { name: "Fran",  img: "fran",  color: "#2f8fd8" },
  plum:   { name: "Xia",   img: "xia",   color: "#9b51e0" },
  tango:  { name: "Roo",   img: "roo",   color: "#ef7d1a" },
  sunny:  { name: "Sunny", img: "sunny", color: "#e5a800" },
  didi:   { name: "Didi",  img: "didi",  color: "#8b8f9c" },
};
const MONSTER_ORDER = ["gobo", "blinky", "plum", "tango", "sunny", "didi"];
const MONSTER_DIR = new URL("monsters/", document.currentScript.src).href;

document.head.insertAdjacentHTML("beforeend", `<style>
  .mon-art{position:relative;display:block;width:100%}
  .mon-art img{display:block;width:100%;height:auto;transform-origin:bottom center}
  .mon-art.joy img{animation:monJoy .45s ease-in-out infinite alternate}
  .mon-art.sad img{filter:saturate(.5) brightness(.93);transform:rotate(-5deg) translateY(3%) scaleY(.96)}
  .mon-art i{position:absolute;font-style:normal;pointer-events:none;line-height:1}
  .mon-art .tear{left:58%;top:30%;font-size:clamp(10px,22cqw,26px);animation:monTear 1.2s ease-in infinite}
  .mon-art .spark{font-size:clamp(10px,20cqw,26px);animation:monSpark .9s ease-in-out infinite alternate}
  .mon-art .spark.a{left:-4%;top:6%} .mon-art .spark.b{right:-4%;top:0;animation-delay:-.45s}
  .mon-art{container-type:inline-size}
  @keyframes monJoy{from{transform:translateY(0) rotate(-4deg)}to{transform:translateY(-8%) rotate(4deg)}}
  @keyframes monTear{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(160%);opacity:0}}
  @keyframes monSpark{from{transform:scale(.6) rotate(0);opacity:.5}to{transform:scale(1.1) rotate(20deg);opacity:1}}
</style>`);

function monsterSVG(type, mood = "happy"){
  const m = MONSTERS[type] || MONSTERS.gobo;
  const extra = mood === "sad" ? `<i class="tear">💧</i>` : mood === "joy" ? `<i class="spark a">✨</i><i class="spark b">✨</i>` : "";
  return `<span class="mon-art ${mood}"><img src="${MONSTER_DIR}${m.img}.png" alt="${m.name}" draggable="false">${extra}</span>`;
}
