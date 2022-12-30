import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const routes: Routes = [
  //{path:"",pathMatch:"full",component:MovieComponent},
  {path:"movies",component:MovieAddComponent},
  {path:"movies/add",component:MovieAddComponent},//canActivate:[LoginGuard]
  {path:"login",component:LoginComponent},
  {path: "movies/edit", component:MovieEditComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
