import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postService:PostsService){}

  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    const newPost:Post={
      title:form.value.title,
      content:form.value.content
    };

    this.postService.addPost(newPost);
     
  }

}
