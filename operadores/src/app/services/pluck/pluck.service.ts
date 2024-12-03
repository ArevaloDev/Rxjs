import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../interfaces/users/users.interface';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluckService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }


  getUsers = ( ) => {
    return this.http.get<Users>(this.url).pipe(
      pluck('username')
    ).subscribe(response => {
      console.log(response);
      
    })
  }
}
