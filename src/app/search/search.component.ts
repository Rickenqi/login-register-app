import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  search() {
    if (!this.username.match(/^[a-zA-Z0-9-]+$/)) {
      this.errorMessage = 'Invalid username. Only alphanumeric characters and hyphens are allowed.';
      return;
    }

    this.router.navigate(['/results', { query: this.username }]);
  }
}
