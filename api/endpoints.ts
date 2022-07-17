export const BASE_API = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=';
// export const BASE_API2 = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=54.9696,1.6198&radius=9&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';
// export const imageUrl =
//     'https://maps.googleapis.com/maps/api/place/photo?maxwidth=5760&photo_reference=Aap_uEDG_5XxjBsX4VolxN-rlinaZY4quSkKl53wa2yLl-_ZlEk173tCTJ9Q-59MoetsSWg3w5HKEWAf4L4KOPrKXvS5TsJT9dBueOPogWA1w6PQ-_MKsUk8bYl-crHdcrNDDTdceEQbMO1vzT0FTRca7aCkhtUkKwQIBGiFSjpcO15Eg8TY&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';

export const API_KEY = `AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4`;
export const radius_number_of_meters = 1;

export const restaurant_location_search = (long: number, lat: number) => `${BASE_API}${lat},${long}&radius=${radius_number_of_meters}&key=${API_KEY}`;

// export const TASK_PROGRESS = learnerId => `${BASE_API_URL}v1/progressTaskRecords/${learnerId}`;

// const getImages = async () => {
//     try {
//         const response = await fetch(imageUrl);
//         const json = await response;
//         console.log('response -->', json);
//         // setData(json.movies);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         setLoading(false);
//     }
// };
