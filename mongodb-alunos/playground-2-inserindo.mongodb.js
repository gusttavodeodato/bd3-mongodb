/**
 * INSERÇÃO DE ALUNOS NO BANCO DE DADOS
 */

const database = "tb-alunos";

use (database);

/**
 * INSERINDO MÚLTIPLOS ALUNOS AO MESMO TEMPO
 */

db['alunos'].insertMany(
    [
        {
            "cod-aluno": "1",
            "nome": "Gustavo Deodato",
            "cpf": "123.456.789-10",
            "rg": "12.345.678-9",
            "telefone": "(11) 99999-9991",
            "telefone_respo": "(11) 99999-0001",
            "email": "gustavod@email.com",
            "data_nasc": "2004-04-18"
        },
        {
            "cod-aluno": "2",
            "nome": "Ryan Santana",
            "cpf": "123.456.789-11",
            "rg": "12.345.678-8",
            "telefone": "(11) 99999-9992",
            "telefone_respo": "(11) 99999-0002",
            "email": "ryan@email.com",
            "data_nasc": "2005-01-06"
        },
        {
            "cod-aluno": "3",
            "nome": "André Moreira",
            "cpf": "123.456.789-12",
            "rg": "12.345.678-7",
            "telefone": "(11) 99999-9993",
            "telefone_respo": "(11) 99999-0003",
            "email": "andrem@email.com",
            "data_nasc": "2005-01-01"
        },
        {
            "cod-aluno": "4",
            "nome": "Leticia Moraes",
            "cpf": "123.456.789-13",
            "rg": "12.345.678-6",
            "telefone": "(11) 99999-9994",
            "telefone_respo": "(11) 99999-0004",
            "email": "leticiamo@email.com",
            "data_nasc": "2004-11-08"
        },
        {
            "cod-aluno": "5",
            "nome": "Isabella Ferreira",
            "cpf": "123.456.789-14",
            "rg": "12.345.678-5",
            "telefone": "(11) 99999-9995",
            "telefone_respo": "(11) 99999-0005",
            "email": "isabellaf@email.com",
            "data_nasc": "2004-05-15"
        },
        {
            "cod-aluno": "6",
            "nome": "Larissa Gomes",
            "cpf": "123.456.789-15",
            "rg": "12.345.678-4",
            "telefone": "(11) 99999-9996",
            "telefone_respo": "(11) 99999-0006",
            "email": "larissag@email.com",
            "data_nasc": "2005-12-16"
        },
        {
            "cod-aluno": "7",
            "nome": "Ana Luísa",
            "cpf": "123.456.789-16",
            "rg": "12.345.678-3",
            "telefone": "(11) 99999-9997",
            "telefone_respo": "(11) 99999-0007",
            "email": "analuisa@email.com",
            "data_nasc": "2006-08-22",
        },
        {
            "cod-aluno": "8",
            "nome": "Vanessa Lima",
            "cpf": "123.456.789-17",
            "rg": "12.345.678-2",
            "telefone": "(11) 99999-9998",
            "telefone_respo": "(11) 99999-0008",
            "email": "vanessal@email.com",
            "data_nasc": "2003-05-04"
        },
        {
            "cod-aluno": "9",
            "nome": "Janaina Costa",
            "cpf": "123.456.789-18",
            "rg": "12.345.678-1",
            "telefone": "(11) 99999-9999",
            "telefone_respo": "(11) 99999-0009",
            "email": "janac@email.com",
            "data_nasc": "2006-02-06"
        },
        {
            "cod-aluno": "10",
            "nome": "Alessandra Souza",
            "cpf": "123.456.789-19",
            "rg": "12.345.678-9",
            "telefone": "(11) 99999-9910",
            "telefone_respo": "(11) 99999-0010",
            "email": "alessandras@email.com",
            "data_nasc": "2005-05-20"
        }
    ]
);