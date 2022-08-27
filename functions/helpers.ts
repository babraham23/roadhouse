import { Images } from '../style/images';

export const generateID = () => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let id = randLetter + Date.now();
    return id;
};

export const MenuScrollIconConverter = (title: string) => {
    if (title === 'Hamburgers') return Images.HAMBURGER;
    else if (title === 'Fries') return Images.FRIES;
    else if (title === 'Coffee') return Images.COFFEE;
    else if (title === 'Chicken') return Images.CHICKEN;
};

export const ScrollBarConverter = (title: string) => {
    if (title === 'Restaurants') return Images.RESTAURANT;
    else if (title === 'Bars') return Images.BEER;
    else if (title === 'Market') return Images.MARKET;
    else if (title === 'Liked') return Images.HEART;
};

export const MenuMarkerConverter = (place: string) => {
    if (place === 'Restaurants') return Images.RESTAURANT;
    else if (place === 'Bars') return Images.BEER;
    else if (place === 'Market') return Images.MARKET;
    else if (place === 'Liked') return Images.HEART;
    else if (place === 'Hamburgers') return Images.HAMBURGER;
};