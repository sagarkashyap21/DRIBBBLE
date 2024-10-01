let menu=document.getElementById("menu");
menu.addEventListener('click',(()=>{
    let icon=document.querySelector('#menu i');
    
    let drop=document.getElementsByClassName('dropdown');
    let x = window.matchMedia("(min-width: 769px)")
    if( drop[0].style.display !="none" ){
        drop[0].style.display ="none";
        icon.className ="fa-solid fa-bars"
        document.body.style.overflowY="scroll";
        
    }else if( x.matches  ){
        drop[0].style.display ="none";
        // icon.className ="fa-solid fa-bars"
    }
    else{
        drop[0].style.display="block";
        icon.className ="fa-solid fa-xmark"
        document.body.style.overflowY="hidden";
    }
    if(x.matches){
        icon.className ="fa-solid fa-bars"

    }
    // if(icon.className ="fa-solid fa-bars"){
    //     document.body.style.overflowY="scroll";

    // }
    // if(icon.className ="fa-solid fa-bars"){
    //     icon.className ="fa-solid fa-xmark"
    //     document.body.style.overflowY="hidden";
    // }else if(icon.className !="fa-solid fa-bars"){
    //     icon.className ="fa-solid fa-bars"
    //     document.body.style.overflowY="scroll";
    // }
    // else{
    //     icon.className ="fa-solid fa-bars"

    // }
   

}))
function myFunction(x) {
    let drop=document.getElementsByClassName('dropdown');
    let icon=document.querySelector('#menu i');
    if (x.matches) { // If media query matches
        drop[0].style.display ="none";
        icon.className="fa-solid fa-bars"
    } 
  }
  var x = window.matchMedia("(min-width: 769px)")
  myFunction(x);
  x.addEventListener("change", function() {
    myFunction(x);
  });

  