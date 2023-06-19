import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { map } from 'rxjs/operators';
import { Repos } from 'src/app/models/repos.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  repos: string[] = [];

  constructor(private _repoService: RepoService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  public getRepos = (): void => {
    this._repoService.getCityRegistered()
    .pipe(
      map((repos: Repos[]) => repos.map(rr => rr.name))
    )
    .subscribe({
      next: (response) => {
        this.repos = response;
      },
      error: (err: any) => {
      }
    });
  }
}
