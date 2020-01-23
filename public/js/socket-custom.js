var socket = io();
// ON = escuchar eventos
socket.on("connect", function() {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
  console.log("Perdimos conexion con el servidor");
});

// EMIT = enviar informacion al server
socket.emit(
  "enviarMensaje",
  {
    usuario: 'Omar Mariot',
    message: "Hola mundo"
  },
  function(resp) {
    console.log("Respuesta from Server:", resp.response);
  }
);

// ON = escuchar informacion del server
socket.on("enviarMensaje", function(mensaje) {
  console.log("From Server:", mensaje);
});
