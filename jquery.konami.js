$.konami = (function() {

    var cheatPos = 0,
        konami_event = 'konami',
        konami = function(fn) {
            $(window).bind(konami_event, fn);
        };
        
    konami.cheat = [38,38,40,40,37,39,37,39,66,65];
    
    $(document).bind('keydown',function(e) {
        if (e.keyCode == konami.cheat[cheatPos]) ++cheatPos; else cheatPos = 0;
        if (cheatPos == konami.cheat.length) $.event.trigger(konami_event);
    });
    return konami;
})();
