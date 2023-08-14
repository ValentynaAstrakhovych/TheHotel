'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('hut', 'hut.html'),
            new Route('area', 'area.html'),
            new Route('booking', 'booking.html'),
            new Route('about', 'about.html'),
            new Route('faq', 'faq.html'),
        ]);
    }
    init();
}());


