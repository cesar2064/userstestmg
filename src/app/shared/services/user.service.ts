import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { APP_CONSTANTS } from '~/app/app.constants';
import { Observable } from 'rxjs';
import { UserListResponseModel } from '../models/user.model';
@Injectable()
export class UserService {

  private url: string = APP_CONSTANTS.api.user;

  constructor(
    private httpClient: HttpClient
  ) { }

  list(page: number): Observable<UserListResponseModel> {
    return this.httpClient.get<UserListResponseModel>(`${this.url}?results=${APP_CONSTANTS.defaultResults}&page=${page}`);
  }
}
