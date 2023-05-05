import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';
import { RepoService } from '../../../services/repo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
