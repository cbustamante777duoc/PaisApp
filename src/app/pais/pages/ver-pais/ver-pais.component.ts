import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap,tap} from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorALPHA(param.id)),
        //tap recibe el switchMap y muestra el console.log
        tap(console.log)
      )
      .subscribe(pais=>this.pais = pais)

    // //obteniendo el codigo alpha de la url
    // this.activatedRoute.params
    //     .subscribe(params =>{
    //       console.log(params.id);
    // // uso del metodo para getPaisAlpha para obtener el pais por id
    //       this.paisService.getPaisPorALPHA(params.id)
    //         .subscribe(pais=>{
    //           console.log(pais);
    //         })
    //     });
  }

}
