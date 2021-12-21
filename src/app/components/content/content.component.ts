import { Component, OnInit } from '@angular/core';
import prodData from 'src/assets/data.json';
import commentsRev from 'src/assets/comments.json';

import { IProduct } from './content.interface';
import { showRunner } from './content.interface';
import { CommentRev } from './content.interface';
import { ContentService } from './content.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})

export class ContentComponent implements OnInit {

  constructor(private contentService : ContentService,
    private router : Router ) {
    this.selected = 2;

   }

  products: IProduct[] = prodData.products;
  mainProducts: showRunner[] = prodData.mainProducts;
  comment:CommentRev[] = commentsRev.comment;
  ngOnInit(): void {

  }

  contentForm = new FormGroup({
    img : new FormControl ("",[Validators.required]),
    stars : new FormControl("", [Validators.required]),
    name : new FormControl("",[Validators.required]),
    revive : new FormControl("",[Validators.required])
  })

  createBlock(){
    const comment = { 
      id:0,
      img: this.contentForm.value.img,
      stars: this.contentForm.value.stars,
      name: this.contentForm.value.name,
      revive: this.contentForm.value.revive
    };

    console.log(comment);

    this.contentService.createBlock(comment).subscribe(data=>{
      this.router.navigate(['/comment'])
    });
  
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
