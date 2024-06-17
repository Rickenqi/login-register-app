import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  query: string = '';
  users: any[] = [];
  filter: string = '';

  constructor(private route: ActivatedRoute, private githubService: GithubService) {}

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query') || '';
    this.githubService.searchUsers(this.query).subscribe((data: any) => {
      this.users = data.items;
    });
  }

  filteredUsers() {
    return this.users.filter(user => 
      user.login.includes(this.filter) || 
      user.id.toString().includes(this.filter) || 
      user.html_url.includes(this.filter)
    );
  }
}
