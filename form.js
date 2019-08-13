var x = document.querySelector("form");
var y = document.getElementById("gmap_canvas");
var z = document.getElementById("map");
var btn1 = document.getElementById("btn_map");
var btn2 = document.getElementById("btn_form");
var btn3 = document.getElementById("toggleMapFormBtn");

function toggleForm(){
    
    
        x.classList.toggle("form_show");

        y.classList.toggle("form_show");
        if (btn2.innerHTML == "Pedir Orçamento Gratuito") {
            btn2.innerHTML = "Ocultar Formulário";
          } else {
            btn2.innerHTML = "Pedir Orçamento Gratuito";
          }
    

        
   
}



function toggleMap(){
    
    
    y.classList.toggle("form_show");
    if (btn1.innerHTML == "ver mapa") {
        btn1.innerHTML = "ocultar mapa";
      } else {
        btn1.innerHTML = "ver mapa";
      }

}


function toggleMapForm(){
    
    
  z.classList.toggle("form_show");
  x.classList.toggle("form_show");

  if (btn3.innerHTML == "Ver Mapa") {
      btn3.innerHTML = "Pedir Orçamento Gratuito";
    } else {
      btn3.innerHTML = "Ver Mapa";
    }

}