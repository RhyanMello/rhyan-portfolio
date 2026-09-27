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
    {t:'VFA — VIRTUAL FOOTBALL ASSOCIATION',y:'2026',c:'Desenvolvimento full-stack',
     r:'Projeto solo — concepção, escopo, banco, back-end, front-end e identidade visual',
     u:'https://github.com/firminodaborracharia/VFA---Virtual-Football-Association',
     d:'Site oficial e sistema de gestão da VFA, uma liga amadora de futebol 6v6 no Roblox que eu organizo. Ele administra quatro ligas nacionais, os mata-matas de cada uma, Libertadores, Champions League e a decisão Intercontinental — com tabela, artilharia, assistências e recordes que se recalculam sozinhos a cada resultado registrado.\n\nA regra que sustenta o projeto inteiro é que estatística não se edita, se calcula: a fonte da verdade são as partidas, as escalações e os eventos, e todo o resto é cache recalculado por um motor de funções puras. Isso elimina de vez a classe de bug em que a classificação e as partidas discordam entre si.\n\nNada de regra fica preso no código. Pontuação, critérios de desempate e a ordem deles, número de clubes e turnos, quantos classificam para cada faixa da tabela, formato do mata-mata — tudo mora no banco e é editado pelo painel. No desempate por confronto direto entre três ou mais clubes, o sistema monta uma minitabela só com os jogos entre os envolvidos.',
     e:'Nove páginas públicas, painel administrativo completo, API REST pública e administrativa, busca global, integração com a API pública do Roblox (avatar, display name e verificação, com cache e tolerância a falha), sistema de notícias com publicação agendada e motor de classificação coberto por 17 verificações automatizadas.',
     k:[['FRONT-END','Next.js 16 (App Router)','React 19','TypeScript estrito','Tailwind CSS v4','Framer Motion','Recharts'],
        ['BACK-END','Route Handlers','Auth.js v5','Discord OAuth2','Zod','RBAC em 3 camadas'],
        ['DADOS','PostgreSQL','Drizzle ORM','migrations SQL versionadas','audit logs'],
        ['INFRA','Vercel','cron diário','rate limiting','ESLint + Prettier']],
     g:['Full-stack','Next.js','TypeScript','PostgreSQL','Auth','API REST']},
    {t:'EPA 2025',y:'2025',c:'Direção de Arte',r:'Direção de arte e cartaz',
     d:'Cartaz do Encontro de Projetos Acadêmicos do curso de Desenvolvimento de Sistemas. O conceito saiu da própria chamada do evento — "uma viagem ao universo de uma outra perspectiva" — então a peça sobrepõe carta celeste, diagrama renascentista e um estouro de luz no centro. O Homem Vitruviano ocupa o lugar do zero em 2025, que é o detalhe que amarra o tema do curso ao tema da imagem.',
     e:'Cartaz de divulgação e versão adaptada para stories, com data, local e chamada.',
     g:['Evento','Cartaz','Tipografia','Composição']},
    {t:'ETEC SALES GOMES 90 ANOS',y:'2025',c:'Eventos',r:'Design e composição',
     d:'Divulgação dos 90 anos da escola, feita pelo 1º Desenvolvimento de Sistemas. Como o assunto é história, a peça foi montada como um álbum de recordação em vez de um cartaz institucional: papel rasgado, fita crepe, carimbo de correio e fotos de arquivo da própria escola coladas sobre um fundo terroso.',
     e:'Arte vertical para stories com data, sala e chamada de portas abertas.',
     g:['Evento','Colagem','Institucional']},
    {t:'DOE 1 LITRO DE LEITE',y:'2025',c:'Publicidade',r:'Design e redação da peça',
     d:'Anúncio da campanha de arrecadação do 3º MTEC-DS em parceria com o Supermercado Marcon. A tipografia pesada e inclinada ocupa quase toda a peça para funcionar de longe, dentro do mercado. A informação que mais gera erro na doação — a validade do leite — foi tirada do texto corrido e jogada numa tarja vermelha atravessada, junto com uma seta apontando para ela.',
     e:'Anúncio para ponto de venda e adaptação para redes sociais.',
     g:['Campanha','Social','Tipografia','PDV']},
    {t:'CORUJÃO 2026',y:'2026',c:'Publicidade',r:'Direção de arte e diagramação',
     d:'Segunda peça da campanha de doação de leite, agora para o Corujão 2026. A direção é mais limpa que a da peça anterior, de propósito: tipografia de madeira em caixa alta ocupando o topo, o produto na mão como prova concreta do que se pede, e QR code do PIX no canto para quem prefere doar em dinheiro em vez de carregar caixa.',
     e:'Cartaz vertical com QR de PIX, texto de orientação e selo da turma.',
     g:['Campanha','Social','Cartaz']},
    {t:'SONY DUALSENSE',y:'2025',c:'Publicidade',r:'Peça conceitual — não é material oficial da Sony',
     d:'Exercício de publicidade de produto com uma ideia só, executada até o fim: o O de SONY vira o corpo do controle e os dois DualSense atravessam a letra como se estivessem saindo dela. Todo o resto da peça foi mantido em silêncio — fundo de uma cor, texto pequeno na lateral e a lista de recursos numa linha no rodapé — para a ideia tipográfica não disputar espaço com nada.',
     e:'Cartaz A3 e versão para feed.',
     g:['Conceitual','Produto','Tipografia']}
  ];

  var ov=document.getElementById('ov'),mX=document.getElementById('mX'),last=null;
  function open(i){
    var p=P[i],card=document.querySelector('.proj[data-p="'+i+'"]');
    document.getElementById('mArt').innerHTML=card.querySelector('.p-art').firstElementChild.outerHTML;
    document.getElementById('mTitle').textContent=p.t;
    var dsc=document.getElementById('mDesc');dsc.innerHTML='';
    p.d.split('\n\n').forEach(function(par){var e=document.createElement('p');e.textContent=par;e.style.marginBottom='12px';dsc.appendChild(e);});
    document.getElementById('mYear').textContent=p.y;
    document.getElementById('mCat').textContent=p.c;
    document.getElementById('mRole').textContent=p.r;
    document.getElementById('mDeliv').textContent=p.e;
    var sw=document.getElementById('mStackWrap'),st=document.getElementById('mStack');
    st.innerHTML='';sw.hidden=!p.k;
    if(p.k)p.k.forEach(function(grp){
      var row=document.createElement('div');row.className='m-grp';
      var lb=document.createElement('b');lb.textContent=grp[0];row.appendChild(lb);
      grp.slice(1).forEach(function(tech){var s=document.createElement('span');s.className='tech';s.textContent=tech;row.appendChild(s);});
      st.appendChild(row);
    });
    var lk=document.getElementById('mLink');lk.hidden=!p.u;if(p.u)lk.href=p.u;
    var tg=document.getElementById('mTags');tg.innerHTML='';
    p.g.forEach(function(g){var s=document.createElement('span');s.className='chip'+(g==='Conceitual'?' conc':'');s.textContent=g;tg.appendChild(s);});
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
