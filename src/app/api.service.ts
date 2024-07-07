import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://portal2websiteapi.cloudcampus24.com/api/';
  apiUrlV1 = 'https://portal2websiteapi.cloudcampus24.com/api/v1/';

  constructor(private http: HttpClient) {}

  getToken(post: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.post<any>(`${this.apiUrl}UserAuth/login`, post, options);
  }

  getNotices(clientData): Observable<any[]> {
    let parsedData = JSON.parse(clientData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${parsedData.AccessToken}`,
    });
    let options = { headers: headers };
    return this.http.get<any[]>(`${this.apiUrlV1}Notice/notices`, options);
  }

  isTokenExpired(clientData: any): boolean {
    let parsedData = JSON.parse(clientData);

    if (parsedData == null) {
      return true;
    }

    // Return if there is no token
    if (parsedData.AccessToken === '') {
      return true;
    }

    // Get the expiration date
    const expirationDate = new Date(parsedData.Expiration);

    if (expirationDate === null) {
      return true;
    }

    // Check if the token is expired
    const diff = new Date().getTime() - expirationDate.getTime();
    return diff > 0;
  }

  TransformUrl(value) {
    if (value.includes('https://')) {
      return value;
    } else {
      return `https://${value}`;
    }
  }
}
