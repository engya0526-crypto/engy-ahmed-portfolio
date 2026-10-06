
(function(){var n=document.getElementById('net');if(!n)return;var L=['Python','SQL','Excel','Data Cleaning','EDA','Visualization','Statistics','Pandas','T-SQL','GitHub'],h='',s='';
L.forEach(function(l,i){var a=i/L.length*6.283-1.57,x=50+40*Math.cos(a),y=50+38*Math.sin(a);s+='<line x1="50%" y1="50%" x2="'+x+'%" y2="'+y+'%" stroke="#4f8cff" stroke-opacity=".5" stroke-dasharray="4 4"/><circle cx="'+x+'%" cy="'+y+'%" r="4" fill="#35d0c0"/>';h+='<div class="nd" style="left:'+x+'%;top:'+y+'%">'+l+'</div>'});
n.innerHTML='<svg>'+s+'</svg>'+h+'<div class="nd c" style="left:50%;top:50%">Data Analyst</div>'})();
(function(){var d=document.createElement('dialog');d.className='lb';d.innerHTML='<img alt=""><p></p><button type="button">Close</button>';document.body.appendChild(d);
d.querySelector('button').onclick=function(){d.close()};d.onclick=function(e){if(e.target===d)d.close()};
document.querySelectorAll('.cg a').forEach(function(a){a.addEventListener('click',function(e){var i=a.querySelector('img');if(!i||!d.showModal)return;e.preventDefault();var m=d.querySelector('img');m.src=a.getAttribute('href');m.alt=i.alt;d.querySelector('p').textContent=i.alt;d.showModal()})});})();
