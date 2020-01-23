const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenidos al Chat'
    });

    client.on('disconnect', ()=>{
        console.log('usuario desconectado');
    });

    // Escuchar mensaje del cliente
    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);

        //  Enviar a todos
        client.broadcast.emit('enviarMensaje', data);
        // if ( mensaje.usuario ) {
        //     callback({
        //         response: 'Recibido correctamente en el servidor'
        //     });
        // } else {
        //     callback({
        //         response: 'Recibido incorrectamente'
        //     });
        // }

    });
});
