import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Page1Component } from '../components/page1/page1.component';
import { Page2Component } from '../components/page2/page2.component';
import { Page3Component } from '../components/page3/page3.component';
import { Error404Component } from '../components/error404/error404.component';

// TODO define your components as pages
const routes: Routes = [
  {path: '', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 1- This forChild should be forRoot
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
