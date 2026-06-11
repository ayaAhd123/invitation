/* ===========================================================
   Wedding Invitation - interactions (no backend)
   =========================================================== */

/* ---------- elements ---------- */
const cover    = document.getElementById('cover');
const openBtn  = document.getElementById('openBtn');
const invite   = document.getElementById('invite');
const musicBtn = document.getElementById('musicBtn');
const langBtn  = document.getElementById('langBtn');

/* ===========================================================
   TRANSLATIONS  (English / Arabic)
   =========================================================== */
const I18N = {
  'cover.cta':   {en:'Click to open', ar:'اضغط للفتح'},
  'hero.eyebrow':{en:'together with their families', ar:'بحمد الله وتوفيقه'},
  'name.1':      {en:'Salma', ar:'سلمى'},
  'amp':         {en:'&', ar:'و'},
  'name.2':      {en:'Youssef', ar:'يوسف'},
  'hero.sub':    {en:'are getting married!', ar:'سيتزوجان بإذن الله'},
  'scroll':      {en:'scroll', ar:'مرّر للأسفل'},

  'scratch.title':{en:'Scratch to reveal the date', ar:'احكُ لتكشف التاريخ'},
  'day':   {en:'DAY', ar:'اليوم'},
  'month': {en:'MONTH', ar:'الشهر'},
  'year':  {en:'YEAR', ar:'السنة'},
  'month.aug':{en:'August', ar:'غشت'},
  'scratch.hint':{en:'use your finger to scratch each card', ar:'اكشط كل بطاقة بإصبعك'},

  'cd.title':{en:'Countdown to our wedding', ar:'العدّ التنازلي لحفل زفافنا'},
  'cd.note':{en:'We can\u2019t wait to celebrate with you', ar:'لا نستطيع الانتظار لنحتفل معكم'},
  'cd.days':{en:'Days', ar:'أيام'},
  'cd.hours':{en:'Hours', ar:'ساعات'},
  'cd.mins':{en:'Minutes', ar:'دقائق'},
  'cd.secs':{en:'Seconds', ar:'ثوانٍ'},
  'cd.done':{en:'Today is the day!', ar:'اليوم هو اليوم!'},

  'letter.title':{en:'Dear friends and family,', ar:'أحبّتنا الكرام،'},
  'letter.p1':{en:'As we get ready to say \u201CI do,\u201D we feel grateful for the wonderful people in our lives.',
               ar:'ونحن نستعدّ لبدء حياتنا معًا، نشعر بالامتنان لوجود أحبّتنا من حولنا.'},
  'letter.p2':{en:'Your support means the world to us, and we would be honored to have you with us as we begin our life together.',
               ar:'حضوركم ودعمكم يعني لنا الكثير، ويشرّفنا أن تشاركونا فرحتنا في هذا اليوم.'},

  'schedule.title':{en:'Schedule of Events', ar:'برنامج الحفل'},
  'schedule.note':{en:'A celebration in true Moroccan spirit', ar:'احتفال على الطريقة المغربية الأصيلة'},
  'ev1.t':{en:'Hflat l\u2019Henna', ar:'حفلة الحناء'},
  'ev1.d':{en:'Henna ceremony & blessings for the bride', ar:'ليلة الحناء والبركة للعروس'},
  'ev2.t':{en:'Dkhoul l\u2019Aroussa', ar:'دخلة العروس'},
  'ev2.d':{en:'The Amariya entrance of the bride & groom', ar:'دخول العروسين على العمارية'},
  'ev3.t':{en:'L\u2019Aada & Dinner', ar:'العادة والعشاء'},
  'ev3.d':{en:'Traditional feast with family & friends', ar:'مأدبة عشاء تقليدية مع الأهل والأصدقاء'},
  'ev4.t':{en:'Dakka & Dancing', ar:'الدقة والرقص'},
  'ev4.d':{en:'Music, chaabi & celebration until dawn', ar:'موسيقى وأهازيج شعبية حتى الفجر'},

  'venue.title':{en:'Wedding Venue', ar:'مكان الحفل'},
  'venue.name':{en:'Riad Dar Zellij', ar:'رياض دار الزليج'},
  'venue.place':{en:'Marrakech, Morocco', ar:'مراكش، المغرب'},
  'map.link':{en:'Open in Google Maps', ar:'افتح في خرائط جوجل'},

  'dress.title':{en:'Dress Code', ar:'قواعد اللباس'},
  'dress.note':{en:'We would be very happy if your outfit is in the colours of the wedding theme.',
                ar:'يسعدنا أن يكون لباسكم منسجمًا مع ألوان الحفل.'},
  'colours':{en:'Colours', ar:'الألوان'},
  'dress.ladies':{en:'<strong>Ladies:</strong> Elegant summer dresses in pastel tones. We recommend bringing a hat and sunglasses for comfort.',
                  ar:'<strong>السيدات:</strong> فساتين صيفية أنيقة بألوان فاتحة. ننصح بإحضار قبعة ونظارات شمسية.'},
  'dress.men':{en:'<strong>Gentlemen:</strong> Light linen suits in cream, beige or soft blue.',
               ar:'<strong>السادة:</strong> بدلات كتانية خفيفة بألوان كريمية أو بيج أو أزرق فاتح.'},

  'wall.title':{en:'Leave a note on our wall', ar:'اتركوا كلمة على جدارنا'},
  'wall.note':{en:'Pin your beautiful words — they will bloom here for everyone to see.',
               ar:'علّقوا كلماتكم الجميلة — ستزهر هنا ليراها الجميع.'},
  'wall.empty':{en:'Be the first to pin a note!', ar:'كونوا أول من يعلق كلمة!'},
  'wall.pin':{en:'Pin to the wall', ar:'علّق على الجدار'},
  'wall.tap':{en:'Tap a note to read it & see who wrote it', ar:'اضغط على الكلمة لقراءتها ومعرفة كاتبها'},
  'wall.from':{en:'From', ar:'من'},
  'wall.count':{en:'{n} notes pinned', ar:'{n} كلمة معلّقة'},
  'ph.name':{en:'Your name', ar:'اسمك'},
  'ph.msg':{en:'Write something beautiful...', ar:'اكتب شيئاً جميلاً...'},
  'closing.line':{en:'Hope to see your beautiful faces there!', ar:'في انتظار وجوهكم الجميلة!'},
  'closing.names':{en:'Salma & Youssef', ar:'سلمى و يوسف'},
};

