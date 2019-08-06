



var scrollPosition = window.scrollY;
var headerHeight= document.querySelector('header').offsetHeight;
var windowHeight= screen.height;
var changeToOpaque = windowHeight - (headerHeight*2);

console.log(windowHeight);
console.log(changeToOpaque)



var logo= document.querySelector('.logo');

window.addEventListener('scroll', function() {
  

  console.log(scrollPosition);

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




/* not using for now
function pageHeight() {
  var scrollHeight= this.document.body.scrollHeight
}
*/

//Moving main text left


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
    console.log("gell")
  });
});

//changing images with scroll

var initialSrc = "https://www.awnash.com/wp-content/uploads/2014/05/aw-upholstery-custom-designer-pieces.jpg";
var firstScrollSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDalHYPkM5iaX2YwB6-o2yDNUZ4yyCb9UzTlKZLTaHUe73xGQbrg";
var secondScrollSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wXwdjo9Yt8SeYgi4CS2yoXozo87RJAxv7VQRhSeYbUR_ZnZQ";


















