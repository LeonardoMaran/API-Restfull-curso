const Hapi = require('@hapi/hapi');
const routes = require('./routes');




const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });
// o ideal e iniciar com variaveis de ambiente, porque quando for
//rodar na producao o servidor de producao automaticmanete vai configurar
// as portas certas.

server.route(routes);


//     { jogar este codigo no routes.js pr questao de organizacao
//     method: 'GET',
//     path: '/',
//     handler: function (request, h) {

//         return 'Hello Programador';
//     }
// }


    await server.start();

    // inicializa a aplicacao
    // nao e uma operacao sincrona, e asincrona, tem que executar
    //a proxima linha depois que este swait dar ok, inicializar.


    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();