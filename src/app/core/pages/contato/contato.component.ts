import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupContato();
  }

  formGroupContato(): void {
    this.formContato = this._fb.group({
      name: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ])
      ],
      email: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(10)
        ])
      ],
      subject: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ])
      ],
      message: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(10)
        ])
      ],
    });
  }

  onSubmit(): void {
    console.log(this.formContato);
  }
}
