import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGatewayDto } from '../models/dto/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getGateways(): Observable<IGatewayDto[]> {
    return this.http.get<IGatewayDto[]>('api/gatewaysList');
  }
}
