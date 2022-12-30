import { MovieService } from './../services/movie.service';
import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movieAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private movieService:MovieService,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.createMovieAddForm();
    this.add();
  }

  createMovieAddForm(){
    this.movieAddForm=this.formBuilder.group({
      
    name:["",Validators.required],
    description:["",Validators.required],
    type:["",Validators.required]
    })
  }

  add(){
    if(this.movieAddForm.valid){
      let movieModal= Object.assign({},this.movieAddForm.value) 
      this.movieService.add(movieModal).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Film ekleme işlemi gerçekleşti.")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.lenght; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            
          }
          
        }
        
      })
      
    }
    else{
      this.toastrService.error("Formunuzda eksik alan mevcut")
    }
   
  }

}
