(function ($) {
    $.fn.QAnimate = function (tween_name, opts) {
        var options = {
            beforeStart: function($object){

            },
            complete: function($object){

            }
        };

        function getAnimationTime($object){
            return parseInt($object.css('animation-duration')) * 1000;
        }

        function doAnimation(tween_name, $object){
            e.preventDefault();

            $object.addClass('animated ' + tween_name);
            $object.data('QAnimate').animated = true;
            $object.data('QAnimate').options.beforeStart($object);

            setTimeout(function(){
                $object.removeClass('animated ' + tween_name);
                $object.data('QAnimate').animated = false;
                $object.data('QAnimate').options.complete($object);
            }, getAnimationTime($object));
        }

        var methods = {
            init: function (tween_name, opts) {
                return this.each(function () {
                    var $this = $(this),
                        data = $this.data('QAnimate');

                    if (!data) {
                        $this.data('QAnimate', {
                            animated: false,
                            options: $.extend(options, opts)
                        });

                        doAnimation(tween_name, $this);
                    }
                });
            }
        };

        if(tween_name && !opts){
            return methods.init.apply(tween_name, {});
        }else if(tween_name && opts){
            return methods.init.apply(tween_name, opts);
        }else{
            $.error('QAnimate: first argument tween_name undefined!');
        }

        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('QAnimate: Invalid method!');
        }
    };
})(jQuery);