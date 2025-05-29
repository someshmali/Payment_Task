import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';
  loginSuccess: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginSuccess = true;
      this.loginMessage = 'Login successful! Redirecting...';
      setTimeout(() => {
        this.router.navigate(['/payment']);
      }, 1500);
    } else {
      this.loginSuccess = false;
      this.loginMessage = 'Invalid username or password';
    }
  }

  showPassword: boolean = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

}
