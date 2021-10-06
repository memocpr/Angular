import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{

    error=new Subject<string>();

    constructor(private http:HttpClient){}

    createAndStorePost(title:string,content:string){
        const postData:Post={
            title: title,
            content: content
        }

        this.http
      .post<{name:string}>(
        'https://angular-cdb0a-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
            observe:'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, err=>{
          this.error.next(err.meassage)
      });

    }

    fetchPost(){

        let searchParams=new HttpParams();
        searchParams=searchParams.append('print', 'pretty');
        searchParams=searchParams.append('custom','key');

     return this.http.get<{[key:string]:Post}>('https://angular-cdb0a-default-rtdb.firebaseio.com/posts.json',
     {
         headers:new HttpHeaders({'Custom-Header':'Hello'}),
         params: searchParams,
         responseType:'json'
     }
     )
    .pipe(
      map((responseData)=>{
        const postArray: Post[]=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key], id:key});
          }
        }
        return postArray;
      }),
      catchError(errorRes=>{
       return throwError(errorRes);
      })
      );

    }

    deletePost(){
       return this.http.delete('https://angular-cdb0a-default-rtdb.firebaseio.com/posts.json',
       {
           observe:'events'
       }
       ).pipe(
           tap(event=>{
               console.log(event);
           })
       );
    }

}