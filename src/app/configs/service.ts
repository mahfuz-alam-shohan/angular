import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class Service
{
    Key: string;
    Cli: string;

    constructor(private http: HttpClient)
    {
        this.Key = environment.k;
        this.Cli = environment.c;
    }

    get(url: string): Observable<any>
    {
        const authToken = localStorage.getItem('accessToken');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        });
        return this.http.get(url, { headers: headers });
    }

    post(url: string, body: any): Observable<any>
    {
        const authToken = localStorage.getItem('accessToken');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        });
        return this.http.post(url, body, { headers: headers });
    }

    postFormData(url: string, body: any): Observable<any>
    {
        const authToken = localStorage.getItem('accessToken');
        const headers = new HttpHeaders({
            // 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'Authorization': `Bearer ${authToken}`
        });
        return this.http.post(url, body, { headers: headers });
    }

    put(url: string, body: any): Observable<any>
    {
        const authToken = localStorage.getItem('accessToken');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        });
        return this.http.put(url, body, { headers: headers });
    }

    delete(url: string): Observable<any>
    {
        const authToken = localStorage.getItem('accessToken');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        });
        return this.http.delete(url, { headers: headers });
    }


    getKey(url: string): Observable<any>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-App-Key': this.Key,
            'X-App-Client': this.Cli
        });
        return this.http.get(url, { headers: headers });
    }


}