let LANG = localStorage.getItem('wedding_lang') || 'en';

/* ---------- open invitation (bind early, before anything can throw) ---------- */
let opened = false;
function openInvitation(e){
  if (e){ e.preventDefault(); e.stopPropagation(); }
  if (opened) return;
  opened = true;
  if (window.weddingStartMusic) window.weddingStartMusic();
  if (cover) cover.classList.add('opening');
  setTimeout(() => {
    if (cover) cover.classList.add('is-open');
    if (invite){
      invite.setAttribute('aria-hidden', 'false');
      invite.classList.add('is-live');
    }
    if (musicBtn) musicBtn.hidden = false;
    document.body.style.overflow = 'auto';
    if (window.weddingStartMusic) window.weddingStartMusic();
    if (typeof initRevealsNow === 'function') initRevealsNow();
    if (typeof spawnFeathers === 'function') spawnFeathers();
    if (typeof measureLetter === 'function') measureLetter();
    if (typeof onScroll === 'function') onScroll();
  }, 850);
}
window.openInvite = openInvitation;

function bindOpen(){
  const ui = document.querySelector('.cover-ui');
  if (ui){
    ui.addEventListener('click', openInvitation);
    ui.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' ') openInvitation(e);
    });
  }
}
bindOpen();
document.body.style.overflow = 'hidden';

