const ProductModel = require('../models/product')

const transformer = product => ({
        type: 'products',
        id: product.id,
        attributes: {
            name: product.name,
            price: product.price,
        },
        links:{
            self: `/api/v1/products/${product.id}`
        }

});
//parou  video 3 = 21.47
const getAll = async (request, h) => {
   const products = await ProductModel.find({});
    //objeto vazio retorna todos da lista
    return {data:products.map(transformer)};
    //map itera a funcao de produtos  e vai aplicar a funcao de transformer
};

const save = async (req, h) =>  {
    //console.log(req.payload.name, req.payload.price);
    const {name, price} = req.payload;
    const product = new ProductModel;
    product.name = name;
    product.price = price;

    await product.save();

    return h.response(transformer(product)).code(201);
};
    //venho aqui no meu  handlers, vou  dar um return h
    //o h como eu falei e um  conjunto do hapi para voce
    //mandar resposta http,

//eu so preciso retornar na api que este dado foi cadastrado
//com sucesso no status code de 201 que e o status code de
//sucesso,que foi  criado com sucesso, e eu quero retornar
//como resutado resposta neste endpoint, os dados que acabou
//de cadastrar,
//vou exportar a function
//o save e uma operacao asincrona,
//ou seja, ele nao esta so no  javascript, ele
//sai do escopo javascript, e executa isto em
//background, eu preciso falar que nesemomento o
//meu codigo javascript deve parar, ate que este
//save tenha dado ok. Preciso entao usar o await
//ou seja, preciso que espere esta execucao assincrona
// so que com isto eu estou dizendo que esta minha funcao
//toda, a funcao save, e uma funcao assincrona, eu preciso entao
//atraves de sintaxe javascript explicitar isto,
// eu venho no comeco da funcao  e coloco async
module.exports = {
    getAll,
    save
}
//e como e que o  mongoose trabalha para capturar estes dados
// e salvar la  no mongo. E simples eu  tenho que instanciar
//este product model que agente criou e importou aqui na pagina

//basta pegar as informacoes do req e salvar no mongoose
//vou  extrair o nome e o price atraves do destruct do
//javascript,

//o req tem todas as informacoes sobre a requisicao
//ou seja, o endpoint, os metodos, os headers, o corpo
//da mensagem, os parametros da url,

//o segundo parameetro do hapi, e um tool kit com conjuntos
//de funcionalidades que ele te auxilia para mandar uma resposta
//http, facilita a voce adicionar status code, headers, o corpo da
//mensagem, ou seja, sao auxiliadores,entao para pegar a mensagem
//http que agente mandou  no post, vou printar para voces verem que
//ele vem na propriedade payload,

//como e que eu mando um  produto por post
//no postman eu envio no corpo da mensagem
//por http num post a mensagem, no caso e um texto
//que tem formato de json, especiico que ele e do tipo
//aplication json e mando enviar