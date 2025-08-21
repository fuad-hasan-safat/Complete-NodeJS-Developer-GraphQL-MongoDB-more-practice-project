const { getAllProducts, getProductsByPrice, getProductById, addNewProduct, addNewProductReview } = require("./products.model")

module.exports = {
    Query : {
        products: () => {
            return getAllProducts();
        },
        productsByPrice: (_, args) => {
            return getProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return getProductById(args.id);
        }
    },

    Mutation : {
        addProduct: (_, args) => {
            const newProduct = {
                id: args.id,
                price: args.price,
                description: args.description,
            };
          
            return addNewProduct(newProduct.id, newProduct.price, newProduct.description);
        },
        addProductReview(_, args) {
            return addNewProductReview(args.id, args.rating, args.text);
        }
    }
}