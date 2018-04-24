import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

// service
import { HttpService } from './services/http.service';

// Modules
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
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
