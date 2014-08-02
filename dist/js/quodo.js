(function ($) {
    $.fn.QAnimate = function (tween_name, opts) {
        var animated = false,
            options = {
                ignore_animation: false,
                beforeStart: function($target, tween_name){

                },
                complete: function($target, tween_name){

                }
            };

        function getAnimationTime($target){
            return parseInt($target.css('animation-duration')) * 1000;
        }

        function doAnimation(tween_name, $target){
            $target.addClass('animated');
            $target.data('QAnimate').options.beforeStart($target, tween_name);

            setTimeout(function(){
                $target.addClass(tween_name);
                animated = true;

                setTimeout(function(){
                    $target.removeClass('animated ' + tween_name);
                    animated = false;
                    $target.data('QAnimate').options.complete($target, tween_name);
                }, getAnimationTime($target));
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