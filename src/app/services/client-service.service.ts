import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainResponseDto } from '../dtos/main-response-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ClientRegisterDto } from '../dtos/client-register-dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getAdvencedSearch(clientRegister: ClientRegisterDto): Observable<MainResponseDto> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<MainResponseDto>(environment.URL_BACK_ALIANZA+'/GetAdvencedSearch', clientRegister, options);
  }

  register(clientRegister: ClientRegisterDto): Observable<MainResponseDto> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<MainResponseDto>(environment.URL_BACK_ALIANZA+'/Register', clientRegister, options);
  }

  getBySharedKey(sharedKey: string): Observable<MainResponseDto> {
    return this.http.get<MainResponseDto>(environment.URL_BACK_ALIANZA+'/GetBySharedKey/'+sharedKey);
  }

  getAll(): Observable<MainResponseDto> {
    return this.http.get<MainResponseDto>(environment.URL_BACK_ALIANZA+'/GetAll');
  }

}
