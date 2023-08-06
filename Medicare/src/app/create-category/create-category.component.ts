import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit{
  category:any={};
  constructor(private categoryService: CategoryService, private router: Router) { }
  
  ngOnInit(): void {
    let userRole:String=localStorage.getItem("userRole")||"";
    if(userRole!=="admin") {
      this.router.navigate(['/', 'login']);
    } 
  }
  onSubmit()
  {
    
    this.categoryService.saveCategory(this.category).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/category"])
    });
  }
  
  }