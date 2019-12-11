import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[] = [
    { id: 1, nombre: 'Java', descripcion: 'El mejor para los de Java...' },
    { id: 2, nombre: '.NET', descripcion: 'El mejor también...' }
  ];

  constructor() { }

  getLibros(): Observable<Libro[]> {
    return of(this.libros);
  }
}
