import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { map } from 'rxjs/operators';
import { Repos } from 'src/app/models/repos.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('inputValue', { static: false }) inputValue: ElementRef;

  repos: Repos[] = [];

  pageNumber: number = 1;

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

  public getReposPerPage(page: number): void {
    page = Number(page);
    if (page < 1 || page > 5) {
      alert("Número inválido.");
      this.inputValue.nativeElement.value = "";
      return;
    }
    this._repoService.getCityRegistered(page).subscribe({
      next: (response: Repos[]) => {
        this.pageNumber = page;
        console.log(this.pageNumber);
        this.repos = response;
        this.inputValue.nativeElement.value = "";
      },
      error: (err: any) => {
      }
    });
  }
}
