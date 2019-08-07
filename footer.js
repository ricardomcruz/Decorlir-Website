
var windowHeight= screen.height;


var pageHeight = document.documentElement.scrollHeight

var headerHeight= document.querySelector('header').clientHeight;


var changeFooter = pageHeight-windowHeight-headerHeight







var doc, bod, htm;
addEventListener('load', function(){


  doc = document; bod = doc.body; htm = document.documentElement;
  addEventListener('scroll', function(){
    
    document.querySelector('footer').style.backgroundColor = htm.scrollTop > 500 ? 'rgb(220, 220, 220)' : 'transparent';

    document.querySelector('#home').style.zIndex = htm.scrollTop > 500 ? '-2' : '-1';




    document.querySelector('footer').style.visibility = htm.scrollTop > changeFooter || htm.scrollTop < headerHeight ? 'visible' : 'hidden';

    

    

  });
});

