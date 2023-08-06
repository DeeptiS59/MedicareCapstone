import { Component,OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicine:any={category:{}};
  categorylist:any={};
  constructor(private medicineService: MedicineService,private categoryService: CategoryService, private router:Router) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: any[]) => {
      this.categorylist = res;
    });
   
      let userRole:String=localStorage.getItem("userRole")||"";
      if(userRole!=="admin") {
        this.router.navigate(['/', 'login']);
      } 
    
  }
  onSubmit()
  {
    
    this.medicineService.saveMedicine(this.medicine).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/viewMedicine"]) 
    });
  }

}
