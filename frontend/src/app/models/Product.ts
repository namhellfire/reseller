export class Size {
    id: string;
    name: string;
    refUrl: string;
    constructor(id: string, name: string, refUrl: string) {
        this.id = id;
        this.name = name;
        this.refUrl = refUrl;
    }
}
export class Product {
    id: string;
    title: string;
    imgUrl: string;
	refUrl: string;
    discount: number;
    price: number;
    size: Size[];
    constructor(id: string, title: string, imgUrl: string, refUrl: string, discount: number, price: number) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
		this.refUrl = refUrl;
        this.discount = discount;
        this.price = price;
        this.size = [new Size("","XS",""),new Size("","S",""),new Size("","M",""),new Size("","L","")]
    }
}