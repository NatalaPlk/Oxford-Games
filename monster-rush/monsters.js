// Four cartoon monsters for Monster Rush, drawn as SVG so they can change mood.
// monsterSVG(type, mood) — type: gobo | plum | blinky | tango; mood: happy | joy | sad
const MONSTERS = {
  gobo:   { name: "Gobo",   c: "#8fd164", c2: "#6cb441", belly: "#bde895", o: "#0d4d2c", color: "#4caf2f" },
  plum:   { name: "Plum",   c: "#cf92ea", c2: "#a666cf", belly: "#ecc9f7", o: "#4a1f6e", color: "#9b51e0" },
  blinky: { name: "Blinky", c: "#72caf3", c2: "#3f9fd6", belly: "#bde6fb", o: "#18507f", color: "#2f8fd8" },
  tango:  { name: "Tango",  c: "#ffad57", c2: "#f08a24", belly: "#ffd6a8", o: "#7a3300", color: "#ef7d1a" },
};
const MONSTER_ORDER = ["gobo", "plum", "blinky", "tango"];

function fuzzPath(cx, cy, r, n, amp, start = -Math.PI / 2){
  const f = v => v.toFixed(1);
  let d = "";
  for (let i = 0; i <= n; i++) {
    const a = start + i * 2 * Math.PI / n, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
    if (!i) { d += `M${f(x)} ${f(y)}`; continue; }
    const m = start + (i - .5) * 2 * Math.PI / n;
    d += ` Q${f(cx + (r + amp) * Math.cos(m))} ${f(cy + (r + amp) * Math.sin(m))} ${f(x)} ${f(y)}`;
  }
  return d + "Z";
}

