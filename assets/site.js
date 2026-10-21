(function(){
  var d=document,nav=d.getElementById('nav'),bar=d.getElementById('bar'),bg=d.getElementById('burger'),mn=d.getElementById('mnav');
  function onScroll(){
    var y=window.scrollY,h=d.documentElement.scrollHeight-window.innerHeight;
    if(nav)nav.classList.toggle('solid',y>40);
    if(bar)bar.style.width=(h>0?Math.min(100,y/h*100):0)+'%';
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(bg&&mn){
    var toggle=function(open){
      bg.setAttribute('aria-expanded',open);mn.classList.toggle('open',open);
      d.body.style.overflow=open?'hidden':'';
    };
    bg.addEventListener('click',function(){toggle(bg.getAttribute('aria-expanded')!=='true')});
    mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){toggle(false)})});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false)});
  }
  var els=d.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();
/* Google Analytics 4 (The Seascape) */(function(){var id='G-VCNP031ZHK';if(window.__ga4)return;window.__ga4=1;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(s);gtag('js',new Date());gtag('config',id);})();
