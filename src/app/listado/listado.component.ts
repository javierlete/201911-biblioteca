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
    this.libroService.getLibros().subscribe(libros => this.libros = libros);
  }

}
