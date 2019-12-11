import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  libro: Libro = { id: 0, nombre: '', descripcion: '' };

  constructor(private route: ActivatedRoute, private libroService: LibroService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id: number = +this.route.snapshot.paramMap.get('id');
      console.log('Editar', id);
      this.libroService.getLibro(id).subscribe(libro => this.libro = libro);
    } else {
      console.log('Añadir');
    }
  }

}
