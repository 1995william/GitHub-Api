import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  totalResults: string | undefined;
  repositories: Array<any> = new Array();
  inputValue: string | undefined;
  count: number = 1;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  previous() {
    if (this.count > 1) {
      this.count--;
      this.listRepositories();
    }
  }

  next() {
    this.count++;
    this.listRepositories();
  }

  listRepositories() {
    this.githubService
      .getData(this.inputValue, this.count)
      .subscribe((repo) => {
        this.totalResults = `${repo.total_count} repository results`;
        this.repositories = repo.items;

        console.log(this.repositories);
      });
  }
}
