



var scrollPosition = window.scrollY;
var headerHeight= document.querySelector('header').clientHeight;
var windowHeight= screen.height;
var changeToOpaque = windowHeight - (headerHeight*2);







var logo= document.querySelector('.logo');

window.addEventListener('scroll', function() {
  
  
 
  
  scrollPosition = window.scrollY;
  
  if (scrollPosition >= changeToOpaque) {
    document.querySelector('header').classList.add('opaque');
    document.getElementById("logo").src = "img/estudonovologo.png";
    
    $('#logo').css({
      '-moz-transform': 'rotate(0deg)',
      '-webkit-transform': 'rotate(0deg)',
      '-o-transform': 'rotate(0deg)',
      '-ms-transform': 'rotate(0deg)',
      'transform': 'rotate(0deg)',
      'height':'50px'
    });
    
    
    
  } else {
    document.querySelector('header').classList.remove('opaque');
    document.getElementById("logo").src = "img/logo.png";
    
    
    $('#logo').css({
      'height':'60px'
    });
    
    
    
    // get the variable of how far we've scrolled from the top
    var offset = $(window).scrollTop();
    offset     = offset * 0.1;
    
    // add css transform with the offset variable
    $('#logo').css({
      '-moz-transform': 'rotate(' + offset + 'deg)',
      '-webkit-transform': 'rotate(' + offset + 'deg)',
      '-o-transform': 'rotate(' + offset + 'deg)',
      '-ms-transform': 'rotate(' + offset + 'deg)',
      'transform': 'rotate(' + offset + 'deg)',
    });
    
    
    
    
    
  }
  
});




//Moving Main Sentence left


$(document).ready(function () {
  var $horizontal = $('.js_left');
  
  $(window).scroll(function () {
    var s = $(this).scrollTop(),
    d = $(document).height(),
    c = $(this).height();
    
    scrollPercent = (s / (d - c));
    
    var position = (scrollPercent*5 * ($(document).width() - $horizontal.width()));
    
    $horizontal.css({
      'left': position
    });
    
    $horizontal.css({
      'padding-left': "5%"
    });
    
  });
});













//changing images with scroll








//Hover service icons list



function changeIcon(tag,image){


document.getElementById(tag).addEventListener("mouseover", mouseOver);
document.getElementById(tag).addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("a-img").src = image;

}



function mouseOut() {
  document.getElementById("a-img").src = "img/logo.png";
  
}

}

changeIcon("a1","img/2.png")
changeIcon("a2","img/5.png")
changeIcon("a3","img/image-test.jpg")
changeIcon("a4","img/image-test.jpg")
changeIcon("a5","img/4.png")
changeIcon("a6","img/3.png")
changeIcon("a7","img/image-test.jpg")
changeIcon("a8","img/1.png")



//changing background images



var initialSrc = "https://www.awnash.com/wp-content/uploads/2014/05/aw-upholstery-custom-designer-pieces.jpg";
var firstScrollSrc = "https://s3.envato.com/files/236654292/Fabric%20Mobile%20Ed.02/T_Fabric_01_BC.jpg";
var secondScrollSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wXwdjo9Yt8SeYgi4CS2yoXozo87RJAxv7VQRhSeYbUR_ZnZQ";


var pageHeight = document.documentElement.scrollHeight

window.addEventListener('scroll', function() {
  

  
  
  if (scrollPosition <= windowHeight) {

    
    document.getElementById("hero_img").src = initialSrc;
    document.getElementById("hero_img").style.objectFit = "cover";
    document.getElementById("hero_img").style.minHeight = "100vh";

  } else if (scrollPosition*2 > windowHeight) {
    
    
    document.getElementById("hero_img").src = firstScrollSrc;
    
    /*document.getElementById("hero_img").style.objectFit = "unset";
    document.getElementById("hero_img").style.minHeight = "auto";
    */
    
  }
  
});



doc = document; bod = doc.body; htm = document.documentElement;








