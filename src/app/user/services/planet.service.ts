import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PlanetService {
  private planetsUrl = 'https://swapi.co/api/planets/';

  constructor(private _http: HttpClient) { }

  /** GET planets from the server */
  getPlanets(): Observable<any> {
    return this._http.get<any>(this.planetsUrl).pipe(map(planets => { return planets.results }));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
