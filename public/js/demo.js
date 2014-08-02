var Code = function(){
    this.init = function(){
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

        $('.animation-test').on('dblclick', function(e){
            e.preventDefault();
            $(this).QAnimate($(this).data('animation'));
        });
    };
};

$(function(){
    prettyPrint();

    var code = new Code();
    code.init();
});