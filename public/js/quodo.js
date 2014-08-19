(function ($) {
    $.fn.QAnimate = function (tween_name, opts) {
        var animated = false,
            options = {
                ignore_animation: false,
                duration: 1000,
                beforeStart: function($target, tween_name){

                },
                complete: function($target, tween_name){

                }
            };

        function doAnimation(tween_name, $target){
            var o = $target.data('QAnimate').options;

            $target.addClass('animated').css({
                '-webkit-animation-duration'    : o.duration,
                '-moz-animation-duration'       : o.duration,
                '-o-animation-duration'         : o.duration,
                'animation-duration'            : o.duration
            });

            o.beforeStart($target, tween_name);

            setTimeout(function(){
                $target.addClass(tween_name);
                animated = true;

                setTimeout(function(){
                    $target.removeClass('animated ' + tween_name);
                    animated = false;
                    o.complete($target, tween_name);
                }, o.duration);
            }, 10);
        }

        var methods = {
            init: function (tween_name, opts) {
                return this.each(function () {
                    var $this = $(this);

                    $this.data('QAnimate', {
                        options: $.extend(options, opts)
                    });

                    if(!animated || $this.data('QAnimate').options.ignore_animation === true) {
                        doAnimation(tween_name, $this);
                    }
                });
            }
        };

        if(tween_name && !opts){
            return methods.init.apply(this, arguments);
        }else if(tween_name && opts){
            return methods.init.apply(this, arguments);
        }else{
            $.error('QAnimate: first argument tween_name undefined!');
        }
    };
})(jQuery);