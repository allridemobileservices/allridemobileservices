var f=document.getElementById('qf'),ok=document.getElementById('ok');
if(/[?&]sent=1/.test(location.search)){ok.style.display='block';ok.textContent='Thanks! Your request was sent. We\u2019ll reach out shortly.';}
f.addEventListener('submit',function(){var b=f.querySelector('button');b.disabled=true;b.textContent='Sending...';});
