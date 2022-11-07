/**
 * Create restaurant model in the baackend to mirror Googles Places API
 * Add following to your model:
 * - isClient
 * - keywords
 * _ Adress1
 * - Address2
 * - City
 * - Postcode
 * - Country
 */
export let roadhouseAPI = {
    // Roadhouse schema -----------
    isClient: true,
    keywords: ['Hamburgers', 'Hotdogs', 'Pizza', 'Bar'], // save text convention and rules ***
    Address1: '123 Main Street',
    Address2: '',
    City: 'Newcastle',
    Postcode: 'NE1 1AA',
    Country: 'UK',
    // Change to Schema  -----------
    geometry: { lat: 54.9695544, lng: -1.6192341 },
    // Google schema  -----------
    formatted_address: 'Clarendon Ho/Clayton Street West, Newcastle upon Tyne NE1 5EE, United Kingdom',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    name: 'Latifi',
    description: 'A descriptiopn here',
    place_id: 'ChIJ0yai17RwfkgRNA4fB-3UGxs',
    rating: 5,
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    user_ratings_total: 2,
};

export const GoogleSchema = {
    business_status: 'OPERATIONAL',
    formatted_address: '59 Westgate Rd, Newcastle upon Tyne NE1 1SG, United Kingdom',
    geometry: {
        location: { lat: 54.9699727, lng: -1.6172248 },
        viewport: { northeast: { lat: 54.97135987989272, lng: -1.615859070107278 }, southwest: { lat: 54.96866022010727, lng: -1.618558729892722 } },
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Insieme Newcastle',
    opening_hours: { open_now: true },
    photos: [
        {
            height: 4032,
            html_attributions: ['<a href="https://maps.google.com/maps/contrib/101977347300512403202">A Google User</a>'],
            photo_reference:
                'AcYSjRgK0S4AxLPgmucXjyhuJKjzxSbvQ4GJIqC9pstcPJQ8fpRZKEdf9WRvsc2vjH16mUErpX3JglE0O4tgvBke-W5zSuA5yEBUF7CoMXxzPDGf1X2IPrSiuYCw7tnk2vOYGP0LuhjFfAaz1eg2cPOxwO6iMki-Lc_es1i364tPKPiarL6H',
            width: 3024,
        },
    ],
    place_id: 'ChIJbQWnlRJxfkgRUzlF2Gt8ays',
    plus_code: { compound_code: 'X99M+X4 Newcastle upon Tyne', global_code: '9C6WX99M+X4' },
    rating: 4.5,
    reference: 'ChIJbQWnlRJxfkgRUzlF2Gt8ays',
    types: ['restaurant', 'point_of_interest', 'food', 'establishment'],
    user_ratings_total: 192,
};
