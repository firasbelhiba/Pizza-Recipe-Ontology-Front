import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {

  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getInstance(classname:any): Observable<any[]> {
    return this.http.get<any>(`${this.url}/Instances?classname=${classname}`);
  }
  getSubClasses(classname:any): Observable<any[]> {
    return this.http.get<any>(`${this.url}/subClasses?classname=${classname}`);
  }
  getProprties(classname:any): Observable<any[]> {
    return this.http.get<any>(`${this.url}/getClasProperty?classname=${classname}`);
  }
  getMarques(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/query`);
  }
  getVehicules(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/getVehicules`);
  }
  addVehicule(name,couleur,nbPorte,marque,cylindree,boite,consomme,type): Observable<any[]> {
    return this.http.get<any>(`${this.url}/add?name=${name}&couleur=${couleur}&nbPorte=${nbPorte}&marque=${marque}&cylindree=${cylindree}&boite=${boite}&type=${type}&consomme=${consomme}`);
  }
}
