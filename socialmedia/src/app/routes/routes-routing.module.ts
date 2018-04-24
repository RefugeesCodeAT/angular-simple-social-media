import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Error404Component } from '../components/error404/error404.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';

// TODO define your components as pages
const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 1- This forChild should be forRoot
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
