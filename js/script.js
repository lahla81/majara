$(document).ready(function(){$(window).scroll(function(){100<=$(this).scrollTop()?$("#navBar").addClass("noTransparrent"):$("#navBar").removeClass("noTransparrent")}),$("a.scroll").on("click",function(n){var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},800,function(){})}),new WOW({mobile:!1}).init(),$(".navbar-nav li a").click(function(n){$(".navbar-collapse").collapse("hide")});var a=window.pageYOffset;window.onscroll=function(){var n=window.pageYOffset;document.getElementById("navBar").style.top=n<a?"0":"-85px",a=n}});