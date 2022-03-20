import { Images } from '../style/images';

export const RestuarantsData = [
    {
        title: 'McDonalds',
        location: 'Grainger Street',
        id: 'mcdonalds',
        logo: Images.LOGO,
        description: 'This is a description about Mcdonalds',
        foodType: 'American • Hamburgers • Fries',
        image: require('../assets/parralax/mcds.jpeg'),
    },
    {
        title: 'Subway',
        location: 'Neville Street',
        id: 'subway',
        logo: Images.LOGO,
        description: 'This is a description about Subway',
        foodType: 'American • Sandwiches • Cookies',
        image: require('../assets/parralax/subway.jpeg'),
    },
    {
        title: 'The Botanist',
        location: 'Northumberland Street',
        id: 'botanist',
        logo: Images.LOGO,
        description: 'This is a description about Zaap Thai',
        foodType: 'Asian • Thaai • Noodles',
        image: require('../assets/parralax/botanist.jpeg'),
    },
];

export const TrippleData = [
    {
        column1: RestuarantsData,
        column2: RestuarantsData,
        column3: RestuarantsData,
    },
];


// export const items = [
//     {
//         image: require('../../assets/parralax/mcds.jpeg'),
//         name: 'McDonalds',
//         description: `Whether it's a Big Mac® or breakfast in bed, we have you covered.`,
//         id: 'mcdonalds'
//     },
//     {
//         image: require('../../assets/parralax/subway.jpeg'),
//         name: 'Subway',
//         description: 'Steak and cheese, yes please. Order a footlong feast from Subway. ',
//         id: 'subway'
//     },
//     {
//         image: require('../../assets/parralax/botanist.jpeg'),
//         name: 'The Botanist',
//         description: 'Get away from the hustle and bustle and relax in the ambience as you indulge in delightful food and our expansive array of real ales, bottled beers, cocktails'
//     },
    
// ]
