// Sticky Header
//6d5497275aa4a6b
//b00362ca97524d56d30e1387b64599d649e17ea9

$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

$(function() {
	/*smooth scroll*/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 600);
        return false;
      }
    }
  });
  $('#mission a').click(function() {
	if ($('#more').prop('visibility') == 'hidden'){
		$('#more').prop('visibility', 'visible')
		$('#more').animate({height: '480px'})
	} else {
		$('#more').prop('visibility', 'hidden')
		$('#more').animate({height: '0px'})
	}
  });
  /*toggle hospital*/
	$("#TGH").click(function() {
		if($("#detail").css("display") == "none"){
			$("#detail iframe").attr("src", "hospitalDetail/TGH.html");
			$("#detail").css("display", "block");
			$("#detail").animate({opacity:1});
		};
		return false;
	});
	$("#TWH").click(function() {
		if($("#detail").css("display") == "none"){
			$("#detail iframe").attr("src", "hospitalDetail/TWH.html");
			$("#detail").css("display", "block");
			$("#detail").animate({opacity:1});
		};
		return false;
	});
	$("#MSH").click(function() {
		if($("#detail").css("display") == "none"){
			$("#detail iframe").attr("src", "hospitalDetail/MSH.html");
			$("#detail").css("display", "block");
			$("#detail").animate({opacity:1});
		};
		return false;
	});
	$("#detail").click(function() {
		if($("#detail").css("display") == "block"){
			$("#detail").animate({opacity:0}, function(){
				$("#detail").css("display", "none");
				return false;
			});
		};
	});
	/*toggle pic*/
	$(".gallery a").click(function(e) {
		if($("#picture").css("display") == "none"){
			e.stopPropagation();
			var imgsrc = $(this).find("img").attr("src");
			$("#picture img").attr("src", imgsrc);
			$("#picture").css("display","block");
			$("#picture").animate({opacity:1});
		}
	});
	$("#picture").click(function() {
		if($("#picture").css("display") == "block"){
			$("#picture").animate({opacity:0}, function(){
				$("#picture").css("display", "none");
				return false;
			});
		};
	});
});
/* $.ajax({
    type: "GET",
    url: "https://api.imgur.com/3/gallery/album/Nmz4x",
    dataType: "text",
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Client-ID 6d5497275aa4a6b');
    },
    success: function(data) {
        var json = $.parseJSON(data);
        console.log(json);
    }
});
 */