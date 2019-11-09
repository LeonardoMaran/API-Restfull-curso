//copiei e colei o produccts da pasta handlers

//uma regra, para voce criar repositorio ele nao pode ter
//logica nenhuma, nenhuma regra de negocio deve estar no seu
//repositorio, esta regra deve estar em outra parte do seu codigo
//inclusive esta abstracao que agente

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

const getAll = async (request, h) => {
   const products = await ProductModel.find({});

    return products.map(transformer);

};

const find = async (req) => {
    const product = await ProductModel.findById(req.params.id);
    return { data: transformer(product) };

};

const save = async (req, h) =>  {

    const {name, price} = req.payload;
    const product = new ProductModel;
    product.name = name;
    product.price = price;

    await product.save();

    return h.response(transformer(product)).code(201);
};

    const remove = async (req, h) => {
        await ProductModel.findByIdAndDelete({_id: req.params.id});
        return h.response().code(204);

    };

module.exports = {
    getAll,
    save,
    find,
    remove
};
