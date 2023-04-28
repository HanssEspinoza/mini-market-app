import { inject, Injectable } from '@angular/core';

import { ApiService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService);

  sendLogin(body: any): Observable<any> {
    return this.apiService.store('asdasd',body);
  }

}
