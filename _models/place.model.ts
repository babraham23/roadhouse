import { PlacesInterface } from "../_interfaces/places.interface";

export class PlaceModel {
    placeName: string;
    description: string;
    address1: string;
    address2: string;
    city: string;
    postcode: string;
    country: string;
    lat: number;
    lng: number;
    keywords: [string];

    constructor(data: PlacesInterface) {
        this.placeName = data.placeName || '';
        this.description = data.description || '';
        this.address1 = data.address1 || '';
        this.address2 = data.address2 || '';
        this.city = data.city || '';
        this.postcode = data.postcode || '';
        this.country = data.country || '';
        this.lat = data.lat || 0;
        this.lng = data.lng || 0;
        this.keywords = data.keywords || [];
    }
}
