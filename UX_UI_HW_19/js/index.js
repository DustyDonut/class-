function DropDown(el) {
    this.dd = el;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('hover', function (event) {
            $(this).toggleClass('dropdown menu');
            event.stopPropagation();
        });

        obj.dd.hover(function (event) {
            if (event.type == "mouseenter") {
                $(this).addClass('dropdown menu');
            }
            else { // mouseleave
                $(this).removeClass('dropdown menu');
            }
        });
    }
}

$(function () {
    var dd = new DropDown($('.dropdown'));


});