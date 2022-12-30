import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';


import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movies:Movie[]=[];
  dataLoaded=false;
 
  
  
  constructor(private movieService:MovieService,private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["movieId"]){

    }
    else{
      this.getMovies();
    }
   })
    
  }

  getMovies(){
  
     this.movieService.getMovies().subscribe(response=>{
      this.movies=response.data;
      this.dataLoaded=true;
      
     })
     
  }

}
