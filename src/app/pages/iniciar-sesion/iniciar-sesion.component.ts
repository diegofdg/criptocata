import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group(
      {
        password:['', [Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]
      }
    )
  }

  get Password() {
    return this.form.get("password");
  }
  
  get Mail() {
   return this.form.get("mail");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  } 

  ngOnInit(): void {
       
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert ("Enviar al servidor...")
    } else {
      this.form.markAllAsTouched();
    }
  }
}
