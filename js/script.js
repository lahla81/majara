$(document).ready(function(){$(window).scroll(function(){50<=$(this).scrollTop()?$("#navBar").addClass("noTransparrent"):$("#navBar").removeClass("noTransparrent")}),$("a.scroll").on("click",function(a){a.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},1400,function(){})}),$(".navbar-nav li a").click(function(a){$(".navbar-collapse").collapse("hide")}),$(function(){$("#contact-form").validate()})});