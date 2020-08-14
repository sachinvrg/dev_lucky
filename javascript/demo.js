function check(){

   var inp=document.getElementById("code");
   var bdy=document.getElementById("bodi");

   if(inp.value==1234)
   {
      bdy.innerHTML="<h1>welcome</h1>";
   }
   else{
      inp.style.backgroundColor='rgb(248, 151, 151';
   }
}

function clear(){
var inp=document.getElementById("code");
inp.value=' ';
inp.style.backgroundColor='white';
}
var clr=document.getElementById("clean");
clr.addEventListener("click",clear);



