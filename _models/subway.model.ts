const items = [
	{
		title: 'Long Hongdae Nights',
		description:
			'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
		price: '26.99',
		image: true,
	},
	{
		title: 'Late Sunset',
		description:
			'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favourite',
		price: '13.50',
		image: true,
	},
	{
		title: 'Cabbage Kimchi',
		description: 'Portion, vegan',
		price: '5.00',
		image: false,
	},
	{
		title: 'Namur by Pieces',
		description: 'Homemade steamed dim sum with minced pork, shiitake mushrooms and smokey honey flavour, four pcs',
		price: '10.50',
		image: false,
	},
	{
		title: 'Silim Lights',
		description:
			'Beef Bibimbap, sesame oil, rice, beans, spinach, carrots, spring onions, Chinese cabbage, shiitake mushrooms, roasted onions and egg',
		price: '26.50',
		image: false,
	},
];

export const subwayProducts = [
	{
		title: 'Subs',
		description:
			'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.',
		color1: '#fff',
		color2: '#3d8a4b',
		picture: require('../assets/subway/allSubs.png'),
		aspectRatio: 1,
		Id: 0,
		textColor: '#000',
		items: items,
	},
	{
		title: 'Salad Box',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#fff',
		color2: '#3d8a4b',
		picture: require('../assets/subway/saladBox.png'),
		aspectRatio: 1,
		Id: 1,
		textColor: '#000',
		items: items,
	},
	{
		title: 'Hot Sides',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#fff',
		color2: '#3d8a4b',
		picture: require('../assets/subway/hotSides.png'),
		aspectRatio: 1,
		Id: 2,
		textColor: '#000',
		items: items,
	},
	{
		title: 'Breakfast',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#fff',
		color2: '#3d8a4b',
		picture: require('../assets/subway/breakfast.png'),
		aspectRatio: 1,
		Id: 3,
		textColor: '#000',
		items: items,
	},
	{
		title: 'Snacks, Drinks & Extras',
		description:
			"Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
		color1: '#fff',
		color2: '#3d8a4b',
		picture: require('../assets/subway/snacks.png'),
		aspectRatio: 757 / 735,
		Id: 4,
		textColor: '#000',
		items: items,
	},
];

// export interface Product {
//     title: string;
//     subtitle: string;
//     color1: string;
//     color2: string;
//     picture: number;
//   }
/*
    {
      title: "More Cold Brew to Love",
      subtitle: "32oz bottle now available",
      color1: "#FEAC00",
      color2: "#FDC946",
      picture: require("./assets/coldbrew2.png"),
      aspectRatio: 719 / 277,
    },*/
