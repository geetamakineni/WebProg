import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchRecipeComponent} from './search-recipe/search-recipe.component';
import {DisasterComponent} from "./disaster/disaster.component";
import {WeatherForecastComponent} from "./weather-forecast/weather-forecast.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'weather-forecast', component: WeatherForecastComponent},
  { path: 'search-recipe', component: SearchRecipeComponent},
  { path: 'disaster', component: DisasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
