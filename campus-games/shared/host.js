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
  '/juegos/carrera-de-caballos':{tag:'Grammar',desc:'Pick a book and unit, answer the grammar questions and make your horse gallop to the finish line.',marquee:[['HORSE','CABALLO'],['RACE','CARRERA'],['FASTER','MÁS RÁPIDO'],['WINNER','GANADOR'],['FINISH','META'],['TRACK','PISTA']],steps:[['📚','Choose what to practise: a <b>book and unit</b>, or a <b>level</b>.'],['🐎','Every right answer moves your horse forward.'],['🏁','Be the first past the finish line.']]},
  '/juegos/maletas-locas':{tag:'Your next word, in a flash',desc:'Read the definition or complete the sentence, then drag the word card to the right suitcase before time runs out.',marquee:[['LUGGAGE','EQUIPAJE'],['SUITCASE','MALETA'],['AIRPORT','AEROPUERTO'],['TICKET','BILLETE'],['GATE','PUERTA'],['PASSPORT','PASAPORTE']],steps:[['📚','Choose what to practise: a <b>book and unit</b>, or a <b>level</b>.'],['🧳','Read the definition or complete the sentence.'],['✋','Drag the card to the right suitcase.']]},
  '/juegos/viktor-pinkerton':{tag:'Observe. Connect. Solve',desc:'Open the three documents in the case file, connect the clues and solve the mystery.',marquee:[['CLUE','PISTA'],['DETECTIVE','DETECTIVE'],['SUSPECT','SOSPECHOSO'],['EVIDENCE','PRUEBA'],['CASE','CASO'],['MYSTERY','MISTERIO']],steps:[['📚','Choose what to practise: a <b>book and unit</b>, or a <b>level</b>.'],['📂','Open the three documents in the case file.'],['🔍','Connect the clues and solve the mystery.']]},
  '/juegos/phrasal-regatta':{tag:'Phrasal verbs',desc:'Answer the phrasal verb questions: every right answer is a new stroke of the oar.',marquee:[['ROW','REMAR'],['BOAT','BARCO'],['RIVER','RÍO'],['TEAM','EQUIPO'],['REGATTA','REGATA'],['PUT ON','PONERSE']],steps:[['📚','Choose what to practise: a <b>book and unit</b>, or a <b>level</b>.'],['✍️','Answer the phrasal verb questions.'],['🚣','Row your boat to the finish line.']]}
 }[source.pathname];
 const LEVELS=[['A1','First steps'],['A2','One step further'],['B1','On the move'],['B2','New challenges'],['C1','Next level'],['C2','Go for it']];
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const title=document.querySelector('#title').textContent.trim(),cover=splash.querySelector('.cover img').getAttribute('src');
 const words=title.split(/\s+/),last=words.pop(),first=words.join(' ');
 const head=document.head;
 const fonts=document.createElement('link');fonts.rel='stylesheet';fonts.href='https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Space+Mono:wght@400;700&display=swap';head.appendChild(fonts);
 const setup=document.createElement('main');setup.className='gsetup';setup.setAttribute('data-setup','');
 splash.hidden=true;frame.hidden=true;splash.after(setup);
 /* the same "How to play" button and popup the other games use */
 const hs=document.createElement('script');hs.src='../../shared/howto.js';
 hs.onload=()=>setHowTo({title:'How to play '+title,intro:INFO.desc,steps:INFO.steps,tips:[]});
 head.appendChild(hs);

 fetch('../shared/books.json').then(r=>r.json()).catch(()=>[]).then(books=>{
  const st={mode:books.length?'book':'level',book:books[0]?.id,unit:books[0]?.u[0][0],level:books[0]?.l||'A1'};
  const bookOf=id=>books.find(b=>b.id===id);
  const series=[...new Set(books.map(b=>b.s))];
  const mq=INFO.marquee.map(([a,b])=>'<i>'+esc(a)+' <b>→</b> '+esc(b)+'</i>').join('');
  function render(){
   const b=bookOf(st.book);
   setup.innerHTML='<section class="wrap" aria-labelledby="st-title">'
   +'<a class="home-link" href="../../">← All games</a><button type="button" class="home-link howto-btn" data-how>❓ How to play</button>'
   +'<div class="hero"><div class="l"><p class="eyebrow">Oxford Games <b>•</b> '+esc(INFO.tag)+'</p><h1 id="st-title">'+(first?esc(first):'')+'<span class="w2">'+esc(last)+'</span></h1><p>'+esc(INFO.desc)+'</p></div>'
   +'<div class="r"><span class="badge">A1 → C2</span><div class="art"><img src="'+esc(cover)+'" alt="" width="670" height="674"></div></div></div>'
   +'<div class="marquee"><div>'+mq+mq+mq+mq+'</div></div>'
   +'<div class="panel"><p class="eyebrow">01 · What do you want to practise?</p>'
   +'<div class="choices" role="group" aria-label="Content"><button type="button" class="chip'+(st.mode==='book'?' on':'')+'" data-mode="book" aria-pressed="'+(st.mode==='book')+'">By book &amp; unit</button><button type="button" class="chip'+(st.mode==='level'?' on':'')+'" data-mode="level" aria-pressed="'+(st.mode==='level')+'">By level</button></div>'
   +(st.mode==='book'&&b
     ?'<div class="selects"><label>Book<select data-book>'+series.map(s=>'<optgroup label="'+esc(s)+'">'+books.filter(x=>x.s===s).map(x=>'<option value="'+esc(x.id)+'"'+(x.id===st.book?' selected':'')+'>'+esc(x.t)+'</option>').join('')+'</optgroup>').join('')+'</select></label>'
      +'<label>Unit<select data-unit>'+b.u.map(([id,l])=>'<option value="'+esc(id)+'"'+(id===st.unit?' selected':'')+'>'+esc(l)+'</option>').join('')+'</select></label></div>'
     :'<div class="choices levels" role="group" aria-label="Level">'+LEVELS.map(([k,n])=>'<button type="button" class="chip'+(k===st.level?' on':'')+'" data-level="'+k+'" aria-pressed="'+(k===st.level)+'"><b>'+k+'</b><span>'+n+'</span></button>').join('')+'</div>')
   +'</div>'
   +'<div class="panel"><p class="eyebrow">02 · How it works</p><ol class="how">'+INFO.steps.map(([e,t])=>'<li><span class="e">'+e+'</span><span>'+t+'</span></li>').join('')+'</ol></div>'
   +'<div class="start-row"><button type="button" class="btn btn-red btn-big" data-go>Start game ▸</button></div>'
   +'</section>';
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
    setup.remove();frame.hidden=false;splash.hidden=false;launch();
   };
   setup.querySelector('[data-how]').onclick=()=>{if(window.openHowTo)window.openHowTo();};
  }
  render();
 });
})();
