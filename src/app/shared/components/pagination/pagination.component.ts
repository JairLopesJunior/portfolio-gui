import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';
import { RepoService } from 'src/app/services/repo.service';
import { NotifierService } from 'angular-notifier';

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

  constructor(private _repoService: RepoService,
              private _notifierService: NotifierService) {
    this._notifierService = _notifierService;
  }

  ngOnInit(): void {
  }

  public getReposPerPage(page: number): void {
    page = Number(page);
    if (page < 1 || page > 5) {
      this._notifierService.notify('error', 'Número inválido.');
      this.inputValue.nativeElement.value = "";
      return;
    }
    this._repoService.getCityRegistered(page).subscribe({
      next: (response: Repos[]) => {
        this._notifierService.notify('success', 'Busca efetuada com sucesso.');
        this.pageNumber = page;
        this.reposOnChange.emit(response);
        this.inputValue.nativeElement.value = "";
      },
      error: (err: any) => {
      }
    });
  }
}
