import { Images } from '../style/images';

export const RestuarantsData = [
    {
        title: 'McDonalds',
        location: 'Grainger Street',
        id: 'mcdonalds',
        logo: Images.LOGO,
        description: 'This is a description about Mcdonalds',
        foodType: 'American • Hamburgers • Fries',
    },
    {
        title: 'Subway',
        location: 'Neville Street',
        id: 'subway',
        logo: Images.LOGO,
        description: 'This is a description about Subway',
        foodType: 'American • Sandwiches • Cookies',
    },
    {
        title: 'The Botanist',
        location: 'Northumberland Street',
        id: 'botanist',
        logo: Images.LOGO,
        description: 'This is a description about Zaap Thai',
        foodType: 'Asian • Thaai • Noodles',
    },
];

export const TrippleData = [
    {
        column1: RestuarantsData,
        column2: RestuarantsData,
        column3: RestuarantsData,
    },
];
