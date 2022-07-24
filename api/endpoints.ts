const API = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=54.9696,1.6198&radius=9&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';
export const BASE_API = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
export const DETAILED_API = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY`;

export const API_KEY = `AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4`;
export const radius_number_of_meters = 1;

let maxheight = 2340;
let maxwidth = 4160;
export const getPlacesPhotos = (photo_reference: any) =>
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&maxheight=${maxheight}&photo_reference=${photo_reference}&key=${API_KEY}`;
export const restaurant_search = (long: number, lat: number) => `${BASE_API}restaurants&location=${lat},${long}&radius=${radius_number_of_meters}&key=${API_KEY}`;
export const pub_search = (long: number, lat: number) => `${BASE_API}bar&location=${lat},${long}&radius=${radius_number_of_meters}&key=${API_KEY}`;
export const bakery_search = (long: number, lat: number) => `${BASE_API}bakery&location=${lat},${long}&radius=${radius_number_of_meters}&key=${API_KEY}`;
// export const cafe_search = (long: number, lat: number) => `${BASE_API}cafe&location=${lat},${long}&radius=${radius_number_of_meters}&key=${API_KEY}`;
export const detailed_search = (place_id: string) => `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}`;
