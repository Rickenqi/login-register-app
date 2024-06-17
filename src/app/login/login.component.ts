import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'The user does not exist.';
        }
      },
      (error) => {
        this.errorMessage = 'The user does not exist.';
      }
    );
  }
}
