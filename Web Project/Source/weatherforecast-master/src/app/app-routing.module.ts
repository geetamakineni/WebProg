import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchRecipeComponent} from './components/search-recipe/search-recipe.component';
import {DisasterComponent} from "./components/disaster/disaster.component";
import {WeatherForecastComponent} from "./components/weather-forecast/weather-forecast.component";

// Required components for which route services to be activated
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";


const appRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
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
