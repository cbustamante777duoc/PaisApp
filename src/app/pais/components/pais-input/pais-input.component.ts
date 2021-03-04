import { Component, Output,EventEmitter,OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //esto es para emitir eventos para ser usados en los componentes
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  debouncer:Subject<string> = new Subject();

  termino:string = '';

 
  ngOnInit(){
    this.debouncer
    .pipe(
      //espera 300 ms lo que escriba la persona y lo recibe
      debounceTime(300)
    )
    //envia el valor de lo que recibe en el input
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }

  //emite el valor del termino
  buscar(){
    this.onEnter.emit(this.termino);
  }

  //envia el valor(pais o la capital)
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

  

}
