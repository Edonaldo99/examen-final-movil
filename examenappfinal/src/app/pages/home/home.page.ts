import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [IonicModule, RouterModule],
  template: `
  <ion-content>
    <ion-card>
      <ion-card-content>
        <h2>Bienvenido al HOME PAGE</h2>
        <ion-button routerLink="profile">Ir a Perfil</ion-button>
      </ion-card-content>
    </ion-card>
  </ion-content>
  `
})
export class HomePage {}
