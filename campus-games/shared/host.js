/* Mount the real Oxford Campus game. No gameplay or scoring is reimplemented. */
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
 if(location.origin!=='https://natalaplk.github.io'){
  status.textContent='Opening the game…';
  frame.hidden=true;location.replace(source.href);return;
 }
 let ready=false;
 const timeout=setTimeout(()=>{if(!ready)status.textContent='El juego está tardando en abrir. Puedes acceder al original con el botón.'},15000);
 window.addEventListener('message',event=>{
  if(ready||event.origin!==engine||event.source!==frame.contentWindow||event.data?.type!=='oxford-games:ready'||event.data?.version!==1||event.data?.pathname?.replace(/\/$/,'')!==source.pathname)return;
  ready=true;clearTimeout(timeout);splash.hidden=true;frame.classList.add('ready');frame.focus();
 });
 frame.src=source.href;
})();
