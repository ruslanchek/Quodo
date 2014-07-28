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
    };
};

$(function(){
    prettyPrint();

    var code = new Code();
    code.init();
});