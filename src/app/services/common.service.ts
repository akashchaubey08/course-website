import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { 
  }

  public getData(): Observable<any> {
    const url = 'assets/data.json';
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
