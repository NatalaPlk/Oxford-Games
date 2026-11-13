// Four cute fluffy monsters for Monster Rush, drawn as SVG so they can change mood.
// monsterSVG(type, mood) — type: gobo | plum | blinky | tango; mood: happy | joy | sad
const MONSTERS = {
  gobo:   { name: "Olly", c: "#86d45a", c2: "#4fa52c", hi: "#c4f09c", belly: "#d9f7b8", o: "#1f5a1a", color: "#4caf2f" },
  plum:   { name: "Xia",  c: "#c58cf0", c2: "#9156cf", hi: "#ecd0ff", belly: "#f1dcff", o: "#4b2275", color: "#9b51e0" },
  blinky: { name: "Fran", c: "#6cc6f5", c2: "#3592d4", hi: "#c3ecff", belly: "#d6f2ff", o: "#174f80", color: "#2f8fd8" },
  tango:  { name: "Orla", c: "#ffa040", c2: "#f07a14", hi: "#ffd08f", belly: "#ffd9a6", o: "#8a3a05", color: "#ef7d1a" },
};
const MONSTER_ORDER = ["gobo", "plum", "blinky", "tango"];
let _monUid = 0;

function fuzzPath(cx, cy, rx, ry, n, amp, start = -Math.PI / 2){
  const f = v => v.toFixed(1);
  let d = "";
  for (let i = 0; i <= n; i++) {
    const a = start + i * 2 * Math.PI / n, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
    if (!i) { d += `M${f(x)} ${f(y)}`; continue; }
    const m = start + (i - .5) * 2 * Math.PI / n;
    d += ` Q${f(cx + (rx + amp) * Math.cos(m))} ${f(cy + (ry + amp) * Math.sin(m))} ${f(x)} ${f(y)}`;
  }
  return d + "Z";
}

