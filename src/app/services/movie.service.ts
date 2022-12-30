import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Movie } from '../models/movie';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl="https://localhost:44307/api/";
  apiUrlAdd="https://localhost:44307/api/movies/add"
  constructor(private httpClient:HttpClient) { }
  getMovies():Observable<ListResponseModel<Movie>>{
    let newPath=this.apiUrl+"movies/getall"
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
 }

 add(movie:Movie):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrlAdd,movie)
 }

 delete(movie: any): Observable<ResponseModel>{
  let newPath: string = this.apiUrl + "/movies/delete";
  return this.httpClient.post<ResponseModel>(newPath, movie);
}

update(movie: Movie): Observable<ResponseModel> {
  let newPath: string = this.apiUrl + "/movies/update";
  return this.httpClient.post<ResponseModel>(newPath, movie);
}
}
