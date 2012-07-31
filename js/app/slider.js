/*!
* Digicon Slider
* @requires jQuery v1.7.2+
*
* Description
* 
* @author ...
*/
!(function($) {

	window.Digicon.Slider = window.Digicon.Slider || window.Digicon.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('.rotator');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', '.hero-nav a', this.events.changeActive);
				$el.on('click', '.hero-nav a', this.events.displaySlide);
			},
			events: {
				changeActive: function(e) {
					$('.hero-nav .active').removeClass('active');
					$(this).parent('li').addClass('active');
				},
				displaySlide: function(e) {
					$slides.removeClass('active slider-transition');
					var slideIndex = $(this).attr('rel');
					var $slide = $($slides.get(slideIndex));
					$slide.addClass('active');
					var style = $slide.attr('style');
					style = style.replace(/translateZ\(-?(\d*)px\)/g, function($0, $1){  return 'translateZ(' + $1 + 'px)'} );
					console.log(style);

					$slide.prevAll('.slider-item').addClass('slider-transition');
					
					$('.slider').attr('style',style);

					previousSlideIndex = $previousSlides.length;
				}
			}
		}
	}());

})(jQuery);