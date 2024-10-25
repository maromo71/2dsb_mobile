const express = require('express');
const app = express();
const port = 3000;


app.get('/tasks', (req, res) => {
    res.json(data.tasks);
});

app.post('/tasks', express.json(), (req, res) => {
    const task = req.body;
    data.tasks.push(task);
    res.status(201).json(task);
});


app.listen(port, () => {
    console.log(`Servidor ouvindo na porta http://localhost:${port}`);
});