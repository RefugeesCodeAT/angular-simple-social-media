import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO define your components as pages
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)], // 1- This forChild should be forRoot
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
