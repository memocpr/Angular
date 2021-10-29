import { Injectable } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {

 private posts:Post[]=[];

 getPosts(){
   return this.posts;
 }

 addPost(p:Post){
  const newPost:Post={
    title:p.title,
    content:p.content
  };
  this.posts.push(newPost);
 }

}
