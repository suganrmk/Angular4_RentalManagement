// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: any = {};
  products: any[] = [];

  productToEdit: any = {};
  productToDelete: any = {};
  fetchingData: boolean = false;
  apiMessage: string;
  filesToUpload: Array<File>;

  constructor(private productService: ProductService) {  this.filesToUpload = []; }

  ngOnInit(): void {
    this.productService.showAddProductBox = true;
    this.productService.getProducts().then(td => { this.products = td.products; });
  }

  AddProduct(product: any): void {
    console.log(product)
    if (!product) { return; }
    this.productService.createProduct(product)
      .then(td => {
        this.products.push(td.product);
      });
    this.closeev();
  }

  closeev() {
    this.productService.showAddProductBox = true;
  }
  showEditProduct(product: any): void {
    // console.log(product)
    this.productToEdit = product;
    this.apiMessage = " ";
  }
  getFiles(fl){
   console.log(fl)
  }

  showAddProductBox(e): void {
    e.preventDefault();
    this.productService.showAddProductBox = !this.productService.showAddProductBox;
  }

  EditProduct(product: any): void {
    if (!product) { return; }
    // console.log(product)
    product.id = this.productToEdit._id;
    this.productService.updateProduct(product)
      .then(td => {
        const updatedProducts = this.products.map(t => {
          if (td.product._id !== t._id) {
            return t;
          }
          return { ...t, ...td.product };
        });
        this.apiMessage = td.message;
        this.closeev();

      });
  }

  showDeleteProduct(product: any): void {
    this.productToDelete = product;
    this.apiMessage = "";
  }

  DeleteProduct(product: any): void {
    if (!product) { return; }
    this.productService.deleteProduct(product)
      .then(td => {
        const filteredProducts = this.products.filter(t => t._id !== td.product._id);
        this.apiMessage = td.message;
        this.products = filteredProducts;
      });
  }

  onBasicUpload(ev, fl){
    console.log(ev, fl)
  }


  upload() {
    this.makeFileRequest("http://localhost:4000/upload", [], this.filesToUpload).then((result) => {
        console.log(result);
    }, (error) => {
        console.error(error);
    });
}

fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  console.log(this.filesToUpload )
  
}

makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("myfile[]", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}

}
