import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  active: string;

  constructor(private product: ProductService) {
    this.active = 'top';
  }

  ngOnInit() {
    this.product.getProducts().subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  postToggle(opt: string) {
    this.active = opt;
  }
}
