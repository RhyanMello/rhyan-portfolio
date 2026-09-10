/* ============================================================
   RHYAN SMELLO — interacoes
   1) habilidades  2) projetos + modal  3) reveal no scroll
   4) cursor customizado  5) rolagem suave
   Para editar os projetos, mexa no array P (linha ~40).
   ============================================================ */

(function(){
  var root=document.documentElement;
  root.classList.add('js');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- habilidades (adesivos espalhados) ---------- */
  var SK=[['Graphic Design','var(--rosa)',-3,1.35],['Art Direction','var(--amarelo)',2,1.1],
    ['Visual Identity','var(--azul)',-1.5,1.5],['Advertising','var(--verde)',3,1],
    ['Social Media Design','var(--lilas)',-2,1.05],['Event Design','var(--laranja)',1.5,1.2],
    ['Typography','var(--amarelo)',-3.5,1.45],['Illustration','var(--rosa)',2.5,1.15],
    ['Digital Design','var(--verde)',-1,1],['Creative Concept','var(--azul)',3,1.3]];
  var sk=document.getElementById('skills');
  SK.forEach(function(s){
    var e=document.createElement('span');
    e.className='skill';
    e.textContent=s[0];
    e.style.background=s[1];
    e.style.transform='rotate('+s[2]+'deg)';
    e.style.fontSize=s[3]+'rem';
    if(s[1]==='var(--azul)')e.style.color='#fff';
    sk.appendChild(e);
  });

  /* ---------- projetos ---------- */
  var P=[
    {t:'FESTA NEON',y:'2025',c:'Eventos',r:'Identidade e direção de arte',
     d:'Uma festa universitária que já existia há três edições e nunca teve cara própria. Construí a marca a partir de um único gesto — o traço de luz — e desdobrei em tudo que o público encontra na noite: flyer, ingresso, letreiro de entrada, pulseira e a cobertura de stories.',
     e:'Marca, kit de flyers (3 formatos), letreiro de entrada, pulseira, 12 peças de social e templates de story.',
     g:['Identidade','Impresso','Social','Sinalização']},
    {t:'CAFÉ ÓRBITA',y:'2025',c:'Identidade Visual',r:'Identidade visual completa',
     d:'Cafeteria de bairro que não queria parecer cafeteria de bairro genérica. Parti de uma restrição: duas cores e uma forma. O símbolo é a órbita do vapor sobre a xícara, que vira padrão, vira selo e vira recorte de embalagem.',
     e:'Logotipo e variações, paleta, tipografia, padrão gráfico, copo, saco de grão, cardápio e fachada.',
     g:['Logo','Embalagem','Sistema']},
    {t:'SUPERVERÃO',y:'2024',c:'Publicidade',r:'Direção de arte e finalização',
     d:'Campanha sazonal de varejo com prazo curto e muitos formatos. O desafio real não era criar a peça bonita, era criar um sistema que aguentasse trinta desdobramentos sem perder a força do primeiro cartaz.',
     e:'Conceito, KV, 6 formatos de mídia digital, cartaz A2, wobbler e faixa de gôndola.',
     g:['Campanha','PDV','Varejo']},
    {t:'RUÍDO',y:'2025',c:'Design Autoral',r:'Projeto pessoal',
     d:'Seis pôsteres sobre poluição sonora urbana. Cada um usa a mesma família tipográfica submetida a um tipo de distorção diferente — repetição, corte, sobreposição, ruído, colapso e silêncio. É um estudo sobre até onde a letra aguenta ser maltratada e ainda comunicar.',
     e:'Série de 6 pôsteres A2, versão digital animada e caderno de processo.',
     g:['Pôster','Tipografia','Experimental']},
    {t:'PADARIA DA ESQUINA',y:'2024',c:'Social Media',r:'Design e planejamento visual',
     d:'Um mês de conteúdo para uma padaria que fotografava tudo no celular, sem estúdio. Em vez de esconder isso, construí uma grade de feed que usa a foto crua como material — recorte duro, cor chapada por cima e tipografia grande.',
     e:'Grade de feed de 30 dias, 8 templates editáveis de story e guia rápido de uso.',
     g:['Feed','Templates','Fotografia']},
    {t:'MOTOCLUBE 77',y:'2024',c:'Identidade Visual',r:'Emblema e aplicações',
     d:'Restrição dura desde o começo: uma cor, uma forma, tudo tinha que virar bordado. Isso matou qualquer degradê, sombra ou detalhe fino e obrigou o desenho a funcionar por silhueta — que é exatamente onde um emblema deve funcionar.',
     e:'Emblema principal, versão reduzida, patch bordado, adesivo, camiseta e bandeira.',
     g:['Emblema','Bordado','Merch']},
    {t:'LIGA DE VERÃO',y:'2026',c:'Direção de Arte',r:'Direção de arte e sistema visual',
     d:'Torneio esportivo amador com oito times e nenhum orçamento de produção. O sistema foi desenhado para ser montado por qualquer pessoa: uma numeração própria, uma paleta por time e um conjunto de placares que o organizador preenche no celular.',
     e:'Numeração tipográfica, paleta por time, uniforme, placar animado, capa de transmissão e cartaz de rodada.',
     g:['Sistema','Esporte','Motion','Tipografia']}
  ];

  var ov=document.getElementById('ov'),mX=document.getElementById('mX'),last=null;
  function open(i){
    var p=P[i],card=document.querySelector('.proj[data-p="'+i+'"]');
    document.getElementById('mArt').innerHTML=card.querySelector('.p-art svg').outerHTML;
    document.getElementById('mTitle').textContent=p.t;
    document.getElementById('mDesc').textContent=p.d;
    document.getElementById('mYear').textContent=p.y;
    document.getElementById('mCat').textContent=p.c;
    document.getElementById('mRole').textContent=p.r;
    document.getElementById('mDeliv').textContent=p.e;
    var tg=document.getElementById('mTags');tg.innerHTML='';
    p.g.forEach(function(g){var s=document.createElement('span');s.className='chip';s.textContent=g;tg.appendChild(s);});
    ov.classList.add('on');document.body.style.overflow='hidden';mX.focus();
  }
  function close(){ov.classList.remove('on');document.body.style.overflow='';if(last)last.focus();}
  document.querySelectorAll('.proj').forEach(function(b){
    b.addEventListener('click',function(){last=b;open(+b.dataset.p);});
  });
  mX.addEventListener('click',close);
  ov.addEventListener('click',function(e){if(e.target===ov)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('on'))close();});

  /* ---------- reveal ---------- */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){
      en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});
    },{rootMargin:'0px 0px -8% 0px',threshold:.05});
    document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*55+'ms';io.observe(el);});
  }else{
    document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});
  }

  /* ---------- cursor ---------- */
  if(!reduce&&window.matchMedia('(pointer:fine)').matches){
    var cur=document.getElementById('cur'),tr=document.getElementById('curT');
    var mx=innerWidth/2,my=innerHeight/2,tx=mx,ty=my,shown=false;
    addEventListener('mousemove',function(e){
      mx=e.clientX;my=e.clientY;
      if(!shown){shown=true;cur.style.opacity=1;tr.style.opacity=.9;}
      cur.style.transform='translate('+mx+'px,'+my+'px)';
    },{passive:true});
    (function loop(){
      tx+=(mx-tx)*.11;ty+=(my-ty)*.11;
      tr.style.transform='translate('+tx+'px,'+ty+'px) rotate('+(tx*.35)+'deg)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,.proj,.skill,.exp').forEach(function(el){
      el.addEventListener('mouseenter',function(){cur.classList.add('hot');});
      el.addEventListener('mouseleave',function(){cur.classList.remove('hot');});
    });
  }

  /* ---------- rolagem suave ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var el=document.querySelector(a.getAttribute('href'));
      if(el){e.preventDefault();el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});}
    });
  });
})();
