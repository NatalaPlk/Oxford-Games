/* Oxford Games start screen (English) + mount of the real Oxford Campus game. No gameplay or scoring is reimplemented. */
(() => {
 'use strict';
 const engine='https://oxford-revision.jairollarena.chatgpt.site',allowed=new Set(['/juegos/carrera-de-caballos','/juegos/maletas-locas','/juegos/viktor-pinkerton','/juegos/phrasal-regatta']);
 const frame=document.querySelector('iframe'),status=document.querySelector('[data-status]'),splash=document.querySelector('[data-splash]'),fallback=document.querySelector('a[data-original]');
 const source=new URL(frame.dataset.original);
 if(source.origin!==engine||!allowed.has(source.pathname))throw Error('Invalid original game URL');
 source.searchParams.set('vista','oxford-games');
 const incoming=new URLSearchParams(location.search);
 for(const key of ['libro','unidad','nivel','repetir','sala','room','codigo'])if(incoming.has(key))source.searchParams.set(key,incoming.get(key));
 for(const [alias,key]of [['book','libro'],['unit','unidad']])if(!incoming.has(key)&&incoming.has(alias))source.searchParams.set(key,incoming.get(alias));
 fallback.href=source.href;

 function launch(){
  if(location.origin!=='https://natalaplk.github.io'){
   status.textContent='Opening the game…';
   frame.hidden=true;location.replace(source.href);return;
  }
  let ready=false;
  const timeout=setTimeout(()=>{if(!ready)status.textContent='The game is taking a while to open. You can use the button to open the original.'},15000);
  window.addEventListener('message',event=>{
   if(ready||event.origin!==engine||event.source!==frame.contentWindow||event.data?.type!=='oxford-games:ready'||event.data?.version!==1||event.data?.pathname?.replace(/\/$/,'')!==source.pathname)return;
   ready=true;clearTimeout(timeout);splash.hidden=true;frame.classList.add('ready');frame.focus();
  });
  frame.src=source.href;
 }

 /* A link that already carries a choice (replay, room code, book/level) goes straight to the game. */
 const preset=['libro','unidad','nivel','sala','room','codigo','repetir'].some(k=>incoming.has(k))||incoming.has('book')||incoming.has('unit');
 if(preset){launch();return;}

 const INFO={
  '/juegos/carrera-de-caballos':{tag:'Answer correctly and your horse runs faster!',steps:['Choose what to practise: a book and unit, or a level.','Every right answer moves your horse forward.','Be first past the finish line.']},
  '/juegos/maletas-locas':{tag:'Your next word, in a flash.',steps:['Choose what to practise: a book and unit, or a level.','Read the definition or complete the sentence.','Drag the card to the right suitcase before time runs out.']},
  '/juegos/viktor-pinkerton':{tag:'Observe. Connect. Solve.',steps:['Choose what to practise: a book and unit, or a level.','Open the three documents in the case file.','Connect the clues and solve the mystery.']},
  '/juegos/phrasal-regatta':{tag:'Every right answer is a new stroke of the oar.',steps:['Choose what to practise: a book and unit, or a level.','Answer the phrasal verb questions.','Row your boat to the finish line.']}
 }[source.pathname];
 const LEVELS=[['A1','First steps'],['A2','One step further'],['B1','On the move'],['B2','New challenges'],['C1','Next level'],['C2','Go for it']];
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const title=document.querySelector('#title').textContent,cover=splash.querySelector('.cover img').getAttribute('src');
 const setup=document.createElement('main');setup.className='splash setup';setup.setAttribute('data-setup','');
 splash.hidden=true;splash.after(setup);

 fetch('../shared/books.json').then(r=>r.json()).catch(()=>[]).then(books=>{
  const st={mode:books.length?'book':'level',book:books[0]?.id,unit:books[0]?.u[0][0],level:books[0]?.l||'A1'};
  const bookOf=id=>books.find(b=>b.id===id);
  const series=[...new Set(books.map(b=>b.s))];
  function render(){
   const b=bookOf(st.book);
   setup.innerHTML=`<section class="start-card" aria-labelledby="st-title">
    <a class="back-top" href="../../">← All games</a>
    <div class="start-hero"><div class="cover"><img src="${esc(cover)}" alt="" width="670" height="674"></div>
     <div class="copy"><p class="eyebrow">Oxford Games <b>•</b> ${esc(INFO.tag)}</p><h1 id="st-title">${esc(title)}</h1></div></div>
    <div class="panel"><p class="eyebrow">01 · What do you want to practise?</p>
     <div class="choices" role="group" aria-label="Content"><button type="button" class="choice" data-mode="book" aria-pressed="${st.mode==='book'}">By book &amp; unit</button><button type="button" class="choice" data-mode="level" aria-pressed="${st.mode==='level'}">By level</button></div>
     ${st.mode==='book'&&b?`<div class="selects"><label>Book<select data-book>${series.map(s=>`<optgroup label="${esc(s)}">${books.filter(x=>x.s===s).map(x=>`<option value="${esc(x.id)}"${x.id===st.book?' selected':''}>${esc(x.t)}</option>`).join('')}</optgroup>`).join('')}</select></label>
       <label>Unit<select data-unit>${b.u.map(([id,l])=>`<option value="${esc(id)}"${id===st.unit?' selected':''}>${esc(l)}</option>`).join('')}</select></label></div>`
      :`<div class="choices levels" role="group" aria-label="Level">${LEVELS.map(([k,n])=>`<button type="button" class="choice" data-level="${k}" aria-pressed="${k===st.level}"><b>${k}</b><span>${n}</span></button>`).join('')}</div>`}
    </div>
    <div class="panel"><p class="eyebrow">02 · How it works</p><ol class="how">${INFO.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>
    <div class="start-actions"><button type="button" class="button go" data-go>Start game ▸</button><span class="free">Free · No sign-up</span></div>
   </section>`;
   setup.querySelectorAll('[data-mode]').forEach(e=>e.onclick=()=>{st.mode=e.dataset.mode;render();});
   setup.querySelectorAll('[data-level]').forEach(e=>e.onclick=()=>{st.level=e.dataset.level;render();});
   const sb=setup.querySelector('[data-book]'),su=setup.querySelector('[data-unit]');
   if(sb)sb.onchange=()=>{const nb=bookOf(sb.value);st.book=nb.id;st.unit=nb.u[0][0];st.level=nb.l;render();};
   if(su)su.onchange=()=>{st.unit=su.value;};
   setup.querySelector('[data-go]').onclick=()=>{
    if(st.mode==='book'&&b){source.searchParams.set('libro',st.book);source.searchParams.set('unidad',st.unit);source.searchParams.delete('nivel');}
    else{source.searchParams.set('nivel',st.level);source.searchParams.delete('libro');source.searchParams.delete('unidad');}
    source.searchParams.set('repetir','1');   /* skip the game's own "how to play" page */
    fallback.href=source.href;
    setup.remove();splash.hidden=false;launch();
   };
  }
  render();
 });
})();
