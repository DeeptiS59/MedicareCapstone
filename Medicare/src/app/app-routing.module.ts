import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PaymentComponent } from './payment/payment.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"createCategory",component:CreateCategoryComponent},
  { path:"medicine",component:MedicineComponent},
  { path:"resetPassword",component:ResetPwdComponent},
  { path:"admin",component:AdminComponent},
  { path: "category",component:CategoryListComponent},
  { path: "viewMedicine",component:MedicineListComponent},
  { path: "homepage",component:UserHomepageComponent},
  { path:"cart",component:CartComponent},
  { path:"orderSuccess",component:OrderSuccessComponent},
  { path:"payment",component:PaymentComponent},
  { path:"editMedicine/:id", component:EditMedicineComponent},
  { path:"logout", component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
