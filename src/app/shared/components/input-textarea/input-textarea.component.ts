import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent implements OnInit {

  @Input() id: string = "";

  @Input() control: FormControl;

  @Input() label: string = "";

  @Input() rows: number = 3;

  @Input() isRequired: boolean = false;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.isRequired) {
      const labelElement: HTMLLabelElement = this._elementRef.nativeElement.querySelector('label');
      labelElement.innerHTML += ' *';
    }
  }
}
