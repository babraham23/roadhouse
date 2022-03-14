const addOns = [
	{
		title: 'Cheese',
		maxNumber: 5,
		Id: 1
	},
	{
		title: 'Extra Fries',
		maxNumber: 1,
		Id: 2
	},
	{
		title: 'Pickles',
		maxNumber: 3,
		Id: 3
	},
	{
		title: 'Halloumi',
		maxNumber: 1,
		Id: 4
	},
	{
		title: 'Hot Sauces',
		maxNumber: 1,
		Id: 5
	},
]

const burgerItems = [
	{
		title: 'Big Mac',
		description:
			'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
		price: '26.99',
        image: require('../assets/mcdonalds/bigMac.png'),
        Id: 1,
		addOns: addOns
	},
	{
		title: 'Quarter Pounder',
		description:
			'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
		price: '13.50',
		image: require('../assets/subway/saladBox.png'),
        Id: 2,
		addOns: addOns
	},
	{
		title: 'Chicken Burger',
		description: 'Portion, vegan',
		price: '5.00',
        image: false,
        Id: 3,
		addOns: addOns
	},
];

const fryItems = [
	{
		title: 'Small Fries',
		description:
			'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
		price: '26.99',
        image: require('../assets/mcdonalds/bigMac.png'),
        Id: 1,
		addOns: addOns
	},
	{
		title: 'Medium Fries',
		description:
			'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
		price: '13.50',
		image: require('../assets/subway/saladBox.png'),
        Id: 2,
		addOns: addOns
	},
	{
		title: 'Large Fries',
		description: 'Portion, vegan',
		price: '5.00',
        image: false,
        Id: 3,
		addOns: addOns
	},
];

const coffeeItems = [
	{
		title: 'Small Coffee',
		description:
			'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
		price: '26.99',
        image: require('../assets/mcdonalds/bigMac.png'),
        Id: 1,
		addOns: addOns
	},
	{
		title: 'Medium Coffee',
		description:
			'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
		price: '13.50',
		image: require('../assets/subway/saladBox.png'),
        Id: 2,
		addOns: addOns
	},
	{
		title: 'Large Coffee',
		description: 'Portion, vegan',
		price: '5.00',
        image: false,
        Id: 3,
		addOns: addOns
	},
];

const chickenItems = [
	{
		title: '6 Piece',
		description:
			'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
		price: '26.99',
        image: require('../assets/mcdonalds/bigMac.png'),
        Id: 1,
		addOns: addOns
	},
	{
		title: '12 Piece',
		description:
			'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
		price: '13.50',
		image: require('../assets/subway/saladBox.png'),
        Id: 2,
		addOns: addOns
	},
	{
		title: '20 Piece',
		description: 'Portion, vegan',
		price: '5.00',
        image: false,
        Id: 3,
		addOns: addOns
	},
];


export const appIcon = require('../assets/mcdonalds/mcd_logo.png')

export const products = [
	{
		title: 'Hamburgers',
		description:
			'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.',
		color1: '#FFC72C',
		color2: '#ffbd05',
		picture: require('../assets/mcdonalds/bigMac.png'),
		aspectRatio: 1,
		Id: 0,
		textColor: '#432406',
        items: burgerItems,
		index: 0,
	},
	{
		title: 'Fries',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#b72218',
		color2: '#DA291C',
		picture: require('../assets/mcdonalds/fries.png'),
		aspectRatio: 1,
		Id: 1,
		textColor: '#432406',
        items: fryItems,
		index: 1
	},
	{
		title: 'Coffee',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#FFC72C',
		color2: '#DA291C',
		picture: require('../assets/mcdonalds/coldbrew.png'),
		aspectRatio: 1,
		Id: 2,
		textColor: '#432406',
        items: coffeeItems,
		index: 2
	},
	{
		title: 'Chicken',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#4DD2A5',
		color2: '#63D8B0',
		picture: require('../assets/mcdonalds/chicken.png'),
		aspectRatio: 1,
		Id: 3,
		textColor: '#432406',
        items: chickenItems,
		index: 3
	},
];
