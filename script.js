var f=document.getElementById('qf'),ok=document.getElementById('ok');
f.addEventListener('submit',function(e){e.preventDefault();
var b=f.querySelector('button');b.disabled=true;b.textContent='Sending...';ok.style.display='none';
fetch('https://formsubmit.co/ajax/allridemobileservices@gmail.com',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
.then(function(r){return r.json()}).then(function(d){
if(d.success==='true'||d.success===true){f.reset();ok.style.background='';ok.textContent='Thanks! We\u2019ll reach out shortly.';}
else{throw new Error('fail')}})
.catch(function(){ok.style.background='#fde8e8';ok.style.color='#7f1d1d';ok.textContent='Sorry, something went wrong. Please call or text 727 277 6888.';})
.finally(function(){ok.style.display='block';b.disabled=false;b.textContent='Request My Quote';});});
