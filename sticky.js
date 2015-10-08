  if ($('.sideBar.l--sideBar').length) {
	  var sticky = function() {
	  var top = $('.sideBar.l--sideBar').offset().top - parseFloat($('.wrapper.twocolumnpage').css('paddingTop')),
		sidebarHeight = $('.sideBar.l--sideBar > h4').outerHeight() + $('.sideBar.l--sideBar > nav').outerHeight(),
		boxBottom = $(document).height() - $('footer').outerHeight() - sidebarHeight - 164;
	  	$(window).scroll(function (event) {
	       // what the y position of the scroll is
				var y = $(this).scrollTop();
				// whether that's below the form

				if (boxBottom <= y) {
					$('.wrapper--section.twocolumnpage')
						.removeClass('sidebar-fixed')
						.addClass('sidebar-bottom-sticky');
				} else if (y >= top) {
					// if so, ad the fixed class
					$('.wrapper--section.twocolumnpage')
						.addClass('sidebar-fixed')
						.removeClass('sidebar-bottom-sticky')
				} else {
					// otherwise remove it
					$('.wrapper--section.twocolumnpage')
						.removeClass('sidebar-fixed')
						.removeClass('sidebar-bottom-sticky')
				}
	  	});
	  }
	  sticky();
	}