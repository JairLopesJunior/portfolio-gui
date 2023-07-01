import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() id: string = "";

  @Input() control: FormControl;

  @Input() label: string = "";

  @Input() type: string = "";

  @Input() isRequired: boolean = false;

  @Input() class: string = "form-control";

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
