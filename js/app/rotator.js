/*!
* Digicon Rotator
* @requires jQuery v1.7.2+
* @requires jQuery cycle v1.7.2+
* 
* Description
* 
* @author Digicon http://www.digicon.com.au/
*/
!(function($) {

    window.Digicon.Rotator = window.Digicon.Rotator || window.Digicon.BaseModule(function() {

        var _options = {
            fx: 'fade',
            speed: '500',
            timeout: '5000',
            next: '.next',
            prev: '.prev',
            pager: '.rotator-nav',
            activePagerClass: 'active',
        };
        
        return {
            init: function() {
                this.ify($('.rotator'));
            },
            ify: function($el, additionalOptions) {
                $.extend(_options, additionalOptions);
                $el.cycle(_options);
            }
        }
    }());

})(jQuery);