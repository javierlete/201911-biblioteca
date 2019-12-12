import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: Mensaje[] = [];

  constructor(private mensajeService: MensajeService) { }

  ngOnInit() {
    this.mensajes = this.mensajeService.obtener();
  }

  onCerrar(mensaje: Mensaje) {
    this.mensajeService.borrar(mensaje);
    this.mensajes = this.mensajeService.obtener();
  }
}
