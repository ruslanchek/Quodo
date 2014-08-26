var Demo = function(){
    this.init = function(){
        prettyPrint();

        $('code').each(function(){
            var $code = $(this),
                $btn = $('<div/>');

            $btn.addClass('code-show');
            $btn.html('<a href="#">Code</a>');
            $code.before($btn);
            $btn.find('a').on('click', function(e){
                $code.slideToggle(200);
                e.preventDefault();
            });
        });

        $('.animation-test').on('dblclick touchend', function(e){
            e.preventDefault();
            $(this).QAnimate($(this).data('animation'));
        });
    };

    this.init();
};

$(function(){
    var demo = new Demo();
});