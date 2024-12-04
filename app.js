/*********************************************************************************************************************************************************************************
 * Objetivo: API para retornar dados de alunos e cursos - Missão 05 (final)
 * Data: 04/12/2024
 * Autor: Laura
 * Versão: 1.0
 * ********************************************************************************************************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const alunosCursos = require('./modulo/funcoes.js')

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/v1/lion-schoool/cursos', cors(), async function(request, response){

    let dados = alunosCursos.getListaDeCursos()

    response.status(200)
    response.json(dados)
})

app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){

    let curso = request.query.curso
    let status = request.query.status
    let disciplina = request.query.disciplina
    let ano = request.query.ano
    let dados

    if(status != undefined && status != ''){
        dados = alunosCursos.getstatusAluno(status)
    
    }else if(disciplina != '' && disciplina != undefined && curso != undefined && curso != ''){
        dados = alunosCursos.getStatusDisciplina(curso, disciplina)
    
    }else if(curso != undefined && curso != '' && ano != '' && ano != undefined){
        dados = alunosCursos.getAnoDeConclusao(curso, ano)
    }

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum aluno'})
    }

})

app.get('/v1/lion-school/alunos', cors(), async function(request, response){
    
    let dados = alunosCursos.getListaDeAlunos()

    response.status(200)
    response.json(dados)
})

app.get('/v1/lion-school/aluno/:matricula', cors(), async function(request, response){

    let numero = request.params.matricula

    let dados = alunosCursos.getNumMatriculaAluno(numero)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum aluno'})
    }
})

app.get('/v1/lion-school/alunos/cursos/:curso', cors(), async function(request, response){

    let sigla = request.params.curso

    let dados = alunosCursos.getcursoDoAluno(sigla)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado nenhum aluno'})
    }
})






app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})