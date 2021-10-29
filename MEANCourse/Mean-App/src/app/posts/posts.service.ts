import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {

 private posts:Post[]=[];
 private postsUpdated=new Subject<Post[]>()

 getPosts(){
   return this.posts;
 }

 addPost(p:Post){
  const newPost:Post={
    title:p.title,
    content:p.content
  };
  this.posts.push(newPost);
  this.postsUpdated.next([...this.posts]);
 }

 getPostUpdatedListener(){
   return this.postsUpdated.asObservable();
 }

}
