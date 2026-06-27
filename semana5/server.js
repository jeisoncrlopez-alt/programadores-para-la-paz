const express = require('express');
const app = express();

// Middleware para que el servidor pueda entender datos en formato JSON
app.use(express.json());

// Ruta raíz (GET)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo (GET)
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetros (GET)
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta para recibir reportes comunitarios (POST) - Pregunta 8
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Configuración del puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});