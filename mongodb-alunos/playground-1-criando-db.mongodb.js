/** CRIAÇÃO DA CONSTANTE BANCO DE DADOS */
const database = "tb-alunos";

/** CRIAÇÃO DA CONSTANTE COLLECTION */
const collectionAlunos = "alunos";


/** UTILIZAÇÃO DO BANCO DE DADOS */
use (database);

/** CRIAÇÃO DA COLLECTION 'alunos' */
db.createCollection(collectionAlunos);