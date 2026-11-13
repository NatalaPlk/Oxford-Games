// The Monster Rush monsters (pixel-art pictures in ./monsters/).
// monsterSVG(type, mood) returns the HTML for a monster — mood: happy | joy | sad
const MONSTERS = {
  gobo:   { name: "Olly",  img: "olly",  color: "#4caf2f", hat: { x: 50, y: 20, w: 62, r: -4 } },
  blinky: { name: "Fran",  img: "fran",  color: "#2f8fd8", hat: { x: 54, y: 28, w: 56, r: 6 } },
  plum:   { name: "Xia",   img: "xia",   color: "#9b51e0", hat: { x: 50, y: 41, w: 52, r: -5 } },
  tango:  { name: "Roo",   img: "roo",   color: "#ef7d1a", hat: { x: 47, y: 21, w: 52, r: -6 } },
  sunny:  { name: "Sunny", img: "sunny", color: "#e5a800", hat: { x: 50, y: 31, w: 42, r: 5 } },
  didi:   { name: "Didi",  img: "didi",  color: "#8b8f9c", hat: { x: 40, y: 27, w: 46, r: -8 } },
};
const MONSTER_ORDER = ["gobo", "blinky", "plum", "tango", "sunny", "didi"];
const MONSTER_DIR = new URL("monsters/", document.currentScript.src).href;

document.head.insertAdjacentHTML("beforeend", `<style>
  .mon-art{position:relative;display:block;width:100%}
  .mon-art .mbody{position:relative;display:block;transform-origin:bottom center}
  .mon-art img{display:block;width:100%;height:auto}
  .mon-art.joy .mbody{animation:monJoy .45s ease-in-out infinite alternate}
  .mon-art.sad .mbody{filter:saturate(.5) brightness(.93);transform:rotate(-5deg) translateY(3%) scaleY(.96)}
  .mon-art i{position:absolute;font-style:normal;pointer-events:none;line-height:1}
  .mon-art .tear{left:58%;top:30%;font-size:clamp(10px,22cqw,26px);animation:monTear 1.2s ease-in infinite}
  .mon-art .spark{font-size:clamp(10px,20cqw,26px);animation:monSpark .9s ease-in-out infinite alternate}
  .mon-art .spark.a{left:-4%;top:6%} .mon-art .spark.b{right:-4%;top:0;animation-delay:-.45s}
  .mon-art{container-type:inline-size}
  .mon-art .hat{position:absolute;transform:translate(-50%,-100%) rotate(var(--r));transform-origin:50% 100%;pointer-events:none}
  .mon-art .hat svg{display:block;width:100%;height:auto;overflow:visible}
  @keyframes monJoy{from{transform:translateY(0) rotate(-4deg)}to{transform:translateY(-8%) rotate(4deg)}}
  @keyframes monTear{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(160%);opacity:0}}
  @keyframes monSpark{from{transform:scale(.6) rotate(0);opacity:.5}to{transform:scale(1.1) rotate(20deg);opacity:1}}
</style>`);

// a train driver's cap (Word Express)
const TRAIN_HAT = '<svg viewBox="0 0 100 64"><path d="M14 42 Q10 10 50 6 Q90 10 86 42 Z" fill="#1f2b78" stroke="#0b0957" stroke-width="4" stroke-linejoin="round"/>' +
  '<path d="M26 16 Q50 8 74 16" fill="none" stroke="#fff" stroke-width="3" opacity=".35" stroke-linecap="round"/>' +
  '<rect x="13" y="32" width="74" height="12" rx="3" fill="#c8323c" stroke="#0b0957" stroke-width="4"/>' +
  '<circle cx="50" cy="24" r="7" fill="#ffd23f" stroke="#0b0957" stroke-width="3"/>' +
  '<path d="M8 44 Q50 64 98 46 Q94 40 86 42 Q50 52 14 42 Z" fill="#0b0957" stroke="#0b0957" stroke-width="3" stroke-linejoin="round"/></svg>';

function monsterSVG(type, mood = "happy", opts = {}){
  const m = MONSTERS[type] || MONSTERS.gobo;
  const extra = mood === "sad" ? `<i class="tear">💧</i>` : mood === "joy" ? `<i class="spark a">✨</i><i class="spark b">✨</i>` : "";
  const h = m.hat || { x: 50, y: 20, w: 45, r: 0 };
  const hat = opts.hat ? `<span class="hat" style="left:${h.x}%;top:${h.y}%;width:${h.w}%;--r:${h.r}deg">${TRAIN_HAT}</span>` : "";
  return `<span class="mon-art ${mood}"><span class="mbody"><img src="${MONSTER_DIR}${m.img}.png" alt="${m.name}" draggable="false">${hat}</span>${extra}</span>`;
}
