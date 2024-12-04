/*********************************************************************************************************************************************************************************
 * Objetivo: Missão 05 - Final
 * Data: 27/11/2024
 * Autor: Laura
 * Versão: 1.0
 * ********************************************************************************************************************************************************************************/

var listaDecursos = require('./cursos')
var listaDealunos = require('./alunos')


const getListaDeCursos = function(){
    let listacursos = listaDecursos
    let lista = {}
    let curso = []
    let status = false

    console.log(listacursos)
    
    listacursos.cursos.forEach(function(item){
        status = true
        curso.push(item)
    })

    lista.cursosDisponiveis = curso
    lista.quantidade = curso.length

    if(status = true){
        return lista
    }else{
        return status
    }
}

const getListaDeAlunos = function(){
    let listaAlunos = listaDealunos
    let curso = []
    let status = false

    // console.log(listaAlunos)

    listaAlunos.alunos.forEach(function(item){
        status = true
        let informacao = {}
        informacao.foto = item.foto
        informacao.nome = item.nome
        informacao.matricula = item.matricula
        informacao.sexo = item.sexo
        informacao.curso = item.curso
        informacao.status = item.status

        curso.push(informacao)
    })

    if(status = true){
        return curso
    }else{
        return status
    }
}       

const getNumMatriculaAluno = function(numeroMatricula){
    let listaAluno = listaDealunos
    let matricula = Number(numeroMatricula)
    let curso = []
    let status = false
    

    // console.log(listaAluno)

    listaAluno.alunos.forEach(function(item){
        if(Number(item.matricula) == matricula){
            status = true
            let informacao = {}
            informacao.foto = item.foto
            informacao.nome = item.nome
            informacao.matricula = item.matricula
            informacao.sexo = item.sexo
            informacao.curso = item.curso
            informacao.status = item.status

            curso.push(informacao)
        }
    })

    if(status = true){
        return curso
    }else{
        return status
    }
}

const getcursoDoAluno = function(cursoSigla){
    let listaAlunos = listaDealunos
    let sigla = String(cursoSigla).toUpperCase()
    let informacoes = []
    let dados = {}
    let status = false
    

    listaAlunos.alunos.forEach(function(itemCurso){
        listaAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            status = true
            let alunos = {}
            alunos.foto = itemCurso.foto
            alunos.nome = itemCurso.nome
            alunos.matricula = itemCurso.matricula
            alunos.curso = itemCurso.curso
            alunos.sexo = itemCurso.sexo
            alunos.status = itemCurso.status

            informacoes.push(alunos)
        }      
        })
    })
            
    dados.curso = sigla
    dados.alunos = informacoes

    if(status = true){
        return dados
    }else{
        return status
    }
}

const getstatusAluno = function(statusAluno){
    let listaAlunos = listaDealunos
    let statusA = String(statusAluno).toUpperCase()
    let array = []
    let resultado = {}
    let status = false


    listaAlunos.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusA){
            status = true
            let alunos = {}
            alunos.foto = item.foto
            alunos.nome = item.nome
            alunos.matricula = item.matricula
            alunos.sexo = item.sexo
            alunos.curso = item.curso
            alunos.status = item.status

            array.push(alunos)
        }
    })

    resultado.status = statusA
    resultado.alunos = array

    if(status = true){
        return resultado
    }else{
        return status
    }
}

const getStatusDisciplina = function(siglaCurso, statusDisciplina){
    let listaAlunos = listaDealunos
    let sigla = String(siglaCurso).toUpperCase()
    let disciplina = String(statusDisciplina).toUpperCase()
    let dados = []
    let resultado = {}
    let status = false

    listaAlunos.alunos.forEach(function(itemCurso){
        listaAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == sigla){
                status = true
                let alunos = {}
                        alunos.foto = itemCurso.foto
                        alunos.nome = itemCurso.nome
                        alunos.matricula = itemCurso.matricula
                        alunos.curso = itemCurso.curso
                        alunos.sexo = itemCurso.sexo
                        item.disciplinas.forEach(function(itemD){
                    if(String(itemD.status).toUpperCase() == disciplina){
                        alunos.status = itemD.status

                        dados.push(alunos)
                    }
                })
            }
        })
    })

    resultado.curso = sigla
    resultado.status = disciplina
    resultado.alunos = dados

    if(status = true){
        return resultado
    }else{
        return status
    }
}

const getAnoDeConclusao = function(siglaCurso, anoConclusao){
    let listaAlunos = listaDealunos
    let sigla = String(siglaCurso).toUpperCase()
    let conclusao = String(anoConclusao).toUpperCase()
    let dados = []
    let resultado = {}
    let status = false

    listaAlunos.alunos.forEach(function(itemCurso){
        listaAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(itemC){
            if(String(itemC.sigla).toUpperCase() == sigla){
                itemCurso.curso.forEach(function(item){
                    if(String(item.conclusao).toUpperCase() == conclusao){
                        status = true
                        let alunos = {}
                        alunos.foto = itemCurso.foto
                        alunos.nome = itemCurso.nome
                        alunos.matricula = itemCurso.matricula
                        alunos.curso = itemCurso.curso
                        alunos.sexo = itemCurso.sexo
                        alunos.conclusao = item.conclusao

                        dados.push(alunos)
                    }
                })
            }
        })
    })

    resultado.curso = sigla
    resultado.anoConclusao = conclusao
    resultado.alunos = dados

    if(status = true){
        return resultado
    }else{
        return status
    }
}



//console.log(getAnoDeConclusao('rds', '2023')) OK
//console.log(getStatusDisciplina('ds', 'aprovado'))
//console.log(getstatusAluno('finalizado'))
//console.log(getcursoDoAluno("rds"))  OK
//console.log(getNumMatriculaAluno("20151001002")) OK
//getListaDeAlunos() OK
//getListaDeCursos() OK


module.exports = {
    getListaDeCursos,
    getListaDeAlunos,
    getNumMatriculaAluno,
    getcursoDoAluno,
    getstatusAluno,
    getAnoDeConclusao,
    getStatusDisciplina
}