import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TimerComponent } from './timer/timer.component';
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'PunchIn', component:TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
