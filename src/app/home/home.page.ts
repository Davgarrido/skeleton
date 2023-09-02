import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username: string | null = null;
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';
  static usuario: string;

  constructor(
    private alertController: AlertController,
    private SharedService: SharedService,
    
    ) {}

  async mostrarInformacion() {
      const alert = await this.alertController.create({
        header: 'Información del Usuario',
        message: ` ${this.nombre} ${this.apellido}`,
        buttons: ['Cerrar'],
      });

      await alert.present();
  }

  ngOnInit(){
    this.username = this.SharedService.getUsername();
  }
  
  

  

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }
}