function monsterSVG(type, mood = "happy"){
  const m = MONSTERS[type] || MONSTERS.gobo, o = m.o, S = `stroke="${o}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"`;
  const joy = mood === "joy", sad = mood === "sad";
  let back = "", face = "";

  // --- things behind the head: horns, antennae, ears ---
  if (type === "gobo") back =
    `<path d="M66 50 Q44 32 52 6 Q66 26 86 36 Z" fill="#55d6e8" ${S}/><path d="M56 30 Q64 34 72 34 M52 18 Q58 22 64 24" stroke="#1fb3cc" stroke-width="3" fill="none"/>` +
    `<path d="M134 50 Q156 32 148 6 Q134 26 114 36 Z" fill="#55d6e8" ${S}/><path d="M144 30 Q136 34 128 34 M148 18 Q142 22 136 24" stroke="#1fb3cc" stroke-width="3" fill="none"/>`;
  if (type === "plum" || type === "blinky") back =
    `<path d="M80 40 Q70 20 54 10 M120 40 Q130 20 146 10" fill="none" ${S}/>` +
    `<circle cx="52" cy="9" r="10" fill="${m.c}" ${S}/><circle cx="148" cy="9" r="10" fill="${m.c}" ${S}/>` +
    `<circle cx="49" cy="6" r="3" fill="#fff" opacity=".8"/><circle cx="145" cy="6" r="3" fill="#fff" opacity=".8"/>`;
  if (type === "tango") back =
    `<path d="M62 46 L56 18 L82 36 Z" fill="#ff7aa8" ${S}/><path d="M138 46 L144 18 L118 36 Z" fill="#ff7aa8" ${S}/>`;

  // --- body, arms, feet ---
  const body =
    `<ellipse cx="78" cy="212" rx="21" ry="12" fill="${m.c}" ${S}/><ellipse cx="122" cy="212" rx="21" ry="12" fill="${m.c}" ${S}/>` +
    `<path d="M70 214 v-5 M80 215 v-6 M114 215 v-6 M124 214 v-5" stroke="${o}" stroke-width="3" stroke-linecap="round"/>` +
    `<g class="arm l"><ellipse cx="50" cy="168" rx="12" ry="26" transform="rotate(18 50 168)" fill="${m.c}" ${S}/></g>` +
    `<g class="arm r"><ellipse cx="150" cy="168" rx="12" ry="26" transform="rotate(-18 150 168)" fill="${m.c}" ${S}/></g>` +
    `<rect x="56" y="124" width="88" height="86" rx="36" fill="${m.c}" ${S}/>` +
    `<ellipse cx="100" cy="176" rx="27" ry="23" fill="${m.belly}"/>`;

  // --- fuzzy head ---
  const head = `<path d="${fuzzPath(100, 90, 62, type === "blinky" || type === "plum" ? 20 : 26, type === "plum" ? 4 : 7)}" fill="${m.c}" ${S}/>` +
    `<path d="M140 128 Q160 100 154 72" stroke="${m.c2}" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>`;

  // --- face ---
  const ey = 90;
  if (type === "plum") face += `<circle cx="64" cy="64" r="6" fill="${m.c2}"/><circle cx="140" cy="58" r="5" fill="${m.c2}"/><circle cx="148" cy="112" r="4" fill="${m.c2}"/>`;
  if (type === "tango") face += `<circle cx="66" cy="66" r="6" fill="${m.c2}"/><circle cx="138" cy="70" r="5" fill="${m.c2}"/><circle cx="58" cy="106" r="4" fill="${m.c2}"/>`;
  if (type === "blinky") face += `<path d="M76 34 L84 8 L94 30 L102 2 L110 28 L122 6 L124 36 Z" fill="${m.c2}" ${S}/>`;

  const arc = (x, w = 12) => `<path d="M${x - w} ${ey + 4} Q${x} ${ey - 12} ${x + w} ${ey + 4}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`;
  if (type === "tango") {
    face += joy ? arc(100, 16)
      : `<g class="eye"><circle cx="100" cy="${ey}" r="23" fill="#fffaf0" ${S}/><circle cx="100" cy="${ey + 3}" r="12" fill="#1d1546"/><circle cx="105" cy="${ey - 3}" r="4.5" fill="#fff"/></g>`;
  } else if (type === "gobo") {
    if (!sad) face += `<ellipse cx="78" cy="62" rx="11" ry="5" fill="#2e8a5c" ${S.replace('5"', '3"')}/><ellipse cx="122" cy="62" rx="11" ry="5" fill="#2e8a5c" ${S.replace('5"', '3"')}/>`;
    face += joy ? arc(78) + arc(122)
      : `<g class="eye"><ellipse cx="78" cy="${ey}" rx="15" ry="17" fill="#fdf8d8" ${S}/><ellipse cx="80" cy="${ey + 2}" rx="6" ry="8" fill="${o}"/></g>` +
        `<g class="eye"><ellipse cx="122" cy="${ey}" rx="15" ry="17" fill="#fdf8d8" ${S}/><ellipse cx="120" cy="${ey + 2}" rx="6" ry="8" fill="${o}"/></g>`;
    face += `<ellipse cx="100" cy="110" rx="11" ry="8" fill="#22a35a" ${S}/>`;
  } else {
    const r = type === "blinky" ? 11 : 15, pc = type === "blinky" ? "#4a4f63" : "#140c22";
    face += joy ? arc(78) + arc(122)
      : [78, 122].map(x => `<g class="eye"><circle cx="${x}" cy="${ey}" r="${r}" fill="${pc}"/><circle cx="${x - 4}" cy="${ey - 5}" r="${r / 3}" fill="#fff"/><circle cx="${x + 4}" cy="${ey + 4}" r="${r / 6}" fill="#fff"/></g>`).join("");
    if (type === "blinky") face +=
      `<circle cx="78" cy="${ey}" r="21" fill="rgba(255,255,255,.28)" stroke="#16162a" stroke-width="5"/><circle cx="122" cy="${ey}" r="21" fill="rgba(255,255,255,.28)" stroke="#16162a" stroke-width="5"/>` +
      `<path d="M99 ${ey - 2} Q100 ${ey - 6} 101 ${ey - 2} M57 ${ey - 4} L44 ${ey - 8} M143 ${ey - 4} L156 ${ey - 8}" stroke="#16162a" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  }
  if (sad) face += `<path d="M62 ${ey - 20} Q72 ${ey - 22} 84 ${ey - 30} M138 ${ey - 20} Q128 ${ey - 22} 116 ${ey - 30}" stroke="${o}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M${type === "tango" ? 124 : 136} ${ey + 14} q-6 10 0 14 q6 -4 0 -14 Z" fill="#7fd3ff" stroke="#2a7fb8" stroke-width="2"/>`;

  // cheeks + mouth
  const my = type === "gobo" ? 128 : 124;
  face += `<ellipse cx="62" cy="${my - 8}" rx="9" ry="5.5" fill="#ff8fab" opacity=".75"/><ellipse cx="138" cy="${my - 8}" rx="9" ry="5.5" fill="#ff8fab" opacity=".75"/>`;
  face += sad ? `<path d="M86 ${my + 8} Q100 ${my - 4} 114 ${my + 8}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`
    : joy ? `<path d="M82 ${my - 3} Q100 ${my + 26} 118 ${my - 3} Z" fill="#e8505b" ${S}/><path d="M92 ${my + 11} Q100 ${my + 4} 108 ${my + 11} Q100 ${my + 16} 92 ${my + 11}Z" fill="#ff9eb5"/>`
    : `<path d="M84 ${my} Q100 ${my + 15} 116 ${my}" fill="none" stroke="${o}" stroke-width="5" stroke-linecap="round"/>`;

  return `<svg viewBox="0 0 200 230" role="img" aria-label="${m.name}" class="mon-svg ${mood}">${back}${body}${head}${face}</svg>`;
}
