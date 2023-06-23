import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @ViewChild('inputValue', { static: false }) inputValue: ElementRef;

  @Input() pages: Repos[] = [];

  @Output() reposOnChange: EventEmitter<Repos[]> = new EventEmitter<Repos[]>();

  pageNumber: number = 1;

  constructor(private _repoService: RepoService) { }

  ngOnInit(): void {
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
        this.reposOnChange.emit(response);
        this.inputValue.nativeElement.value = "";
      },
      error: (err: any) => {
      }
    });
  }
}
