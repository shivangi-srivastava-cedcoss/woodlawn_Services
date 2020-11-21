		$(document).ready(function() {
		  $(window).on("scroll", function() {
		    if ($(window).scrollTop() >= 50) {
		      $(".nav-onscroll").addClass("compressed");
		      $(".logo").addClass("compressed");
		    } else {
		      $(".nav-onscroll").removeClass("compressed");
		        $(".logo").removeClass("compressed");
		    }
		  });
		});
		