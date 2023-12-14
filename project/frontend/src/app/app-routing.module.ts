import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchstreetsComponent} from "./components/searchstreets/searchstreets.component";
import {NavComponent} from "./components/nav/nav.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'searchStrees', component: SearchstreetsComponent},
  {path: 'nav', component: NavComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


