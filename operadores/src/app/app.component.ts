import { Component, OnInit } from '@angular/core';
import { MapService } from './services/map/map.service';
import { PluckService } from './services/pluck/pluck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'operadores';
  constructor(
    private mapService:MapService,
    private pluckServices:PluckService

  ){}

  ngOnInit(): void {
    //this.mapService.getTotal();
    this.pluckServices.getUsers();
  }


}
