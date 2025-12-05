import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any = {
    username:'',
    fullname:'',
    email:''
  }
  authService = inject(AuthService);
  router = inject(Router);
  login() {
    this.authService.setUser(this.user);
    this.router.navigate(['home']);
  }
}
