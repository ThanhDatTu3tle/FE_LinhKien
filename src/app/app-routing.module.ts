import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Customer/home/home.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '', 
        component: HomeComponent
      } 
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
