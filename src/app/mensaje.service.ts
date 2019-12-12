import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private ultimoId = 0;
  private mensajes: Mensaje[] = [];

  constructor() {
    this.enviar({ texto: 'Correcto', tipo: 'success' });
    this.enviar({ texto: 'Mal', tipo: 'danger' });
   }

  enviar(mensaje: Mensaje) {
    mensaje.id = ++this.ultimoId;
    this.mensajes.push(mensaje);
  }

  borrar(mensaje: Mensaje | number) {
    const id: number = typeof mensaje === 'number' ? mensaje : mensaje.id;
    this.mensajes = this.mensajes.filter(m => m.id !== id);
  }

  obtener(): Mensaje[] {
    return this.mensajes;
  }
}
