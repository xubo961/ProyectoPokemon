import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrl: './fomulario.component.scss'
})
export class FomularioComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      category: ["", [Validators.required]]
    })
  }

  enviar() {
    alert("Formulario enviado");
  }

}
