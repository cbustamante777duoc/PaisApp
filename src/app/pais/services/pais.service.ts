import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string ='https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }
  //se pone el tipado que un arreglo de paises
  buscarPais(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
  //se pone el tipado que un arreglo de paises
    return this.http.get<Country[]>(url);
  }
}
