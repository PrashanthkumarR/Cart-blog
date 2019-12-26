import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  productsForm:FormGroup;
  productArray = ['#sandals','#shoes', '#Tshirts']
  seletedItems :string;
  seletedItemsArray = []
  productListArray=[]
  productTagList = []
  productTagListArray = []

  constructor(private formBuilder:FormBuilder , private productService:ProductService) {
    this.productService.getProducts().subscribe((res:any)=>{
        this.productListArray = res;
        
    })
   }

   getf() { return this.productsForm.controls; }

  ngOnInit() {
    
  }

  onAdded($event: any) {
         let products = this.productListArray.filter((el)=>{
           return el.type === $event.value
         }) 
         if(products.length === 0){
           return
         }else {
         this.productTagList.push(...products)
        this.productTagListArray.push(...this.productTagList[this.productTagList.length -1].products)
       } 
  }

  onItemRemoved($event){
   this.productTagListArray =  this.productTagListArray.filter((el)=>{
           return el.type !== $event.value
   })
   console.log(this.productTagListArray)
  }
  

}
