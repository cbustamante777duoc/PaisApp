import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino:string = '';
  hayError:boolean = false;
  paises : Country[] = [];

  constructor(private paisService:PaisService) { }

  Buscar(termino:string){
    
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
        .subscribe((paises) =>{
          console.log(paises);
          //el arreglo de paises se llena con la respuesta 
         this.paises = paises;
        
        },(err)=>{
          this.hayError = true;
          this.paises = [];
        });
  }

  sugerencias(termino:string){
    this.hayError= false;
  }

}
