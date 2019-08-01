$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});



document.getElementById("nav-icon3").addEventListener("click", openMenu);

document.getElementById("drop_menu").addEventListener("click", openMenu);
document.getElementById("drop_menu").addEventListener("click", ham);


function openMenu(){
	var menu=document.getElementById("drop_menu");
	menu.classList.toggle("open_menu");
}

function ham(){
	var ham=document.getElementById("nav-icon3");
	ham.classList.toggle("open");
}