import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje: Mensaje = { texto: 'Prueba', tipo: 'info' };

  constructor() { }

  ngOnInit() {
  }

}
