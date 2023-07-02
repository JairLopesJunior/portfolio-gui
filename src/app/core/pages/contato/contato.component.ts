import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;

  constructor(private _fb: FormBuilder,
              private _notifierService: NotifierService) {
    this._notifierService = _notifierService;
  }

  ngOnInit(): void {
    this.formGroupContato();
  }

  formGroupContato(): void {
    this.formContato = this._fb.group({
      name: ['', [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ]
      ],
      email: ['', [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(10),
          Validators.email
        ]
      ],
      subject: ['', [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ]
      ],
      message: ['', [
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(10)
        ]
      ],
    });
  }

  onSubmit(): void {
    if(this.formContato.invalid) {
      console.log(this.formContato);
      this.formContato.markAllAsTouched();
      this._notifierService.notify('error', 'Campos obrigatórios não informados.');
    }
  }

  applyCssErro(campo: any): any {
    return {
      'has-error': this.validTouched(campo),
      'has-feedback': this.validTouched(campo)
    };
  }

  validTouched(campo: string): boolean {
    return !this.formContato.get(campo)?.valid 
    && this.formContato.get(campo)?.touched;
  }
}
