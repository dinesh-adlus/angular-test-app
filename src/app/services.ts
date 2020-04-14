import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class TestingService {
  cars: string[];
  constructor(public http: HttpClient) {
    this.cars = ['toyota', 'Honda', 'mercedes', 'Audi'];
  }
  getcardetails(response) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map(data => data)
    );
  }
}
