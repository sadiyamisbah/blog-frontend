import { Injectable } from '@angular/core';

//importing http client to make the request
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


//import observable related code
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public authToken = 'Yjc0YjU0NzgzMzI5ZDA4YWYxYjhjNTM3YzFlNGY0OTkwOTAxNzI2ZDIwMWQ2MWQ5N2Q2YWIzMmNlNTE3OGQwY2IyYTZkYWNmZjU3ODc4ZjUzZTUzZjc2OWI5NWI1YWFkNjY4YzM1ODMyODg4MWIzMWJmZTk5ZTE1ZjNkZjk0Mzc1NWJh';
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) { 
    console.log("blog-http service was called")
  }

  //exception handler

  private handleError(err: HttpErrorResponse){
    console.log("handle error http called");
    console.log(err.message)
    return Observable.throw(err.message)
  }

   //home
 public getAllBlogs() : any{
   let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
   console.log(myResponse);
   return myResponse;

}


//blog-view
public getSingleBlogInformation(currentBlogId): any{
  let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId+'?authToken=' + this.authToken)
return myResponse
}

//create
public createBlog(blogData): any{
  let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
  return myResponse;
}

//delete

public deleteBlog(blogId): any{
  let data={}
  let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken,data)
  return myResponse;
}

//edit 
public editBlog(blogId,blogData): any{
  let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
  return myResponse;
}

}