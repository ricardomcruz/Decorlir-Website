
var doc, bod, htm;
addEventListener('load', function(){


    var headerHeight= document.querySelector('header').offsetHeight;

  doc = document; bod = doc.body; htm = document.documentElement;
  addEventListener('scroll', function(){
    document.querySelector('header').style.backgroundColor = htm.scrollTop > headerHeight*3 ? 'rgb(220, 220, 220)' : 'transparent';
    document.querySelector('header').style.backgroundColor = htm.scrollTop > headerHeight*3 ? 'rgb(220, 220, 220)' : 'transparent';
    
  });
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

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 500)
      $(".entry").attr("src", firstScrollSrc).css("objectFit","initial").css("minHeight","initial");
   else if (value >550)
      $(".entry").attr("src", secondScrollSrc);
    else{
      $(".entry").attr("src", initialSrc).css("objectFit","cover").css("minHeight","100%");
    }
});


