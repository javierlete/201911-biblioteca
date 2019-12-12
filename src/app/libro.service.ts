import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[];

  private url = 'http://localhost:3000/libros/';

  constructor(private http: HttpClient, private mensajeService: MensajeService) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url).pipe(
      tap(l => this.mensajeService.enviar(
          { texto: 'Recogida lista de libros', tipo: 'success' }
        )
      )
    );
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(this.url + id).pipe(
      tap(l => this.mensajeService.enviar(
          { texto: 'Obtenido libro ' + l.id, tipo: 'success' }
        )
      )
    );
  }

  insertLibro(libro: Libro): Observable<Libro> {
    console.log('AÑADIR');
    return this.http.post<Libro>(this.url, libro).pipe(
      tap(l => this.mensajeService.enviar(
          { texto: 'Libro añadido: ' + l.id, tipo: 'success' }
        )
      )
    );
  }

  updateLibro(libro: Libro): Observable<Libro> {
    console.log('ACTUALIZAR');
    return this.http.put<Libro>(this.url + libro.id, libro).pipe(
      tap(l => this.mensajeService.enviar(
          { texto: 'Libro modificado: ' + l.id, tipo: 'success' }
        )
      )
    );
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id).pipe(
      tap(_ => this.mensajeService.enviar(
          { texto: 'Libro borrado: ' + id, tipo: 'success' }
        )
      )
    );
  }
}
