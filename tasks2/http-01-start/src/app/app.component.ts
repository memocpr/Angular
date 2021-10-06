import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

import {Post} from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loadedPosts:Post[] = [];
  isFetching=false;
  error=null;
  private errorSub:Subscription;


  constructor(private http: HttpClient, private postService:PostService) {}

  ngOnInit() {

   this.errorSub= this.postService.error.subscribe(
      errMessage=>{
        this.error=errMessage;
      }
    )

    this.isFetching=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    }, err=>{
      this.isFetching=false;
      this.error=err.message;
    });
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title,postData.content);

  }

  onFetchPosts() {
    this.isFetching=true;
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    }, err=>{
      this.isFetching=false;
      this.error=err.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(()=>{
      this.loadedPosts=[];
    }
    )
  }

  onHandleError(){
    this.error=null;
  }

  

}
