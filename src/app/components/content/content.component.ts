import { Component, OnInit } from '@angular/core';
import prodData from 'src/assets/data.json';
import commentsRev from 'src/assets/comments.json';

import { IProduct } from './content.interface';
import { showRunner } from './content.interface';
import { CommentRev } from './content.interface';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  constructor() {
    this.selected = 2;

   }

  products: IProduct[] = prodData.products;
  mainProducts: showRunner[] = prodData.mainProducts;
  comment:CommentRev[] = commentsRev.comment;
  ngOnInit(): void {

  }


  title = 'Star Rating';
  starList: boolean[] = [true, true, true, true, true];
  rating!: Number;
  selected!: Number;

  public stars: boolean[] = Array(5).fill(false);


  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }


selectButton(selectNum: number){
  this.selected = selectNum;
}

}
