const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(express.json)

app.use(bodyParser.json());

app.get('/alunos', (request, response) => {
    const query = request.query
    console.log(query)
    return response.json(["Henrique", "Rafael", "William"])
})

app.post('/alunos', (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(["Henrique", "Rafael", "William", "Tayna"])
})

app.put('/alunos/:id', (request, response) => {
    const { id } = request.params;
    console.log(id)
    return response.json(["Gava", "Rafael", "William", "Tayna"])
})

app.patch('/alunos/:id', (request, response) => {
    return response.json(["Gava", "Rafael", "Wilian", "Tayna"])
})

app.delete('/alunos/:id', (request, response) => {
    return response.json(["Gava", "Rafael", "Wilian"])
})


app.listen(3333);