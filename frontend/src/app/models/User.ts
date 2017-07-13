import { Product } from "./Product";
export class User {
    id: string;
    name: string;
    email: string;
    dateOfBirdth: string;
    password: string;
    deliveryAddress: DeliveryInfo[];
    return: Product[];
    cartList: Product[];
    whistlist: Product[];
    payment: Payment[];
    constructor(id: string, name: string, email: string, dateOfBirdth: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dateOfBirdth = dateOfBirdth;
        this.password = password;
    }
}

export class DeliveryInfo {
    name: string;
    phoneNumber: string;
    homeAddress: string;
    province: string;
    district: string;
    area: string;
}

export class Payment {
    cardBrand: string;
    ExpirationDate: string;
    cardNumber: string;
}