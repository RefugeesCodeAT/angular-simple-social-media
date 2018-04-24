import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

// service
import { HttpService } from './services/http.service';

// Modules
import { RoutesModule } from './routes/routes.module';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AllpostsComponent } from './components/allposts/allposts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    Error404Component,
    NavbarComponent,
    AboutusComponent,
    AllpostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
