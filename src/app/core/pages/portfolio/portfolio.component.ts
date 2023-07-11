import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { Repos } from 'src/app/models/repos.model';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('pagination', { static: false }) pagination: PaginationComponent;

  @ViewChild('paginationTwo', { static: false }) paginationTwo: PaginationComponent;

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

  public getCurrentPage(evt: number): void {
    this.pagination.setCurrentPage(evt);
    this.paginationTwo.setCurrentPage(evt);
  }
}
