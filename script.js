var f=document.getElementById('qf'),ok=document.getElementById('ok');
function say(m,bad){ok.style.display='block';ok.style.background=bad?'#fde8e8':'';ok.style.color=bad?'#7f1d1d':'';ok.textContent=m;}
function es(){return document.documentElement.lang==='es';}
f.addEventListener('submit',function(e){e.preventDefault();
var b=f.querySelector('button[type=submit]'),lbl=b.textContent;b.disabled=true;b.textContent=es()?'Enviando...':'Sending...';ok.style.display='none';
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
.then(function(r){return r.json()}).then(function(d){
 if(d.success){f.reset();say(es()?'\u00a1Gracias por contactarnos! Hemos recibido tu solicitud y nos comunicaremos contigo lo antes posible.':'Thank you for contacting us! We\u2019ve received your request and will get back to you as soon as possible.');}else{throw new Error(d.message)}})
.catch(function(){say(es()?'Lo sentimos, algo sali\u00f3 mal. Llama o env\u00eda un mensaje al 727 277 6888.':'Sorry, something went wrong. Please call or text 727 277 6888.',true);})
.finally(function(){b.disabled=false;b.textContent=lbl;});});

(function(){
function isOpen(){
 var d;try{d=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date());}catch(e){d=null;}
 var wd,h,m;
 if(d){var o={};d.forEach(function(p){o[p.type]=p.value;});wd=o.weekday;h=parseInt(o.hour,10);m=parseInt(o.minute,10);}
 else{var n=new Date();wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][n.getDay()];h=n.getHours();m=n.getMinutes();}
 var mins=h*60+m;return wd!=='Sun'&&mins>=480&&mins<1080;
}
function paint(){
 var open=isOpen(),es=document.documentElement.lang==='es';
 var label=open?(es?'Abierto ahora':'Open now'):(es?'Cerrado ahora':'Closed now');
 document.querySelectorAll('.tl').forEach(function(s){s.setAttribute('data-s',open?'open':'closed');var t=s.querySelector('title');if(t)t.textContent=label;s.setAttribute('aria-label',label);});
}
paint();setInterval(paint,30000);
try{new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});}catch(e){}
window.__paintHours=paint;
})();
