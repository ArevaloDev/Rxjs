import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, range } from 'rxjs';
import { Users } from '../../interfaces/users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  getNumbers = () => {
    range(1, 10).pipe(
      filter(number => number % 2 === 0)
    ).subscribe(console.log);
  }

  getUsers= () => {
    return this.http.get<Users>(`${this.url}`).pipe(
      filter(user => user.username == "Karianne")
    ).subscribe(console.log)
  }
}
