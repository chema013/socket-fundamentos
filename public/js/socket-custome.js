var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor.');
});

//escucha un evento
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');
});

//Envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});