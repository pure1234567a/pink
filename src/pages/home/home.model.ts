export class HomeModel {
    title: string;
    items: Array<HomeItemModel>;
    currentbooking :currentModel = new currentModel();

}
export class HomeItemModel {
    name: string;
    img: string;
    total: Number;
}
export class currentModel{
    date: string;
    time: string;
    staffcode: number;
    pickupaddress: string;
    deliveryaddress: string;
    items: Array<CurrentItemModel>;
}
export class CurrentItemModel{
    name: string;
    description: string;
    value: string;
    qty: string;
}