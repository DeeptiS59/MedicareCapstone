import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router'
import { MedicineService } from '../medicine.service';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {
  medicineId: String="";
  medicine:any={category:{}};
  categorylist:any={};
  constructor(private route: ActivatedRoute,private medicineService: MedicineService,private categoryService: CategoryService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.medicineId = params.get('id')||""
      this.medicineService.getMedicine(this.medicineId).subscribe((res: any[]) => {
        this.medicine = res;
        this.medicine.category=this.medicine.category||{};
      });
    })
    
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
    
    this.medicineService.updateMedicine(this.medicineId,this.medicine).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/viewMedicine"]) 
    });
  }
}
