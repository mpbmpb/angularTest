import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { TowerComponent } from './tower/tower.component';
import { InputPsKwComponent } from './input-ps-kw/input-ps-kw.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    TowerComponent,
    InputPsKwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
