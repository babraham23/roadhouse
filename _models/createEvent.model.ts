export class CreateEventModel {
    title: string;
    description: string;
    address1: string;
    placeName: string;
    city: string;
    postcode: string;
    country: string;
    lat: number;
    lng: number;
    date: Date;
    

    constructor(data: any = {}) {
        this.title = data.title || '';
        this.description = data.description || '';
        this.address1 = data.address1 || '';
        this.placeName = data.placeName || '';
        this.city = data.city || '';
        this.postcode = data.postcode || '';
        this.country = data.country || '';
        this.lat = data.lat || 0;
        this.lng = data.lng || 0;
        this.date = data.date || new Date();
    }
}
