const header = {
    elem: $("#header-strip-back"),
    originalOffset: 0,
    stickyClassName: 'sticky'
};

const StickHeader = function() {
    if ($(window).scrollTop() >= header.originalOffset) {
        if (!header.elem.hasClass(header.stickyClassName)) {
            header.elem.addClass(header.stickyClassName);
        }
    } else if (header.elem.hasClass(header.stickyClassName)) {
        header.elem.removeClass(header.stickyClassName);
    }
};

if (header.elem) {
    header.originalOffset = header.elem.offset().top;
    $(window).scroll(StickHeader);
    StickHeader();
}
