const productHandler = require('./handlers/product');

module.exports = [
    {
           method: 'GET',
            path: '/api/v1/products',

            //este handlers e uma funciton e eu tenho uma pastinha que vai estar todos
            //os meus handlers

            handler: productHandler.getAll
            //function (request, h) {
                 //return 'Hello Programador';
     // }
     //  exportei a funcao para o arquivo products

    },
    //pegar a rota especifica do id
    {
      method: 'GET',
       path: '/api/v1/products/{id}',
       handler: productHandler.find
     },



        {
       method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove
      },

    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save
        //metodo .save, vai salvar no banco de dados
      },
]

// video 2 28.17
//porque api v1
//api quando o site e uma api
// v1 versao - porque se  caso a minha aplicacao
//seja uma api se um dia eu for mudar esta minha aplicacao
// eu posso quebrar as aplicacoes que utilizam a minha api
// se eu or mudar o contrato da minha api eu vou udar de v1 para v2
// voce fala para quem utilizar a versao anterior para mudar para a
// atual

//O products e o produto que eu estou acessando
// E muito importante voce nao utilizar um verbo
//verbos em endpoint nao e uma boa pratica,nao e compativel com uma
//api restfull

// array de rotas

