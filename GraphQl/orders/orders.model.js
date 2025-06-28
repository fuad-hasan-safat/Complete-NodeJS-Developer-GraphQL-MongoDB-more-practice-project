const orders = [
        {
            date: '2020-01-01',
            subtotal: 12.34,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        price: 100.11,
                        description: 'Good',
                    },
                    quantity: 1
                }
            ]
        }
    ];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
    orders
};