const products =  [
        {
            id: 'redshoe',
            price: 100,
            description: 'Good',
            review: [{ rating: 5, text: 'Good' }]
        },
        {
            id: 'blueshoe',
            price: 200,
            description: 'Good',
            review: [{ rating: 4, text: 'Good' }]
        },
        {
            id: 'greenshoe',
            price: 300,
            description: 'Good',
            review: [{ rating: 3, text: 'Good' }]
        },
        {
            id: 'whiteshoe',
            price: 400,
            description: 'Good',
            review: [{ rating: 2, text: 'Good' }]
        },
        {
            id: 'blackshoe',
            price: 500,
            description: 'Good',
            review: [{ rating: 1, text: 'Good' }]
        }
];


function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function addNewProduct(id, price, description) {
    const newProduct = {
        id,
        price,
        description,
        review: []
    };
    products.push(newProduct);
    return newProduct;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct
};