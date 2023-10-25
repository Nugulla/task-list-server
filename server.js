const express = require('express');
const app = express();

// Middleware para permitir solicitudes JSON
app.use(express.json());

// Lista de tareas
const tasks = [
  {
    "id": "01",
    "isCompleted": false,
    "name": "Bañar",
    "description": "Bañar mi perro",
  },
  {
    "id": "02",
    "isCompleted": false,
    "name": "Tareas curso",
    "description": "Terminar tarea express",
  },
  {
    "id": "03",
    "isCompleted": false,
    "name": "Compras",
    "description": "Ir de compras",
  },
  {
    "id": "04",
    "isCompleted": true,
    "name": "Leer",
    "description": "Cartilla escuela sabatica",
  }


  // Agrega más tareas si lo deseas
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const tareanueva = req.body;
  tasks.push(tareanueva);
  console.log("*****", tareanueva);
  res.status(200).send({
    message: 'Tarea agregada correctamente',

  });
  
})

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const index = tasks.findIndex(task => task.id === id);
  if (tasks){
    res.status(200).json(tasks[index]);

  }else{
    res.status(404).json({message: 'No se encontró la tarea'});
  }
  
})

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id === id);
  tasks.splice(index, 1);
  res.json(tasks); 
})

// Inicia el servidor en el puerto 3000
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});