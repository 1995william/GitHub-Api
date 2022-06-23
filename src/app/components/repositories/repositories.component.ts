import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/github.service';

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

  // método previous que decrementa contador para retornar a página anterior (lista API)

  previous() {
    if (this.count > 1) {
      this.count--;
      this.listRepositories();
    }
  }

 // método next que incrementa contador para próxima a página (lista API)

  next() {
    this.count++;
    this.listRepositories();
  }

// método search que executa a listRepositories
 search() {
  this.count = 1;
  this.listRepositories();
 }
  // método listRepositories que lista todos os dados da API retornado pelo getData

  listRepositories() {
    const input = this.inputValue;
    const count = this.count;
    this.githubService
      .getData({input, count})
      .subscribe((repo) => {
        this.totalResults = `${repo.total_count} repository results`;
        this.repositories = repo.items;
      });
  }
}
