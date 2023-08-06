import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { CategoryService } from '../category.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  medicinelist: any[]=[];
  categorylist: any[]=[];  
  displayedMedicinelist:any[]=[];
  categoryFilter:number=-1;
  shouldFilter:boolean=false;
  searchTerm: String="";
  sort:String="";
  constructor(private medicineService: MedicineService, private categoryService: CategoryService, private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    let x:String=localStorage.getItem("userId")||"";
    if(x=="") {
      this.router.navigate(['/', 'login']);
    }
    this.medicineService.getMedicines().subscribe((res: any[]) => {
      this.medicinelist = res;
      this.computeDisplayedMedicinelist();
    });
    this.categoryService.getCategories().subscribe((res: any[]) => {
      this.categorylist = res;
    });
  }
  addToCart(medicineId:String) {
    let x:String=localStorage.getItem("userId")||""
   this.cartService.addCartItem(x,medicineId).subscribe((res: any[]) => {
    alert("done")
 });
  }
  onSearch(event: any) {
    this.searchTerm=event?.target?.value;
    this.computeDisplayedMedicinelist();
  }
  clearFilter() {
    this.shouldFilter=false;
    this.computeDisplayedMedicinelist();    
  }
  categoryFilters(categoryId:number) {
    this.shouldFilter=true;
    this.categoryFilter=categoryId;
    this.computeDisplayedMedicinelist();
  }
  sortMedicines(event:any) { 
    this.sort=event.target?.value;
    this.computeDisplayedMedicinelist();
  }
  computeDisplayedMedicinelist() {
    this.displayedMedicinelist=this.medicinelist.filter(item=>item.enable);
    if(this.searchTerm) {
      this.displayedMedicinelist=this.displayedMedicinelist.filter(item=>item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)
    }
    
    if(this.shouldFilter){
      this.displayedMedicinelist=this.displayedMedicinelist.filter(item=>item.category?.id==this.categoryFilter)
    }
    if(this.sort== "asc"){
      this.displayedMedicinelist=this.displayedMedicinelist.concat().sort((a,b)=>a.price-b.price);  
    }
    else if(this.sort=="desc") {
      this.displayedMedicinelist=this.displayedMedicinelist.concat().sort((a,b)=>b.price-a.price);  
    }

  }
}