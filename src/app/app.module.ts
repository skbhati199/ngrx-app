import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CounterComponent,
    PostsComponent,
    CounterOutputComponent,
    CounterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
