import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  directionData = new Subject;
  reqBody = [
    {
      "origin_coordinates": {
        "origin_lat": 22.6926,
        "origin_long": 75.8676
      }
    },
    {
      "direction_coordinates": {
        "north": {
          "lat": 22.685414,
          "long": 75.873215
        },
        "east": {
          "lat": 22.683387,
          "long": 75.857432
        },
        "south": {
          "lat": 22.697979,
          "long": 75.864648
        },
        "west": {
          "lat": 22.698549,
          "long": 75.877839
        }
      }
    }
  ]
  constructor(private http: HttpClient) { }

  ///*

  fetchApiJson() {
     const url = "http://ec2-54-83-52-96.compute-1.amazonaws.com:5000/traffic_signal/";
    //  const url = "http://34.205.65.15:5000/traffic_signal/";
     //const url = "assets/dummyApi.json";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(url, this.reqBody, options).pipe(
      map((res) => res), catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  //*/
  
  /*
  
  // Dummy Json response api call......!
  fetchApiJson(){
    const url = "assets/dummyApi.json";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4300'
    });
    let options = { headers: headers };
    return this.http.get(url).pipe(
      map((res) => res), catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  */

}
