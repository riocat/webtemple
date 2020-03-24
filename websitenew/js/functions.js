jQuery(function($) {

	//Initiat WOW JS
	new WOW().init();

	$(document).ready( function() {

		//home page
		$("html, body").animate({ scrollTop: 0 }, 10);

		$('#carousel-slider').carousel({
			interval: 1000 * 15
		});

		$('#group-slider').carousel({
			interval: 1000 * 60 * 60 * 24
		});


		//product page
		if ($.url) {
			var p = $.url(location.href).param('p');
			$('.product-tab .btn-group label').each(function(){
				var $this = $(this);
				var target = $this.attr('product-target');

				if (p) {
					if(target == '#'+p) {
						$this.addClass('active');
						$(target).addClass('in');
					} else {
						$this.removeClass('active');
						$(target).removeClass('in');
					}
				}

				$this.click(function(event) {
					var active = $('#products').find('.collapse.in').first();
					if (active && '#'+active.attr('id') != target) {
						active.collapse('hide');
						$(target).collapse('show');
					}
				});
			});
		}


	});

});