function applyLang(lang){
  LANG = lang;
  localStorage.setItem('wedding_lang', lang);
  document.body.classList.toggle('ar', lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  if (langBtn) langBtn.textContent = (lang === 'ar') ? 'English' : 'العربية';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const t = I18N[el.getAttribute('data-i18n')];
    if (t) el.innerHTML = t[lang];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const t = I18N[el.getAttribute('data-i18n-ph')];
    if (t) el.placeholder = t[lang];
  });
  requestAnimationFrame(()=>{
    try { if (typeof measureLetter === 'function') measureLetter(); } catch(e){}
    try { if (typeof onScroll === 'function') onScroll(); } catch(e){}
  });
  try {
    if (typeof updateWallCount === 'function' && typeof WallStore !== 'undefined')
      updateWallCount(WallStore.getAll().length);
  } catch(e){}
}
if (langBtn) langBtn.addEventListener('click', ()=> applyLang(LANG === 'ar' ? 'en' : 'ar'));

/* ===========================================================
   SCRATCH CARDS
   =========================================================== */
function initScratch(canvas){
  const ctx = canvas.getContext('2d');
  const card = canvas.closest('.scratch-card');
  const w = canvas.width, h = canvas.height;

  const g = ctx.createLinearGradient(0,0,w,h);
  g.addColorStop(0,'#e2c98a'); g.addColorStop(.5,'#f0e4c8'); g.addColorStop(1,'#d4b86a');
  ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 6;
  for (let i=-h;i<w;i+=22){ ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i+h,h); ctx.stroke(); }
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.font = '600 22px "Cormorant Garamond", serif';
  ctx.textAlign = 'center';
  ctx.fillText('scratch', w/2, h/2+8);

  ctx.globalCompositeOperation = 'destination-out';
  let drawing = false, cleared = false;

  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x:(p.clientX-r.left)*(w/r.width), y:(p.clientY-r.top)*(h/r.height) };
  };
  const scratch = (e) => {
    if (!drawing) return;
    const {x,y} = pos(e);
    ctx.beginPath(); ctx.arc(x,y,22,0,Math.PI*2); ctx.fill();
    if (e.cancelable) e.preventDefault();
  };
  const check = () => {
    if (cleared) return;
    const img = ctx.getImageData(0,0,w,h).data;
    let clear = 0;
    for (let i=3;i<img.length;i+=64){ if (img[i]===0) clear++; }
    if (clear/(img.length/64) > 0.55){ cleared = true; card.classList.add('done'); }
  };
  const start = (e)=>{ drawing=true; scratch(e); };
  const end   = ()=>{ if(drawing){ drawing=false; check(); } };

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', scratch);
  window.addEventListener('mouseup', end);
  canvas.addEventListener('touchstart', start, {passive:false});
  canvas.addEventListener('touchmove', scratch, {passive:false});
  canvas.addEventListener('touchend', end);
}
document.querySelectorAll('canvas.scratch').forEach(initScratch);

/* ===========================================================
   COUNTDOWN  (August 14, 2026 — change date here if needed)
   =========================================================== */
const WEDDING_DATE = new Date(2026, 7, 14, 18, 0, 0);
const cdDays  = document.getElementById('cdDays');
const cdHours = document.getElementById('cdHours');
const cdMins  = document.getElementById('cdMins');
const cdSecs  = document.getElementById('cdSecs');
const cdBox   = document.getElementById('countdownBox');
const cdDone  = document.getElementById('cdDone');
let cdPrev = {d:'',h:'',m:'',s:''};

function pad2(n){ return String(n).padStart(2, '0'); }

function tickCountdown(){
  const now = Date.now();
  const diff = WEDDING_DATE.getTime() - now;

  if (diff <= 0){
    if (cdBox) cdBox.hidden = true;
    if (cdDone) cdDone.hidden = false;
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  /* days can be 3+ digits — only pad hours/mins/secs */
  const ds = String(d), hs = pad2(h), ms = pad2(m), ss = pad2(s);

  if (cdDays){
    if (ds !== cdPrev.d){ cdDays.textContent = ds; cdDays.classList.add('tick'); setTimeout(()=>cdDays.classList.remove('tick'),350); cdPrev.d = ds; }
    else cdDays.textContent = ds;
  }
  if (cdHours){
    if (hs !== cdPrev.h){ cdHours.textContent = hs; cdHours.classList.add('tick'); setTimeout(()=>cdHours.classList.remove('tick'),350); cdPrev.h = hs; }
    else cdHours.textContent = hs;
  }
  if (cdMins){
    if (ms !== cdPrev.m){ cdMins.textContent = ms; cdMins.classList.add('tick'); setTimeout(()=>cdMins.classList.remove('tick'),350); cdPrev.m = ms; }
    else cdMins.textContent = ms;
  }
  if (cdSecs) cdSecs.textContent = ss;
}

/* run countdown as soon as DOM is ready */
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', tickCountdown);
} else {
  tickCountdown();
}
setInterval(tickCountdown, 1000);

