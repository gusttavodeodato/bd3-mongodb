const database = "tb-alunos";

use(database);

/** LISTANDO TODOS ALUNOS */
db['alunos'].find();

/**LISTANDO COM FILTRAGEM PELO CPF */
db['alunos'].find({"cpf": "123.456.789-11"}, {"cod-aluno": 0});