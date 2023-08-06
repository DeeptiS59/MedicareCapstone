import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPwdComponent,
    RegisterComponent,
    CreateCategoryComponent,
    MedicineComponent,
    AdminComponent,
    CategoryListComponent,
    MedicineListComponent,
    UserHomepageComponent,
    CartComponent,
    PaymentComponent,
    OrderSuccessComponent,
    EditMedicineComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
