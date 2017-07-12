import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mol-main-list-product',
    templateUrl: './mol-main-list-product.component.html'
})

export class MolMainListProductComponent implements OnInit {
    listProduct: any[] = [1]
    constructor() { }

    ngOnInit() { }
}