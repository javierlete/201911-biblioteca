import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  libro: Libro = { id: 0, nombre: '', descripcion: '' };

  actualizar: boolean;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private location: Location) { }

  ngOnInit() {
    this.actualizar = this.route.snapshot.paramMap.has('id');

    if (this.actualizar) {
      const id: number = +this.route.snapshot.paramMap.get('id');
      console.log('ngOnInit', 'Editar', id);
      this.libroService.getLibro(id).subscribe(libro => this.libro = libro);
    } else {
      console.log('ngOnInit', 'Añadir');
    }
  }

  onAceptar() {
    if (this.actualizar) {
      this.libroService.updateLibro(this.libro).subscribe(
        libro => {
          console.log(libro);
          this.location.back();
        }
      );
    } else {
      this.libroService.insertLibro(this.libro).subscribe(
        libro => {
          console.log(libro);
          this.location.back();
        }
      );
    }

    
  }

}
