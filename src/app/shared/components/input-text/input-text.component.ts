import { Component, OnInit, Input, forwardRef, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() label: string = "";
  @Input() id: string = "";
  @Input() isRequired: boolean = false;
  @Input() type: string = "";
  @Input() control: FormControl = new FormControl();

  onChange: any = () => {};
  onTouch: any = () => {};
  isTouched: boolean = false;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    this.removeInvalidClass();
  }

  ngAfterViewInit() {
    if (this.isRequired) {
      const labelElement: HTMLLabelElement = this._elementRef.nativeElement.querySelector('label');
      labelElement.innerHTML += ' *';
    }
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  onInputChange(event: any): void {
    this.onChange(event.target.value);
    this.onTouch();
  }

  onInputFocus(): void {
    if (!this.isTouched) {
      this.isTouched = true;
    }
  }

  hasError(): boolean {
    return this.control.invalid && this.control.touched;
  }

  getErrorMessage(): string | null {
    if (this.hasError()) {
      if (this.control.errors?.required) {
        return `${this.label} é obrigatório`;
      }
      if (this.control.errors?.minlength) {
        return `Mínimo de ${this.control.errors.minlength.requiredLength} caracteres.`;
      }
      if (this.control.errors?.maxlength) {
        return `Máximo de ${this.control.errors.maxlength.requiredLength} caracteres.`;
      }
      if (this.control.errors?.email) {
        return `${this.label} está inválido.`;
      }
    }
    return null;
  }

  getInputClass(): string {
    return this.hasError() ? 'form-control is-invalid' : 'form-control';
  }

  private removeInvalidClass(): void {
    setTimeout(() => {
      const inputElement: HTMLInputElement | null = document.getElementById(this.id) as HTMLInputElement;
      if (inputElement) {
        inputElement.classList.remove('ng-invalid');
      }
    });
  }
}