function monsterSVG(type, mood = "happy"){
  const m = MONSTERS[type] || MONSTERS.gobo, o = m.o, id = "mon" + (++_monUid);
  const joy = mood === "joy", sad = mood === "sad";
  const S = (w = 4) => `stroke="${o}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const fill = `url(#${id}g)`, ink = "#24183a";
  // a furry limb: thick outline stroke with the body colour on top
  const tube = (d, w = 15) => `<path d="${d}" fill="none" stroke="${o}" stroke-width="${w + 8}" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="${d}" fill="none" stroke="${m.c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const hand = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${m.c}" ${S(4)}/>`;

  const bodyD = fuzzPath(100, 126, 64, 80, 40, 3.5);
  const defs = `<defs><radialGradient id="${id}g" cx="38%" cy="28%" r="78%"><stop offset="0" stop-color="${m.hi}"/><stop offset=".55" stop-color="${m.c}"/><stop offset="1" stop-color="${m.c2}"/></radialGradient>` +
    `<clipPath id="${id}c"><path d="${bodyD}"/></clipPath></defs>`;

  // --- behind the body: shadow, tail, horns / antennae / ears, hair tuft ---
  let back = `<ellipse cx="100" cy="221" rx="62" ry="6" fill="#000" opacity=".1"/>`;
  back += tube("M138 192 Q176 204 180 180 Q182 162 166 166", 13);
  if (type === "gobo" || type === "tango") {
    const hc = type === "gobo" ? "#5fd9e8" : "#ff6b3d", hs = type === "gobo" ? "#b8f3fa" : "#ffbe72";
    back += `<path d="M64 72 C38 62 34 30 56 14 C66 8 74 16 66 22 C54 34 62 50 88 54 Z" fill="${hc}" ${S()}/>` +
      `<path d="M136 72 C162 62 166 30 144 14 C134 8 126 16 134 22 C146 34 138 50 112 54 Z" fill="${hc}" ${S()}/>` +
      `<path d="M50 40 Q56 54 72 60 M150 40 Q144 54 128 60" fill="none" stroke="${hs}" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (type === "plum") back +=
    `<path d="M84 54 Q78 30 62 20 M116 54 Q122 30 138 20" fill="none" ${S(5)}/>` +
    `<circle cx="60" cy="18" r="10" fill="#ff8fcf" ${S()}/><circle cx="140" cy="18" r="10" fill="#ff8fcf" ${S()}/>` +
    `<circle cx="57" cy="14" r="3.5" fill="#fff"/><circle cx="137" cy="14" r="3.5" fill="#fff"/>`;
  if (type === "blinky") back +=
    `<circle cx="38" cy="98" r="15" fill="${m.c}" ${S()}/><circle cx="162" cy="98" r="15" fill="${m.c}" ${S()}/>` +
    `<circle cx="38" cy="98" r="7" fill="#ffb3c8"/><circle cx="162" cy="98" r="7" fill="#ffb3c8"/>`;
  if (type !== "plum") back += `<path d="M84 58 Q80 34 95 40 Q98 22 108 38 Q120 30 118 58 Z" fill="${type === "blinky" ? m.c2 : m.c}" ${S()}/>`;

  // --- body + belly + fur details (clipped to the body) ---
  let body = `<path d="${bodyD}" fill="${fill}" ${S()}/><g clip-path="url(#${id}c)">`;
  if (type === "tango") body += `<path d="M30 168 L46 156 L62 168 L78 156 L94 168 L110 156 L126 168 L142 156 L158 168 L174 156 L174 184 L158 196 L142 184 L126 196 L110 184 L94 196 L78 184 L62 196 L46 184 L30 196 Z" fill="${m.belly}" opacity=".85"/>`;
  else body += `<ellipse cx="100" cy="176" rx="38" ry="28" fill="${m.belly}" opacity=".85"/>`;
  if (type === "plum") body += `<circle cx="58" cy="90" r="7" fill="${m.c2}" opacity=".55"/><circle cx="146" cy="74" r="6" fill="${m.c2}" opacity=".55"/><circle cx="150" cy="150" r="8" fill="${m.c2}" opacity=".5"/><circle cx="52" cy="160" r="5" fill="${m.c2}" opacity=".5"/>`;
  if (type === "gobo") body += `<circle cx="88" cy="170" r="4" fill="${m.c}" opacity=".7"/><circle cx="110" cy="182" r="5" fill="${m.c}" opacity=".7"/><circle cx="106" cy="164" r="3" fill="${m.c}" opacity=".7"/>`;
  body += `<path d="M48 120 l6 6 l4 -7 M150 128 l-6 6 l-4 -7 M70 72 l5 5 l4 -6" fill="none" stroke="${m.c2}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>`;
  body += `<ellipse cx="74" cy="70" rx="16" ry="9" transform="rotate(-25 74 70)" fill="#fff" opacity=".22"/></g>`;

  // --- feet ---
  const feet = [78, 122].map(x => `<ellipse cx="${x}" cy="208" rx="20" ry="11" fill="${fill}" ${S()}/>` +
    `<path d="M${x - 8} 211 v-5 M${x} 212 v-6 M${x + 8} 211 v-5" stroke="${o}" stroke-width="2.5" stroke-linecap="round"/>`).join("");

  // --- arms (class arm l / arm r are animated by the page CSS) ---
  let arms;
  if (sad) arms = `<g class="arm l">${tube("M50 140 Q32 160 38 184")}${hand(38, 186)}</g><g class="arm r">${tube("M150 140 Q168 160 162 184")}${hand(162, 186)}</g>`;
  else if (joy) arms = `<g class="arm l">${tube("M48 134 Q22 120 26 92")}${hand(26, 88, 12)}</g><g class="arm r">${tube("M152 134 Q178 120 174 92")}${hand(174, 88, 12)}</g>`;
  else arms = `<g class="arm l">${tube("M48 136 Q20 150 40 172")}${hand(42, 172, 10)}</g>` +
    `<g class="arm r">${tube("M152 134 Q178 122 174 96")}${hand(174, 90, 12)}<path d="M167 82 l-2 -6 M174 80 v-7 M181 82 l2 -6" stroke="${o}" stroke-width="4" stroke-linecap="round"/></g>`;

  // --- face ---
  const ey = 94;
  const lashes = (x, y, rx, ry, angs) => angs.map(t => {
    const a = t * Math.PI / 180, px = x + rx * Math.cos(a), py = y - ry * Math.sin(a);
    return `<path d="M${px.toFixed(1)} ${py.toFixed(1)} l${(8 * Math.cos(a)).toFixed(1)} ${(-8 * Math.sin(a)).toFixed(1)}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>`;
  }).join("");
  const eye = (x, y, rx, ry, look = 1) => {
    if (joy) return `<path d="M${x - rx} ${y + 5} Q${x} ${y - ry - 2} ${x + rx} ${y + 5}" fill="none" stroke="${ink}" stroke-width="5.5" stroke-linecap="round"/>`;
    const px = x + look * rx * .18, py = sad ? y + ry * .35 : y + 2, pr = rx * .62;
    return `<g class="eye"><ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${ink}" stroke-width="3.5"/>` +
      `<circle cx="${px}" cy="${py}" r="${pr}" fill="${ink}"/><circle cx="${px + pr * .35}" cy="${py - pr * .4}" r="${pr * .38}" fill="#fff"/>` +
      `<circle cx="${px - pr * .35}" cy="${py + pr * .4}" r="${pr * .17}" fill="#fff"/></g>`;
  };
  let face = "";
  if (type === "plum") {
    face += eye(100, 90, 25, 27, 0);
    if (!joy) face += lashes(100, 90, 25, 27, [60, 90, 120]);
  } else {
    const rx = type === "blinky" ? 14 : 16, ry = type === "blinky" ? 16 : 19;
    face += eye(78, ey, rx, ry, 1) + eye(122, ey, rx, ry, 1);
    if (type === "tango" && !joy) face += lashes(78, ey, rx, ry, [150, 130, 112]) + lashes(122, ey, rx, ry, [30, 50, 68]);
    if (type === "blinky") face +=
      `<circle cx="78" cy="${ey}" r="22" fill="#fff" fill-opacity=".14" stroke="${ink}" stroke-width="4.5"/><circle cx="122" cy="${ey}" r="22" fill="#fff" fill-opacity=".14" stroke="${ink}" stroke-width="4.5"/>` +
      `<path d="M96 ${ey - 3} Q100 ${ey - 8} 104 ${ey - 3} M56 ${ey - 4} L40 ${ey - 8} M144 ${ey - 4} L160 ${ey - 8}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>` +
      `<path d="M66 ${ey - 12} l6 -4 M110 ${ey - 12} l6 -4" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;
  }
  // brows
  const by = type === "plum" ? 56 : ey - (type === "blinky" ? 30 : 27);
  if (sad) face += type === "plum"
    ? `<path d="M78 ${by + 4} Q90 ${by - 2} 98 ${by - 6} M122 ${by + 4} Q110 ${by - 2} 102 ${by - 6}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`
    : `<path d="M62 ${by + 2} Q72 ${by} 86 ${by - 7} M138 ${by + 2} Q128 ${by} 114 ${by - 7}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`;
  else if (type !== "plum") face += `<path d="M68 ${by} Q78 ${by - 6} 88 ${by} M112 ${by} Q122 ${by - 6} 132 ${by}" fill="none" stroke="${o}" stroke-width="4.5" stroke-linecap="round"/>`;
  if (sad) face += `<path d="M${type === "plum" ? 128 : 140} ${ey + 12} q-7 11 0 15 q7 -4 0 -15 Z" fill="#8fdcff" stroke="#2a7fb8" stroke-width="2"/>`;

  // cheeks + mouth
  const my = 128;
  face += `<ellipse cx="58" cy="${my - 8}" rx="10" ry="6" fill="#ff7f9f" opacity=".5"/><ellipse cx="142" cy="${my - 8}" rx="10" ry="6" fill="#ff7f9f" opacity=".5"/>`;
  if (sad) face += `<path d="M86 ${my + 12} Q100 ${my - 2} 114 ${my + 12}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`;
  else {
    const w = joy ? 23 : 20, deep = joy ? 42 : 36;
    const mouth = `M${100 - w} ${my} Q100 ${my + 4} ${100 + w} ${my} Q100 ${my + deep} ${100 - w} ${my} Z`;
    const teeth = type === "gobo"
      ? `<path d="M88 ${my + 1} l4 8 l4 -8 Z M104 ${my + 1} l4 8 l4 -8 Z" fill="#fff"/>`
      : `<rect x="90" y="${my}" width="8" height="8" rx="2" fill="#fff"/><rect x="102" y="${my}" width="8" height="8" rx="2" fill="#fff"/>`;
    face += `<clipPath id="${id}m"><path d="${mouth}"/></clipPath><path d="${mouth}" fill="#8e2a3c"/>` +
      `<g clip-path="url(#${id}m)">${teeth}<ellipse cx="100" cy="${my + deep / 2 + 5}" rx="${w * .6}" ry="9" fill="#ff8aa6"/></g>` +
      `<path d="${mouth}" fill="none" ${S(3.5)}/>`;
  }

  return `<svg viewBox="0 0 200 230" role="img" aria-label="${m.name}" class="mon-svg ${mood}">${defs}${back}${body}${feet}${arms}${face}</svg>`;
}
