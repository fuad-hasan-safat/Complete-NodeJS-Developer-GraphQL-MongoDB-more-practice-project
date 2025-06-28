const { getAllProducts } = require("./products.model")

module.exports = {
    Query : {
        product: () => {
            return getAllProducts();
        }
    }
}