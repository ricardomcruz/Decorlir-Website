



var scrollPosition = window.scrollY;
var headerHeight= document.querySelector('header').offsetHeight;
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

//scrollify

const elItems = document.querySelectorAll('li');
const elSections = document.querySelectorAll('section');

// /* STATE MACHINE
// ============================= */
// const scrollMachine = {
//   initial: 'red',
//   states: {
//     red: {
//       on: {
//         panend: (event) => {
//           if (event.deltaY < 0) {
//             return 'orange';
//           }
//         }
//       }
//     },
//     orange: {
//       on: {
//         panend: (event) => {
//           if(event.deltaY > 0) {
//             return 'red';
//           }
//           if (event.deltaY < 0) {
//             return 'yellow';
//           }
//         }
//       }
//     },
//     yellow: {
//       on: {
//         panend: (event) => {
//           if(event.deltaY > 0) {
//             return 'orange';
//           }
//           if (event.deltaY < 0) {
//             return 'green';
//           }     
//         }
//       }
//     },
//     green: {
//       on: {
//         panend: (event) => {
//           if(event.deltaY > 0) {
//             return 'yellow';
//           }
//           if (event.deltaY < 0) {
//             return 'blue';
//           }
//         }
//       }
//     },
//     blue: {
//       on: {
//         panend: (event) => {
//           if(event.deltaY > 0) {
//             return 'green';
//           }
//           if (event.deltaY < 0) {
//             return 'purple';
//           }
//         }
//       }
//     },
//     purple: {
//       on: {
//         panend: (event) => {
//           if(event.deltaY > 0) {
//             return 'blue';
//           }
//         }
//       }
//     }
//   }
// }

// let currentState = scrollMachine.initial;

// /* TRANSITION FUNCTION
// ======================================================= */
// function transition(state, event) {
//   const t = scrollMachine.states[state]
//     .on[event.type] || state;
  
//   if(typeof t === 'function') {
//     return t(event) || state;
//   }
  
//   return t || state;
// }

// window.addEventListener('resize', event => {
//   console.log(window.innerHeight);
  
//   elSections.forEach(elSection => {
//     elSection.style.height = window.innerHeight;
//     console.log(elSection[0]("STYLE")[0])
//   })
// })


/* SCROLLIFY CONFIG
============================= */
$.scrollify({
  section: "section",
  sectionName: "name",
  easing: "easeOutExpo",
  scrollSpeed: 1000,
  offset: 0,
  scrollbars: false
});

/* EVENT LISTENERS
============================= */
elItems.forEach(elItem => {
  elItem.addEventListener('click', () => {
    $.scrollify.move(`#${elItem.classList[0]}`);
  })
})