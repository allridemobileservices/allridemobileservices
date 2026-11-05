var f=document.getElementById('qf'),ok=document.getElementById('ok');
function say(m,bad){ok.style.display='block';ok.style.background=bad?'#fde8e8':'';ok.style.color=bad?'#7f1d1d':'';ok.textContent=m;}
function es(){return document.documentElement.lang==='es';}
f.addEventListener('submit',function(e){e.preventDefault();
var b=f.querySelector('button[type=submit]'),lbl=b.textContent;b.disabled=true;b.textContent=es()?'Enviando...':'Sending...';ok.style.display='none';
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
.then(function(r){return r.json()}).then(function(d){
 if(d.success){f.reset();say(es()?'\u00a1Gracias! Nos comunicaremos pronto.':'Thanks! We\u2019ll reach out shortly.');}else{throw new Error(d.message)}})
.catch(function(){say(es()?'Lo sentimos, algo sali\u00f3 mal. Llame o env\u00ede un mensaje al 727 277 6888.':'Sorry, something went wrong. Please call or text 727 277 6888.',true);})
.finally(function(){b.disabled=false;b.textContent=lbl;});});
