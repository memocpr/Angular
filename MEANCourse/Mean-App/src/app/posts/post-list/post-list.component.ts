import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  /* posts=[
    {title:"First Post", content:"First Post Content"},
    {title:"Second Post", content:"Second Post Content"},
    {title:"Third Post", content:"Third Post Content"},
  ] */

  postList:Post[]=[];
  private postsSub:Subscription;

  constructor(public postService:PostsService){}

  ngOnInit(){
    this.postList=this.postService.getPosts();

    this.postsSub=this.postService.getPostUpdatedListener()
    .subscribe((p:Post[])=>{
      this.postList=p;
    })
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
