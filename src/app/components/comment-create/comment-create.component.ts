import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { CommentModel } from './comment-create.model';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  formValue !: FormGroup;
  commentModelObj : CommentModel = new CommentModel();
  commentData !: any;

  constructor(private formbuilder: FormBuilder,
    private apiService: ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName: [''],
      email : [''],
      mobile : [''],
      salary : ['']
    })

    this.getAllCommment();
  }

  postCommentDetails(){

    this.commentModelObj.firstName = this.formValue.value.firstName;
    this.commentModelObj.lastName = this.formValue.value.lastName;
    this.commentModelObj.email = this.formValue.value.email;
    this.commentModelObj.mobile = this.formValue.value.mobile;
  

    this.apiService.postComment(this.commentModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Comment Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCommment();
    },
    err=>{
      alert("Something went wrong")
      }) 
    }

    getAllCommment(){
      this.apiService.getComment()
      .subscribe(res=>{
        this.commentData = res;
      })
    }
  }


