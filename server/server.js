const express = require('express');
const socketIO = require('socket.io')
const path = require('path');
const http = require('http'); // se usa para manejar el socket.io ya que no funciona directamente con nodejs
const app = express();
let server = http.createServer(app); // creamos servidor con las app de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// este es el punto donde mantiene comunicacion con el backend

// si es configuracion dle soket en el propio server es F1 y como esta dividida cambiamos e F2
//hacemos exportable el socket
// let io = socketIO(server);F1
module.exports.io = socketIO(server); //F2
require('./sockets/socket'); //aqui requerimnos el socket como tal para que siega funcionando


//socket en el propio serber
/*
let io = socketIO(server);
 io.on('connection', (client) => {
    console.log('server: Usuario conectado con el servidor');

    // emite del lado del servidro al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administracion',
        mensaje: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', () => {
        console.log('server: Usuario desconectado del servidor');
    });
    //escuchar al cliente por el aldo del servidor escucha enviarMensaej dle index
    client.on('enviarMensaje', (mensaje, callback) => {
        // console.log(mensaje);
        // callback(); // con esto se eejcuata ler callback que esta en el lado del cliente
        //usualmente se unsa como una confirmacion de la recepcion del mensaje
        // el resultado se mostrara en el front
        if (mensaje.usuario) {
            callback({ resp: 'Todo salio bien' }) // ejecutamos funcion del lado del cliente y enviamos respuesta
        } else {
            callback({ resp: 'Todo salio mal !!!!!!!!!!!!' })
        }
    });
    // enviarmensaje es el nombre d elo que tiene que escuchar del cliente
    // el segundo elemento el objeto
}); */

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});