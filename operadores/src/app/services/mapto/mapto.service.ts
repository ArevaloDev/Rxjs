import { Injectable } from '@angular/core';
import { fromEvent, mapTo } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaptoService {

  constructor() { }

  click = ( ) => {
    fromEvent(document,'click').pipe(
      mapTo('Accion realizada con exito')).subscribe(message => {
        console.log(message);
        
      })
    }
}
