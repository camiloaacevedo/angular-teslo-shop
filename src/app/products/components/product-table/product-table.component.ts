import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { productImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-table',
  imports: [productImagePipe, RouterLink, CurrencyPipe],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {
  products = input.required<Product[]>();
}
