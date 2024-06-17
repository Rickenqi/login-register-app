import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.successMessage = 'Registration successful!';
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = 'Registration failed.';
        }
      },
      (error) => {
        this.errorMessage = 'Registration failed.';
      }
    );
  }
}
