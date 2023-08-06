import { Component,OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicinelist: any;

  constructor(private medicineService: MedicineService, private router:Router) { }
  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe((res: any[]) => {
      this.medicinelist = res;
    });
  }
  deleteMedicine(id:number) {
   this.medicineService.deleteMedicine(id).subscribe((res: any[]) => {
    this.medicineService.getMedicines().subscribe((res: any[]) => {
      this.medicinelist = res;
    });
  });
  }
  
}
