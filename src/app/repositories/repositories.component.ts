import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  
  totalResults: string | undefined;
  repositories: Array<any> = new Array();

  inputValue: string | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

    listRepositories () {
      this.githubService.getData(this.inputValue).subscribe(repo => {
        this.totalResults = `${repo.total_count} Resultados`
        this.repositories = repo.items;

        console.log(typeof this.totalResults)
        console.log(this.repositories)

      })
    }
}
