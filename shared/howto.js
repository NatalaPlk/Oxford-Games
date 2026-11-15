// "How to play" button + popup for every game.
// Usage: setHowTo({ title, intro, steps: [[emoji, html], ...], tips: [html, ...], es: { the same in Spanish } })
// With "es", the popup has an ES / EN button (instructions in Spanish for families). The choice is remembered.
// Adds a button next to every "All games" link on the page.
function setHowTo(cfg){
  const css = `
  .howto-btn{cursor:pointer}
  .home-link.howto-btn{margin-left:8px;font-family:inherit}
  .howto-ov{position:fixed;inset:0;background:rgba(11,9,87,.55);display:flex;align-items:center;justify-content:center;padding:16px;z-index:9999}
  .howto-ov[hidden]{display:none}
  .howto{background:#fff;border:3px solid #0b0957;border-radius:22px;box-shadow:8px 8px 0 #0b0957;max-width:620px;width:100%;max-height:calc(100vh - 32px);overflow:auto;padding:26px 28px 22px;color:#0b0957;font-family:"Archivo",system-ui,sans-serif}
  .howto:focus{outline:none}
  .howto .eb{font-family:"Space Mono",monospace;font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#c8323c;margin:0 0 6px}
  .howto h2{font-size:34px;font-weight:900;text-transform:uppercase;line-height:1;margin:0 0 10px;letter-spacing:-.01em}
  .howto .intro{font-size:17px;margin:0 0 16px;line-height:1.4}
  .howto ol{list-style:none;margin:0 0 14px;padding:0;display:grid;gap:10px}
  .howto li{display:flex;gap:12px;align-items:flex-start;background:#faf5ea;border:2px solid #0b0957;border-radius:14px;padding:10px 14px;font-size:16px;line-height:1.35}
  .howto li .n{flex:none;width:30px;height:30px;border-radius:50%;background:#0b0957;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:15px}
  .howto li .e{flex:none;font-size:22px;line-height:30px}
  .howto li span.t{padding-top:4px}
  .howto .tips{margin:0 0 18px;padding:12px 16px;background:#fff6cf;border-radius:14px;font-size:15px;line-height:1.45}
  .howto .tips .th{display:block;font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:4px}
  .howto .tips p{margin:2px 0}
  .howto kbd{font-family:"Space Mono",monospace;font-size:13px;background:#fff;border:1.5px solid #0b0957;border-radius:6px;padding:0 6px}
  .howto .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .howto .lang{flex:none;cursor:pointer;border:2px solid #0b0957;border-radius:999px;background:#ffd257;color:#0b0957;font:700 13px "Space Mono",monospace;letter-spacing:.08em;padding:6px 12px;box-shadow:3px 3px 0 #0b0957}
  .howto .lang:active{transform:translate(2px,2px);box-shadow:1px 1px 0 #0b0957}
  .howto .close{display:block;margin:0 auto;cursor:pointer;border:2px solid #0b0957;border-radius:999px;background:#c8323c;color:#fff;font:800 17px "Archivo",sans-serif;padding:12px 30px;box-shadow:4px 4px 0 #0b0957}
  .howto .close:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #0b0957}
  @media (max-width:560px){.howto{padding:20px 18px}.howto h2{font-size:26px}}`;
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

  const ov = document.createElement("div");
  ov.className = "howto-ov"; ov.hidden = true;
  const WORDS = { en: { eb: "How to play", tips: "Tips", ok: "Got it! 👍", sw: "ES · Español", swl: "Instrucciones en español" },
                  es: { eb: "Cómo se juega", tips: "Consejos", ok: "¡Entendido! 👍", sw: "EN · English", swl: "Instructions in English" } };
  let lang = "en";
  try { if (cfg.es && localStorage.getItem("howto-lang") === "es") lang = "es"; } catch(e){}
  function paint(){
    const c = lang === "es" && cfg.es ? Object.assign({}, cfg, cfg.es) : cfg, w = WORDS[lang];
    ov.innerHTML = `<div class="howto" role="dialog" aria-modal="true" aria-labelledby="howtoTitle" lang="${lang}">
    <div class="top"><p class="eb">${w.eb}</p>${cfg.es ? `<button class="lang" type="button" title="${w.swl}" aria-label="${w.swl}">${w.sw}</button>` : ""}</div><h2 id="howtoTitle">${c.title}</h2>
    ${c.intro ? `<p class="intro">${c.intro}</p>` : ""}
    <ol>${c.steps.map(([e, t], i) => `<li><span class="n">${i + 1}</span><span class="e">${e}</span><span class="t">${t}</span></li>`).join("")}</ol>
    ${c.tips && c.tips.length ? `<div class="tips"><b class="th">${w.tips}</b>${c.tips.map(t => `<p>• ${t}</p>`).join("")}</div>` : ""}
    <button class="close" type="button">${w.ok}</button></div>`;
    const l = ov.querySelector(".lang");
    if (l) l.onclick = () => {
      lang = lang === "es" ? "en" : "es";
      try { localStorage.setItem("howto-lang", lang); } catch(e){}
      paint(); const d = ov.querySelector(".howto"); d.tabIndex = -1; d.focus({ preventScroll: true });
    };
  }
  paint();
  document.body.appendChild(ov);

  const open = () => { ov.hidden = false; const d = ov.querySelector(".howto"); d.scrollTop = 0; d.tabIndex = -1; d.focus({ preventScroll: true }); };
  const close = () => { ov.hidden = true; };
  ov.addEventListener("click", e => { if (e.target === ov || e.target.classList.contains("close")) close(); });
  // while the popup is open, keys belong to it (so Space/Enter don't move the game on)
  document.addEventListener("keydown", e => {
    if (ov.hidden) return;
    e.stopImmediatePropagation();
    if (e.target.classList && e.target.classList.contains("lang") && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); e.target.click(); return; }
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") { e.preventDefault(); close(); }
  }, true);

  document.querySelectorAll('a[href="../"]').forEach(a => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = a.className + " howto-btn";
    b.textContent = "❓ How to play";
    b.onclick = open;
    a.after(b);
  });
  window.openHowTo = open;
}
