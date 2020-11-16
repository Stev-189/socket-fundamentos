const { io } = require('../server')


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
    client.on('enviarMensaje', (data, callback) => {
        // se cambio mensaje  a data
        // console.log(mensaje);
        // callback(); // con esto se eejcuata ler callback que esta en el lado del cliente
        //usualmente se unsa como una confirmacion de la recepcion del mensaje
        // el resultado se mostrara en el front
        // if (mensaje.usuario) {
        //     callback({ resp: 'Todo salio bien' }) // ejecutamos funcion del lado del cliente y enviamos respuesta
        // } else {
        //     callback({ resp: 'Todo salio mal !!!!!!!!!!!!' })
        // }
        console.log(data);
        // client.emit('enviarMensaje', data)// es una comunicaicon servidor a 1 cliente que envio mensaje
        client.broadcast.emit('enviarMensaje', data); // es una comunicaicon servidro a todos los clientes
    });
    // enviarmensaje es el nombre d elo que tiene que escuchar del cliente
    // el segundo elemento el objeto
});