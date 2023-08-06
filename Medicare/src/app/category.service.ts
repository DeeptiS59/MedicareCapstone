import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public HttpClient: HttpClient) { }
  public getCategories():any{
    let url = "http://localhost:8080/category";
    return this.HttpClient.get(url);
  }
  public saveCategory(category:any):any{
    let url = "http://localhost:8080/category";  
    return this.HttpClient.post(url,category)
  }
  public deleteCategory(id:number):any{
    let url = "http://localhost:8080/category/"+id;  
    return this.HttpClient.delete(url)
  }

}

