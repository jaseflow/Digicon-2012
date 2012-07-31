/*!
* Digicon Navigation
* @requires jQuery v1.7.2+
*
* Description
* 
* @author ...
*/
!(function($) {

	window.Digicon.Navigation = window.Digicon.Navigation || window.Digicon.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('body');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', '.show-menu', this.events.showMenu);
			},
			events: {
				showMenu: function(e) {
					$('.mobile-wrap').toggleClass('nav-on');
					$('.mobile-nav').fadeToggle();
				}
			}
		}
	}());

})(jQuery);