/* ===========================================================
   SCROLL REVEALS + SCHEDULE CLOUD PARTING
   =========================================================== */
let revealObserver;
function initRevealsNow(){
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); }
    });
  }, { threshold:0.18 });
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

  const sectionObs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (en.isIntersecting){
        en.target.classList.add('in-view');
        sectionObs.unobserve(en.target);
      }
    });
  }, { threshold:0.12 });
  document.querySelectorAll('.section-anim').forEach(el=>sectionObs.observe(el));

  const sched = document.getElementById('schedule');
  const schedObs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (en.isIntersecting){ sched.classList.add('parted'); schedObs.unobserve(en.target); }
    });
  }, { threshold:0.35 });
  schedObs.observe(sched);
}

/* ---------- letter: only bismillah visible, rest reveals on scroll ---------- */
const letterSection = document.getElementById('letter');
const letterPaper   = document.getElementById('letterPaper');
const letterSlot    = document.querySelector('.letter-slot');
let ticking = false;

function measureLetter(){
  if (!letterSection || !letterPaper || !letterSlot) return;

  letterPaper.style.transform = 'translateY(0)';
  letterSlot.classList.remove('is-open');

  const bismillah = letterPaper.querySelector('.bismillah');
  const isAr = document.body.classList.contains('ar');
  let peekH;

  if (isAr && bismillah && bismillah.offsetHeight){
    peekH = bismillah.offsetHeight + 28;
  } else {
    const title = letterPaper.querySelector('.script-title');
    peekH = (title ? title.offsetHeight : 52) + 28;
  }

  const paperH = letterPaper.scrollHeight;
  const maxLift = Math.max(paperH - peekH, 0);
  const scrollDist = maxLift + window.innerHeight * 0.45;

  letterSection.dataset.peek = peekH;
  letterSection.dataset.maxLift = maxLift;
  letterSection.style.height = (window.innerHeight + scrollDist) + 'px';
  letterSlot.style.setProperty('--peek-h', peekH + 'px');
  letterSlot.style.height = peekH + 'px';
}

function onScroll(){
  if (!letterSection || !letterPaper || !letterSlot) return;

  const peekH = Number(letterSection.dataset.peek) || 72;
  const maxLift = Number(letterSection.dataset.maxLift) || 0;
  const scrollable = letterSection.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return;

  const rect = letterSection.getBoundingClientRect();
  let scrolled = -rect.top;
  scrolled = Math.min(Math.max(scrolled, 0), scrollable);
  const p = scrolled / scrollable;

  const reveal = p * maxLift;
  letterPaper.style.transform = 'translateY(0)';
  letterSlot.style.height = (peekH + reveal) + 'px';
  letterSlot.classList.toggle('is-open', p >= 0.98);
}

window.addEventListener('scroll', ()=>{
  if (!ticking){
    requestAnimationFrame(()=>{ onScroll(); ticking=false; });
    ticking = true;
  }
}, {passive:true});

window.addEventListener('resize', ()=>{
  measureLetter();
  onScroll();
});

if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(()=>{ measureLetter(); onScroll(); });
}

/* ===========================================================
   FALLING FEATHERS
   =========================================================== */
function spawnFeathers(){
  const host = document.getElementById('feathers');
  if (!host || host.childElementCount) return;
  for (let i=0;i<9;i++){
    const f = document.createElement('span');
    f.className = 'feather';
    f.style.left = Math.random()*100 + '%';
    f.style.animationDuration = (8 + Math.random()*7) + 's';
    f.style.animationDelay = (Math.random()*9) + 's';
    f.style.transform = `scale(${0.7 + Math.random()*0.8})`;
    host.appendChild(f);
  }
}

