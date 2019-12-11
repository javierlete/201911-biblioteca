import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  libros: Libro[];

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.cargarLibros();
  }

  private cargarLibros() {
    this.libroService.getLibros().subscribe(libros => this.libros = libros);
  }

  onBorrar(id: number) {
    if (confirm(`¿Estás seguro de que quieres borrar el libro cuyo id es ${id}?`)) {
      this.libroService.deleteLibro(id).subscribe(_ => this.cargarLibros());
    }
  }

}
