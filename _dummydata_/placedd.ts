const addOns = [
    {
        title: 'Cheese',
        maxNumber: 2,
        Id: 123,
        price: 1.99,
    },
    {
        title: 'Extra Fries',
        maxNumber: 1,
        Id: 245,
        price: 2.99,
    },
];

export const placeDetails = {
    name: 'McDonalds',
    primaryColor: '#b72218',
    contrastColor: '#000',
    address1: 'Grainger Road',
    address2: 'Newcastle',
    postCode: 'NE123F',
    logo: require('../assets/mcdonalds/mcd_logo.png'),
};

const productItems = [
    {
        title: 'Big Mac',
        description: 'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
        price: '26.99',
        image: require('../assets/mcdonalds/bigMac.png'),
        Id: 1,
        addOns: addOns,
    },
    {
        title: 'Quarter Pounder',
        description: 'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
        price: '13.50',
        image: require('../assets/subway/saladBox.png'),
        Id: 2,
        addOns: addOns,
    },
    {
        title: 'The Big Tasty',
        description: 'Portion, vegan',
        price: '5.00',
        image: false,
        Id: 3,
        addOns: addOns,
    },
];

export const products = [
    {
        title: 'Hamburgers',
        description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.',
        cardColor: '#FFC72C',
        cardBackgroundColor: '#ffbd05',
        picture: require('../assets/mcdonalds/bigMac.png'),
        aspectRatio: 1,
        Id: 0,
        textColor: '#000000',
        items: productItems,
        index: 0,
    },
];
