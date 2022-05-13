const express = require('express')
const banco = require('./dbConnection')


const app = express();

// Configurações do Express
app.set('view engine', 'ejs')
// app.use(express.json())

//nos permitirá extrair os dados do formulário adicionando-a à propriedade body da solicitação.
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./app/public'))

app.set('views', './app/views');

//Rotas
app.get('/', async (req, res) => {
    var id = req.query.id

    let result = await banco.query('SELECT * FROM tarefas WHERE id_tarefa = $1', [id])

    res.render('index', { tarefas: result.rows[0] })

    console.log(result)
})

//Adicionar tarefa
app.post('/', async (req, res) => {
    const tarefa = req.body.tarefa

    await banco.query('INSERT INTO tarefas(tarefa) VALUES ($1)', [tarefa], (err, result) => { res.redirect('/') })
});

//Deletar tarefa
app.get('/del/:id', async (req, res) => {

    const id = req.params.id
    res.redirect('/')

})

// Start Server
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando com express')
    console.log('Pressione CTRL+C para encerrar')
});