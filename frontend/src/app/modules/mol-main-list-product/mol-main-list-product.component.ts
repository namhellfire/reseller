import { Component, OnInit } from '@angular/core';
import { Product, Size } from "../../models/Product";

@Component({
    selector: 'mol-main-list-product',
    templateUrl: './mol-main-list-product.component.html'
})

export class MolMainListProductComponent implements OnInit {
    listProduct: any[] = [];
    constructor() { 
        let product = new Product("1","Váy Ren Hồng Cổ Tim from Gracy Design in hồng_1","assets/gracy-design-2629-571327-1.jpg","https://www.robins.vn/gracy-design-vay-ren-hong-co-tim-h%E1%BB%93ng-723175.html",23,1490000);
        for(var i =0; i <100; i++){
            this.listProduct.push(product);
        }
        console.log(this.listProduct);
    }

    ngOnInit() { }
}