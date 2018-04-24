import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

// service
import { HttpService } from './services/http.service';

// Modules
import { RoutesModule } from './routes/routes.module';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    Page1Component,
    Page2Component,
    Page3Component
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
