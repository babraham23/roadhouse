export class FoodModel {
    Starter?: any;
    Main?: any;
    Dessert?: any;

    constructor(data: any = {}) {
        this.Starter = data.Starter || "";
        this.Main = data.Main || "";
        this.Dessert = data.Dessert || "";
    }
}