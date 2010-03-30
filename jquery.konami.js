(function() {
        var cheatPos=0,cheat=[38,38,40,40,37,39,37,39,66,65];
        $(document).bind('keydown',function(e) {
                if (e.keyCode == cheat[cheatPos]) ++cheatPos; else cheatPos = 0;
                if (cheatPos == cheat.length) $.event.trigger('konami');
        });

        $.konami = function(fn) {
                $(window).bind('konami', fn);
        };
})();
