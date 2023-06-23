import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { Repos } from 'src/app/models/repos.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  repos: Repos[] = [];

  pages = [1, 2, 3, 4, 5];

  constructor(private _repoService: RepoService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  /*public getRepos = (): void => {
    this._repoService.getCityRegistered()
    .pipe(
      map((repos: Repos[]) => repos.map(rr => rr.name))
    )
    .subscribe({
      next: (response: Repos[]) => {
        this.repos = response;
      },
      error: (err: any) => {
      }
    });
  }*/

  public getRepos = (): void => {
    this._repoService.getCityRegistered()
    .subscribe({
      next: (response: Repos[]) => {
        this.repos = response;
      },
      error: (err: any) => {
      }
    });
  }

  public getReposPagination(evt: Repos[]): void {
    this.repos = evt;
  }
}
