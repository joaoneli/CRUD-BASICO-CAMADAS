import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  deleteSuccess$ = new Subject<void>();
  deleteError$ = new Subject<void>();
  updateSuccess$ = new Subject<void>();
  constructor(private http: HttpClient){}

  insert(cliente: Cliente): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}cliente`, cliente);
  }

  update(cliente: Cliente){
    this.http.put<boolean>(`${environment.apiUrl}cliente`, cliente).subscribe(success => {
      this.updateSuccess$.next();
    });
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiUrl}cliente`);
  }

  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${environment.apiUrl}cliente/GetById?id=${id}`);
  }

  Delete(id: number) {
    return this.http.delete<boolean>(`${environment.apiUrl}cliente?id=${id}`).subscribe(success=>{
      this.deleteSuccess$.next();
    }, error =>{
      this.deleteError$.next();
    });
  }
}
