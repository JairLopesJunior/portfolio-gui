import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() valuenow: number = 0;

  @Input() valuemin: number = 0;

  @Input() valuemax: number = 100;

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
    const vv = this.valuenow;
    let value = 0;
    this.valuenow = 0;

    const interval = setInterval(() => {
      this.valuenow = value++;

      this.valuenow = this.valuenow;

      if (this.valuenow === vv) {
        clearInterval(interval);
        return;
      }
    }, 100);
  }
}
