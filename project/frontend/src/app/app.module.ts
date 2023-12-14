import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchstreetsComponent } from './components/searchstreets/searchstreets.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    SearchstreetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  exports: [MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
