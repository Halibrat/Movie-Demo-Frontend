import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movieEditFormGroup:FormGroup
  movie:Movie = {id: 0, name: "",description:"",type:""};
  constructor(private formBuilder:FormBuilder,private movieService:MovieService,private toastrService:ToastrService,private router: Router){}
  ngOnInit(): void {
    this.createMovieUpdateForm();
  }

  createMovieUpdateForm(){
      this.movieEditFormGroup=this.formBuilder.group({
        name: ["", Validators.required],
        decription: ["", Validators.required],
        type: ["", Validators.required]

      });
  }

  delete(){
    this.movieService.delete(this.movie).subscribe(response => {
      this.toastrService.success(response.message);
      this.router.navigate(["movies"]);
    })
  }

  update() {
    let movieModel: Movie= Object.assign({id: this.movie.id}, this.movieEditFormGroup.value);
    if (this.movieEditFormGroup.valid) {
      this.movieService.update(movieModel).subscribe((response) => {
        this.toastrService.success("Brand is successfully updated.");
      }, (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i]);
          }
        }
      });
    } else {
      this.toastrService.error("Complete the form!");
    }
  }
 
    
 

}
