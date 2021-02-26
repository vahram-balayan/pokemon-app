import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomerComponent } from './randomer/randomer.component';
import { FilterComponent } from './filter/filter.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomerComponent,
    FilterComponent,
    PokemonComponent,
    LoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
