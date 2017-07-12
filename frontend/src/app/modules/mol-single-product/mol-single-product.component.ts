import { Component, OnInit,Input  } from '@angular/core';
import { Product } from "../../models/Product";

@Component({
    selector: 'mol-single-product',
    templateUrl: './mol-single-product.component.html'
})

export class MolSingleProductComponent implements OnInit {
    @Input() product : Product;
    constructor() { 
        console.log(this.product);
    }

    ngOnInit() { }
}