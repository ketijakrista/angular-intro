import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { FormsModule } from '@angular/forms';
import { CatCardComponent } from './cats/cat-card/cat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
