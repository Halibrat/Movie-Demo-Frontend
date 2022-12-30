import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl='https://localhost:44307/api/auths/';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
