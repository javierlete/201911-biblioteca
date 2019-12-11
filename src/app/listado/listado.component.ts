import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  libros: Libro[] = [
    { id: 1, nombre: 'Java', descripcion: 'El mejor...' },
    { id: 2, nombre: '.NET', descripcion: 'El mejor también...' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
