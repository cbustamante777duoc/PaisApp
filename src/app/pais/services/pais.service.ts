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
 
  //metodo que trae todos los paises con el termino de busqueda
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  //metodo que trae las capitales por el termino de busqueda
  buscarCapital(termino:string):Observable<Country[]>{
    //solo cambia el name por el capital
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

 // metodo que trae el pais por codigo alpha al final de la url
  getPaisPorALPHA(id:string):Observable<Country>{
    //solo cambia el name por el capital
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
