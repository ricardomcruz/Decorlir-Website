var x = document.querySelector("form");
var y = document.getElementById("gmap_canvas");

var btn1 = document.getElementById("btn_map");
var btn2 = document.getElementById("btn_form");


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