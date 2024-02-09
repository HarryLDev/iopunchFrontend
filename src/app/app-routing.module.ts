import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SavedTimesComponent } from './saved-times/saved-times.component';
import { TimerComponent } from './timer/timer.component';
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'SavedTimes', component: SavedTimesComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'PunchIn', component:TimerComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
