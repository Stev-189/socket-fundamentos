 // se usa var para generar una mayor compativilidad con los navegadores
 var socket = io();

 //escucha 
 // los on son para escuchar
 socket.on('connect', function() {
     console.log('cliente conectado al servidor');
 });
 socket.on('disconnect', function() {
     console.log('cliente perdimos la coneccion con servidor');
 });

 //los emit son para emitir informacion por parte del cliente al servidor
 socket.emit('enviarMensaje', {
     usuario: 'MaxiTurbo',
     mensaje: 'Hola Mundo'
         // }, function() {
         //     console.log('Se dispara el callback'); // confirma la recepcion dle mensaje
         // });
 }, function(resp) {
     console.log('Se dispara el callback'); // confirma la recepcion dle mensaje
     console.log('respuesta server: ', resp); // ademas el servidor no envia una respuesta resp
 });

 //escucha el mensaje del servidor enviarMensaje
 socket.on('enviarMensaje', (mensaje) => console.log('Desde el servidor:', mensaje))