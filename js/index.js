var clock;
var anio = '2015';
var mes = 'March';
var dia = '10';
var hora = '10:00:00';

$(document).ready(function () {
    var clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function () {
                $('.message').html('Ya llegó el casamiento!')
            }
        },
        showSeconds: true,
        language: 'es'
    });

    var casamiento = new Date(mes + " " + dia + ", " + anio + " " + hora).getTime() / 1000;
    var hoy = new Date().getTime() / 1000;
    var falta = (casamiento - hoy);
    clock.setTime(falta);
    clock.setCountdown(true);
    clock.start();

});