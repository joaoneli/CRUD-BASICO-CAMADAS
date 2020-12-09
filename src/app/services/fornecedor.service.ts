import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  deleteSuccess$ = new Subject<void>();
  deleteError$ = new Subject<void>();
  updateSuccess$ = new Subject<void>();
  constructor(private http: HttpClient){}

  insert(fornecedor: Fornecedor): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}fornecedor`, fornecedor);
  }

  update(fornecedor: Fornecedor){
    this.http.put<boolean>(`${environment.apiUrl}fornecedor`, fornecedor).subscribe(success => {
      this.updateSuccess$.next();
    });
  }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${environment.apiUrl}fornecedor`);
  }

  getById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${environment.apiUrl}fornecedor/GetById?id=${id}`);
  }

  Delete(id: number) {
    return this.http.delete<boolean>(`${environment.apiUrl}fornecedor?id=${id}`).subscribe(success=>{
      this.deleteSuccess$.next();
    }, error =>{
      this.deleteError$.next();
    });
  }
}