/* ===========================================================
   MESSAGE WALL
   Now: localStorage (per browser). Later: swap WallStore for Firebase/Supabase.
   =========================================================== */
const wallForm    = document.getElementById('wallForm');
const wallBoard   = document.getElementById('wallBoard');
const wallCount   = document.getElementById('wallCount');
const wallScroll  = document.getElementById('wallScroll');
const noteModal   = document.getElementById('noteModal');
const modalSender = document.getElementById('modalSender');
const modalText   = document.getElementById('modalText');
const modalClose  = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const WALL_KEY    = 'wedding_wall_notes';
const NOTE_COLORS = 5;
const NOTE_ROTS   = [-5, 4, -3, 2, -4, 3, -2, 5];
const PREVIEW_LEN = 52;

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function guestLabel(){ return (LANG === 'ar') ? 'ضيف' : 'A guest'; }
function previewText(s){
  const t = s.trim();
  return t.length > PREVIEW_LEN ? t.slice(0, PREVIEW_LEN).trim() + '\u2026' : t;
}
function countLabel(n){
  const t = I18N['wall.count'];
  if (!t) return '';
  return t[LANG].replace('{n}', n);
}

const WallStore = {
  getAll(){
    try { return JSON.parse(localStorage.getItem(WALL_KEY)) || []; } catch(e){ return []; }
  },
  save(note){
    const data = this.getAll();
    data.push(note);
    localStorage.setItem(WALL_KEY, JSON.stringify(data));
    return note;
  }
  /* Future: async fetchAll() / async add() via Firebase or Supabase */
};

function openNoteModal(note){
  if (!noteModal) return;
  const name = note.name || guestLabel();
  modalSender.textContent = name;
  modalText.textContent = note.text;
  noteModal.hidden = false;
  noteModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeNoteModal(){
  if (!noteModal) return;
  noteModal.hidden = true;
  noteModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
if (modalClose) modalClose.addEventListener('click', closeNoteModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeNoteModal);
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape' && noteModal && !noteModal.hidden) closeNoteModal();
});

function renderNote(note, prepend){
  const el = document.createElement('article');
  el.className = `wall-note note-c${note.color % NOTE_COLORS}`;
  el.style.setProperty('--rot', (note.rot || 0) + 'deg');
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.setAttribute('aria-label', (note.name || guestLabel()) + ': ' + note.text);
  el.innerHTML =
    `<span class="v-pin" aria-hidden="true"><span class="v-pin-head"></span><span class="v-pin-needle"></span></span>` +
    `<p class="note-preview">${escapeHtml(previewText(note.text))}</p>`;
  const open = () => openNoteModal(note);
  el.addEventListener('click', open);
  el.addEventListener('keydown', (e)=>{ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  if (prepend) wallBoard.prepend(el);
  else wallBoard.appendChild(el);
}

function updateWallCount(n){
  if (!wallCount) return;
  if (n > 0){
    wallCount.textContent = countLabel(n);
    wallCount.hidden = false;
  } else {
    wallCount.hidden = true;
  }
}

function syncWallUI(){
  if (!wallBoard) return;
  wallBoard.querySelectorAll('.wall-note').forEach(n => n.remove());
  const notes = WallStore.getAll();
  notes.forEach(n => renderNote(n, false));
  wallBoard.classList.toggle('has-notes', notes.length > 0);
  updateWallCount(notes.length);
}

function pinNote(name, text){
  const note = {
    name,
    text,
    t: Date.now(),
    color: Math.floor(Math.random() * NOTE_COLORS),
    rot: NOTE_ROTS[Math.floor(Math.random() * NOTE_ROTS.length)]
  };
  WallStore.save(note);
  renderNote(note, true);
  wallBoard.classList.add('has-notes');
  updateWallCount(WallStore.getAll().length);
  if (wallScroll) wallScroll.scrollTop = 0;
}

if (wallForm){
  wallForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('wallName').value.trim();
    const text = document.getElementById('wallText').value.trim();
    if (!text) return;
    pinNote(name, text);
    wallForm.reset();
  });
}

syncWallUI();
applyLang(LANG);
