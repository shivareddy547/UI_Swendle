import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Venue } from "app/models/venue";
 
@Injectable()
export class VenueService {
   constructor(private http: Http) {
   }
 
   getVenues(): Observable<Venue[]> {
      return this.http.get("http://localhost:3000/venues")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}