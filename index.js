let menu=document.getElementById('menu');
menu.addEventListener('click',(()=>{
    let drop=document.getElementsByClassName('dropdown');
    let x = window.matchMedia("(mix-width: 769px)")
    if( drop[0].style.display !="none" ){

        drop[0].style.display ="none";
    }else if( x.matches  ){
        drop[0].style.display ="none";

    }
     else{
        drop[0].style.display="block";
        document.body.style.overflowY="hidden";
    }
}))
function myFunction(x) {
    let drop=document.getElementsByClassName('dropdown');
    if (x.matches) { // If media query matches
        drop[0].style.display ="none";
    } 
  }
  var x = window.matchMedia("(min-width: 769px)")
  myFunction(x);
  x.addEventListener("change", function() {
    myFunction(x);
  });