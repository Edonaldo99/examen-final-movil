import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  selector: 'app-login',
  template: `
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Iniciar Sesión</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <ion-item>
            <ion-input
              label="Email"
              formControlName="email"
              type="email">
            </ion-input>
          </ion-item>
          <p *ngIf="form.controls.email.invalid && form.controls.email.touched" style="color:red;">
            Email inválido
          </p>

          <ion-item>
            <ion-input
              label="Contraseña"
              formControlName="password"
              type="password">
            </ion-input>
          </ion-item>
          <p *ngIf="form.controls.password.invalid && form.controls.password.touched" style="color:red;">
            La contraseña es requerida
          </p>

          <ion-button expand="full" type="submit" [disabled]="form.invalid">
            Iniciar sesión
          </ion-button>
        </form>
      </ion-card-content>
    </ion-card>
  </ion-content>
  `
})
export class LoginPage {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  async onSubmit() {
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/home']),
      error: async () => {
        const t = await this.toast.create({
          message: 'Credenciales incorrectas',
          color: 'danger',
          duration: 1500
        });
        t.present();
      }
    });
  }
}
