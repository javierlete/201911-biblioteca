import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[];

  private url = 'http://localhost:3000/libros/';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(this.url + id);
  }

  insertLibro(libro: Libro): Observable<Libro> {
    console.log('AÑADIR');
    return of(libro);
  }

  updateLibro(libro: Libro): Observable<Libro> {
    console.log('ACTUALIZAR');
    return of(libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }
}
