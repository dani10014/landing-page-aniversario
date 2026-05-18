document.addEventListener("DOMContentLoaded",()=>{let o=document.querySelectorAll(".cronometro");var e=(new Date).getFullYear();let t=new Date(e,8,16,22,0,0);function r(){var e=new Date,e=t-e;if(e<=0)o.innerHTML="É HOJE! 🎂🎵",clearInterval(a);else{let t=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);o.forEach(e=>{e.innerHTML=`
            ${t}d : 
            ${r.toString().padStart(2,"0")}h : 
            ${a.toString().padStart(2,"0")}m : 
            ${n.toString().padStart(2,"0")}s`})}}r();let a=setInterval(r,1e3)});