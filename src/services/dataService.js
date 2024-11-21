var catalog = [
    {
        "title": "Strawberry",
        "category": "fruit",
        "price": 16.93,
        "image": "/img/strawberry.img",
        "_id": "0001"
    },
    {
        "title": "Apple",
        "category": "fruit",
        "price": 1.99,
        "image": "/img/apple.img",
        "_id": "0002"
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 0.99,
        "image": "/img/banana.img",
        "_id": "0003"
    },
    {
        "title": "Orange",
        "category": "fruit",
        "price": 2.49,
        "image": "/img/orange.img",
        "_id": "0004"
    },
    {
        "title": "Broccoli",
        "category": "vegetable",
        "price": 3.79,
        "image": "/img/broccoli.img",
        "_id": "0005"
    },
    {
        "title": "Carrot",
        "category": "vegetable",
        "price": 1.29,
        "image": "/img/carrot.img",
        "_id": "0006"
    },
    {
        "title": "Potato",
        "category": "vegetable",
        "price": 0.89,
        "image": "/img/potato.img",
        "_id": "0007"
    },
    {
        "title": "Tomato",
        "category": "vegetable",
        "price": 2.99,
        "image": "/img/tomato.img",
        "_id": "0008"
    },
    {
        "title": "Milk",
        "category": "dairy",
        "price": 4.49,
        "image": "/img/milk.img",
        "_id": "0009"
    },
    {
        "title": "Cheese",
        "category": "dairy",
        "price": 5.99,
        "image": "/img/cheese.img",
        "_id": "0010"
    },
    {
        "title": "Eggs",
        "category": "dairy",
        "price": 3.49,
        "image": "/img/eggs.img",
        "_id": "0011"
    },
    {
        "title": "Bread",
        "category": "bakery",
        "price": 2.99,
        "image": "/img/bread.img",
        "_id": "0012"
    }
];


class DataService {
    getProducts(){
        return catalog;
    }
}

export default new DataService();