import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../interfaces/products/products.interface';
import { Users } from '../../interfaces/users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {}

  public  products$ = of([
    {name: 'Laptop', price:1000, quantity: 2},
    {name: 'Mouse', price:50, quantity: 5},
    {name: 'Keyboard', price:75, quantity: 3},
  ]
  )

  //REGRESAR  DATOS ESPECIFICOS DE USUARIOS CON MAP
  getUsers = () => {
    return this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            name: user.name.toUpperCase(),
            Eemail: user.email,
          }))
        )
      )
      .subscribe((response) => {
        console.log({ response });
      });
  };

  //REGRESAR EL PRECIO TOTAL DE LOS PRODUCTOS (PRECIO POR CANTIDAD)
  getTotal = () => {
    this.products$.pipe(
      map((products) => products.map((product:Products) => ({
        ...product,
        total: product.price * product.quantity
      }))

      )
    ).subscribe(console.log);
  }
}
