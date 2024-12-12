import { Component, OnInit } from '@angular/core';
import { MapService } from './services/map/map.service';
import { PluckService } from './services/pluck/pluck.service';
import { MaptoService } from './services/mapto/mapto.service';
import { FilterService } from './services/filter/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'operadores';
  constructor(
    private mapService:MapService,
    private pluckService:PluckService,
    private mapToService:MaptoService,
    private filterService:FilterService

  ){}

  ngOnInit(): void {
    //this.mapService.getTotal();
    //this.pluckService.getUsers();
    //this.mapToService.click();
    //this.filterService.getNumbers();
    this.filterService.getUsers();
  }


}
