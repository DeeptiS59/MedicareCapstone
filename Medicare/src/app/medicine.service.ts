import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(public HttpClient: HttpClient) { }
  public getMedicines():any{
    let url = "http://localhost:8080/medicine";
    return this.HttpClient.get(url);
  }
  public saveMedicine(medicine:any):any{
    let url = "http://localhost:8080/medicine";  
    return this.HttpClient.post(url,medicine)
  }
  public deleteMedicine(id:number):any{
    let url = "http://localhost:8080/medicine/"+id;  
    return this.HttpClient.delete(url)
  }
  public getMedicine(id:String):any{
    let url = "http://localhost:8080/medicine/"+id;  
    return this.HttpClient.get(url)
  }
  public updateMedicine(id:String,medicine:any):any{
    let url = "http://localhost:8080/medicine/"+id;  
    return this.HttpClient.patch(url,medicine)
  }

}