import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any={};
  constructor(private loginService: LoginService, private router: Router) { }
  onSubmit() {
     this.loginService.login(this.user).subscribe({
      error: (res:any) => {
        alert("Wrong user name or password");
      },
      next:(res: any) => {
      alert("done")
      localStorage.setItem("userId",res.id);     
      localStorage.setItem("userRole",res.role);
      if (res.role === 'admin') {
        this.router.navigate(['/', 'admin']);
      } else {
        this.router.navigate(['/', 'homepage']);
      }
   }});
   
  }

}
