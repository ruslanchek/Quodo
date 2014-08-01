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

            var $this = $(this),
                animate_class = $(this).data('animation');

            $this.addClass(animate_class);

            setTimeout(function(){
                $this.removeClass(animate_class);
            }, parseInt($this.css('animation-duration')) * 1000);
        });
    };
};

$(function(){
    prettyPrint();

    var code = new Code();
    code.init();
});