import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  template: `
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Perfil de Usuario</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <form [formGroup]="form" (ngSubmit)="save()">
          
          <ion-item>
            <ion-input label="Nombre" formControlName="nombre"></ion-input>
          </ion-item>
          <p *ngIf="form.controls.nombre.invalid && form.controls.nombre.touched" style="color:red;">
            Nombre requerido
          </p>

          <ion-item>
            <ion-input label="Apellido" formControlName="apellido"></ion-input>
          </ion-item>
          <p *ngIf="form.controls.apellido.invalid && form.controls.apellido.touched" style="color:red;">
            Apellido requerido
          </p>

          <ion-item>
            <ion-input label="Correo" type="email" formControlName="email"></ion-input>
          </ion-item>
          <p *ngIf="form.controls.email.invalid && form.controls.email.touched" style="color:red;">
            Correo inválido
          </p>

          <ion-button expand="full" type="submit" [disabled]="form.invalid">
            Guardar
          </ion-button>
        </form>
      </ion-card-content>
    </ion-card>
  </ion-content>
  `
})
export class ProfilePage {
  form = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {}

  save() {
    console.log('Datos del formulario:', this.form.value);
  }
}
