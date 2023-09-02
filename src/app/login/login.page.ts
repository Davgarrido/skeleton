import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  username: string | null = null;
  contrasena: string = '';

  constructor(
    private navCtrl: NavController,
    private SharedService: SharedService
    ) {}

  agregarDatos() {
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      const usu = (document.querySelector('input[name="User"]') as HTMLInputElement).value;
      this.SharedService.setUsername(usu);
      this.navCtrl.navigateForward('/home');
    }
    else {alert}
  }
  reestablecer(){
    
  }
}