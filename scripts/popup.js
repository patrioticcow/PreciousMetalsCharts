'use strict';

var a = ['silver', 'gold', 'platinum', 'palladium', 'rhodium'];
a.forEach(function (tab) {
    $('#' + tab + '_tab').on('click', function () {
        var images = $('#' + tab + '').find('img');
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace(/\btime=[^&]*/, 'time=' + new Date().getTime());
        }
    });
});