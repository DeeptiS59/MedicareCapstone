import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorylist: any;

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: any[]) => {
      this.categorylist = res;
    });
  }
  deleteCategory(id:number) {
   this.categoryService.deleteCategory(id).subscribe((res: any[]) => {
    this.categoryService.getCategories().subscribe((res: any[]) => {
      this.categorylist = res;
    });
  });
  }
  editCategories() {
    
     this.categoryService.getCategories().subscribe((res: any[]) => {
       this.categorylist = res;
     });
   
   }
}